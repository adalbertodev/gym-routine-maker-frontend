import { ExtendButtonBase, Icon, styled, Tab, TabProps, TabTypeMap } from '@mui/material';

interface Props extends TabProps {
  index: number;
}

interface TabType extends TabTypeMap {
  props: Props;
}

const Composition = ({ index, icon, ...props }: Props) => (
  <Tab
    aria-controls={`full-width-tabpanel-${index}`}
    icon={<Icon>{icon}</Icon>}
    iconPosition={'start'}
    id={`full-width-tab-${index}`}
    {...props}
  />
);

export const ProfileTab = styled(Composition)({}) as ExtendButtonBase<TabType>;
