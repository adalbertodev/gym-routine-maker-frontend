import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface SideBarListOption {
  Icon: OverridableComponent<SvgIconTypeMap>;
  label: string;
  link: string;
}
