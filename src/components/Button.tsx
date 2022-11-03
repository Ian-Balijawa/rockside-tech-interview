import { Button as MUIButton, ButtonProps as Props } from '@mui/material'

type PropType = {
	text: string
	size?: 'small' | 'medium' | 'large'
	color?: 'default' | 'inherit' | 'primary' | 'secondary'
	variant?: 'text' | 'outlined' | 'contained'
	styles?: any
	onClick?: () => void
} & Props

export const Button = (props: PropType) => {
	const { text, size, color, variant, onClick, styles, ...restProps } = props
	return (
		<MUIButton variant={variant || 'contained'} size={size || 'small'} color={color || 'primary'} onClick={onClick} sx={{ textTransform: 'initial', width: '100%', ...styles }} {...restProps}>
			{text}
		</MUIButton>
	)
}
