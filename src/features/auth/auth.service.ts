import jwt from 'jsonwebtoken';
import { IAuth } from './auth.interface';
import Auth from './auth.model';
import User from '../user/user.model';

const generateAccessToken = (userId: string, role: string) => {
  return jwt.sign({ id: userId, role }, process.env.SECRET_KEY as string, { expiresIn: '15m' });
};

const generateRefreshToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.REFRESH_SECRET_KEY as string, { expiresIn: '7d' });
};

export const createRefreshToken = async (userId: string) => {
  const refreshToken = generateRefreshToken(userId);
  const auth = new Auth({ userId, refreshToken });
  await auth.save();
  return refreshToken;
};

export const refreshToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_SECRET_KEY as string) as { id: string };
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new Error('User not found');
    }
    const accessToken = generateAccessToken(user._id as string, user.role);
    return accessToken;
  } catch (err) {
    throw new Error('Invalid refresh token');
  }
};
