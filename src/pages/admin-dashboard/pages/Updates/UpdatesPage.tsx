import { FC } from 'react';

import { UpdatesTable } from './components/UpdatesTable/UpdatesTable';
import { UpdatesContainer } from './styled-components';

export const UpdatesPage: FC = () => {
  return (
    <UpdatesContainer>
      <UpdatesTable />
    </UpdatesContainer>
  );
};
