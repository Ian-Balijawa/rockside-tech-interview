import { TextFieldProps as Props, TextField } from '@mui/material';

import { ChangeEventHandler } from 'react';

type PropType = {
	label?: string;
	styles?: any;
	onChange?: ChangeEventHandler<HTMLInputElement>;
} & Props;


export const Input = (props: PropType) => {
	  const { label, onChange, styles, ...restProps } = props;
  return (
	<TextField
	  variant="outlined"
	  label={label}
	  onChange={onChange}
	  size="small"
	  sx={{ width: "100%", margin:"1em auto",...styles}}
	  {...restProps}
	/>
  );
}
