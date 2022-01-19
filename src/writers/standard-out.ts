/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * Standard output stream
 *
 * @param data
 */
export function standardOut(...data): void {
	// eslint-disable-next-line no-console
	console.log(...data);
}
