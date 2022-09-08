import { TableCell, TableRow } from '@mui/material';
import { FC } from 'react';

import { UpdateTableData } from '../../../Dashboard/models';

interface Props {
  data: UpdateTableData;
}

export const UpdatesTableRow: FC<Props> = ({ data }) => {
  const { name, type, section, sectionName, details } = data;

  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        {name}
      </TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>{section}</TableCell>
      <TableCell>{sectionName}</TableCell>
      <TableCell>{details}</TableCell>
    </TableRow>
  );
};
