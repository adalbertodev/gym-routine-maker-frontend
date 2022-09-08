import { Avatar, Box, Button, FormControl, MenuItem } from '@mui/material';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { User } from '@/models';
import { TextFieldController } from '../../../../../../components/inputs/TextFieldController';
import { ProfileUserModel } from '../../models';
import { UserProfileContainer } from '../../styled-components';

interface Props {
  user: User;
}

export const UserProfileSection: FC<Props> = ({ user }) => {
  const { control, handleSubmit } = useForm<ProfileUserModel>({
    defaultValues: { name: user.name, email: user.email, password: '', role: user.role }
  });

  const onSubmit: SubmitHandler<ProfileUserModel> = data => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <UserProfileContainer component='form' onSubmit={handleSubmit(onSubmit)}>
      <Box className='photo-section'>
        <Avatar className='photo' variant='rounded'>
          A
        </Avatar>

        <Button variant='contained' size='large'>
          Upload photo
        </Button>
      </Box>

      <FormControl variant='outlined' className='data-section'>
        <TextFieldController control={control} name='name' label='Name' />

        <TextFieldController control={control} name='email' label='Email' type='email' />

        <TextFieldController control={control} name='password' label='Password' type='password' />

        <TextFieldController control={control} name='role' label='Role' select>
          <MenuItem value='admin'>Admin</MenuItem>
          <MenuItem value='user'>User</MenuItem>
        </TextFieldController>
      </FormControl>

      <Box className='save-section'>
        <Button variant='contained' size='large' type='submit'>
          Save Changes
        </Button>
      </Box>
    </UserProfileContainer>
  );
};
