import { styled, Tabs, TabsProps } from '@mui/material';

const Composition = ({ children, ...props }: TabsProps) => (
  <Tabs indicatorColor="primary" textColor="primary" {...props}>
    {children}
  </Tabs>
);

export const ProfileTabs = styled(Composition)({
  '& .MuiTab-root': {
    textTransform: 'uppercase',
  },
}) as typeof Tabs;
