/**
 *
 * @param str string to be camelCased
 * @return a camel cased version of the supplied string
 */
export const toCamelCase = (str: string): string => {
	let sentence = str.toLowerCase().split(' ')
	for (let i = 0; i < sentence.length; i++) {
		sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
	}
	return sentence.join('')
}
