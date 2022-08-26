import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface SideBarListOption {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  label: string;
  link: string;
}
