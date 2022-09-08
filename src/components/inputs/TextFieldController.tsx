import { TextField, TextFieldProps } from '@mui/material';
import { Control, ControllerProps, FieldError, FieldValues, Path, useController } from 'react-hook-form';

type Props<T extends FieldValues = FieldValues> = Omit<TextFieldProps, 'name'> & {
  rules?: ControllerProps['rules'];
  name: Path<T>;
  parseError?: (error: FieldError) => string;
  control?: Control<T>;
};

export const TextFieldController = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  ...props
}: Props<TFieldValues>) => {
  const { field } = useController({ name, control, rules });

  return <TextField autoComplete='off' {...props} {...field} />;
};
