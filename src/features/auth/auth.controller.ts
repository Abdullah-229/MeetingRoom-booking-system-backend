import { Request, Response } from 'express';
import { createRefreshToken, refreshToken } from './auth.service';

export const generateNewRefreshToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = await createRefreshToken(req.body.userId);
    res.status(201).json({ refreshToken });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const refreshAccessToken = async (req: Request, res: Response) => {
  try {
    const accessToken = await refreshToken(req.body.refreshToken);
    res.status(200).json({ accessToken });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
