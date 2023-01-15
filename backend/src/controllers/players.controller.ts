import { NextFunction, Request, Response } from 'express';
import { findAllPlayers } from '../services/players.service';

export const getMeHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const players = res.locals.players;
    res.status(200).json({
      status: 'success',
      data: {
        players,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllPlayersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const players = await findAllPlayers();
    res.status(200).json({
      status: 'success',
      result: players.length,
      data: {
        players,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
