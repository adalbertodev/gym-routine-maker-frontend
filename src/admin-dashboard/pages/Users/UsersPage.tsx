import { FC } from 'react';
import { UsersContainer, UsersMain } from './styled-components';
import { UsersTable } from './components/UsersTable';

interface Props {}

export const UsersPage: FC<Props> = () => {
  return (
    <UsersContainer>
      <UsersMain>
        <UsersTable />
      </UsersMain>
    </UsersContainer>
  );
};
