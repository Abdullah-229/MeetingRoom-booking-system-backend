import { Request, Response } from 'express';
import { createUser, authenticateUser } from './user.service';
import User from './user.model';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    
    if (err instanceof Error) {
    res.status(500).json({ message: err.message });
    } else {
    res.status(500).json({ message: 'An unknown error occurred' });
    }
    
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authenticateUser(email, password);
    res.status(200).json({ token });
  } catch (err) {
    if (err instanceof Error) {
      res.status(401).json({ message: err.message });
    } else {
      res.status(401).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getUser = async (req:Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
        res.status(401).json({ message: err.message });
      } else {
        res.status(401).json({ message: 'An unknown error occurred' });
      }
  }
};
