import config from 'config';
import { CookieOptions, NextFunction, Request, Response } from 'express';
import { CreatePlayerInput } from '../schema/player.schema';
import {
  createPlayer,
} from '../services/player.service';

// Exclude this fields from the response
export const excludedFields = ['password'];

export const registerHandler = async (
  req: Request<{}, {}, CreatePlayerInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createPlayer({
      name: req.body.name,
    });

    res.status(201).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err: any) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(409).json({
        status: 'fail',
        message: 'Email already exist',
      });
    }
    next(err);
  }
};