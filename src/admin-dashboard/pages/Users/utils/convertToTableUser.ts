import { User } from '../../../../shared/models/User';
import { TableUser } from '../models/TableUser';

export const convertToTableUser = (users: User[]): TableUser[] => {
  return users.map(user => ({ ...user, action: 'Action' }));
};
