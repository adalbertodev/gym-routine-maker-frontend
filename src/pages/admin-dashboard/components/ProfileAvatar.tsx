import { Avatar, AvatarProps } from '@mui/material';
import { FC } from 'react';

interface Props extends AvatarProps {
  size?: number;
}

const defaultProps: Props = {
  size: 44
};

export const ProfileAvatar: FC<Props> = ({ size, sx, ...props }) => {
  return <Avatar sx={{ width: `${size}px`, height: `${size}px`, ...sx }} {...props} />;
};

ProfileAvatar.defaultProps = defaultProps;
