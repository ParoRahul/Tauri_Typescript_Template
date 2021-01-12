'use strict'
const _typeof = {
	number: 'number',
	string: 'string',
	undefined: 'undefined',
	object: 'object',
	function: 'function'
}

export enum Ecommands{
    null,
    DIR,
    SET,
    CD
}

export function isUndefined(obj: any): boolean {
	return typeof (obj) === _typeof.undefined
}

/**
 * @returns whether the provided parameter is undefined or null.
 */
export function isUndefinedOrNull(obj: any): boolean {
	return isUndefined(obj) || obj === null
}

export function convertTocommands(value: Ecommands): string{
    if (value == Ecommands.DIR){
        return 'dir'
    } else if (value == Ecommands.CD){
        return 'cd'
    } else if (value == Ecommands.SET){
        return 'SET'
    } else {
        return ''
    }
}
