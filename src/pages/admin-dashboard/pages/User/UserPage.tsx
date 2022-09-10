import {
  FitnessCenter as FitnessCenterIcon,
  Person as PersonIcon,
  TableView as TableViewIcon
} from '@mui/icons-material';
import { FC, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { LoadingView } from '@/components';
import { useUserAPI } from '@/hooks';
import { AdminCard } from '../../styled-components';
import { UserProfileSection, ExercisesTable } from './components/';
import { ProfileTab, ProfileTabPanel, ProfileTabs, UserContainer } from './styled-components';

export const UserPage: FC = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const { data, error, getUser } = useUserAPI();
  const [value, setValue] = useState(0);

  useEffect(() => {
    getUser(id);
  }, []);

  useEffect(() => {
    if (error) {
      navigate('../');
    }
  }, [error]);

  const onTabChange = useCallback((_event: SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue);
  }, []);

  return !data ? (
    <LoadingView />
  ) : (
    <UserContainer sx={{ maxHeight: 'calc(100vh - 4rem - var(--appbar-height))' }}>
      <AdminCard className='card'>
        <ProfileTabs onChange={onTabChange} value={value}>
          <ProfileTab label='Account' icon={<PersonIcon />} index={0} />
          <ProfileTab label='Exercises' icon={<FitnessCenterIcon />} index={1} />
          <ProfileTab label='Templates' icon={<TableViewIcon />} index={2} />
        </ProfileTabs>

        <ProfileTabPanel value={value} index={0}>
          <UserProfileSection user={data[0]} />
        </ProfileTabPanel>

        <ProfileTabPanel value={value} index={1}>
          <ExercisesTable />
        </ProfileTabPanel>

        <ProfileTabPanel value={value} index={2}>
          Templates
        </ProfileTabPanel>
      </AdminCard>
    </UserContainer>
  );
};
