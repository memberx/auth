import { omit } from 'lodash';
import playerModel, { Player } from '../models/player.model';
import { excludedFields } from '../controllers/player.controller';

// CreatePlayer service
export const createPlayer = async (input: Partial<Player>) => {
  const player = await playerModel.create(input);
  return omit(player.toJSON(), excludedFields);
};
