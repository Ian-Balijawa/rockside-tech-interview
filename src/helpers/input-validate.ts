//validate and sanitize input to only allow strings that can be parsed as numbers

export function validateInput(input: string): number {
	const regex = new RegExp(/^-?\d+\.?\d*$/)
	return regex.test(input) ? Number(input) : 0
}
