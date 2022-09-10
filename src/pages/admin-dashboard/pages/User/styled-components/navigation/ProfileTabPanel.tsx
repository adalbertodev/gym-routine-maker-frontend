import { Box, BoxProps, BoxTypeMap, styled } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface Props extends BoxProps {
  dir?: string;
  index: number;
  value: number;
}

interface BoxType extends BoxTypeMap {
  props: Props;
}

const Composition = ({ children, index, value, sx, ...props }: Props) => (
  <Box
    role='tabpanel'
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    sx={{
      height: '100%',
      maxHeight: 'calc(100% - 65px)',
      ...sx
    }}
    {...props}
  >
    {children}
  </Box>
);

export const ProfileTabPanel = styled(Composition)({
  padding: '2rem 1.8rem'
}) as OverridableComponent<BoxType>;
