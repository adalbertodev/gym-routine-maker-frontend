import { User } from '../../../../../models/entities/User';
import { TableUser } from '../models/TableUser';

export const convertToTableUser = (users: User[]): TableUser[] => {
  return users.map(user => ({ ...user }));
};
