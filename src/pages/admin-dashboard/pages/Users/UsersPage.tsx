import { FC } from 'react';

import { UsersTable } from './components/UsersTable/UsersTable';
import { UsersContainer } from './styled-components';

export const UsersPage: FC = () => {
  return (
    <UsersContainer>
      <UsersTable />
    </UsersContainer>
  );
};
