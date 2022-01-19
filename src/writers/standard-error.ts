/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * Standard error stream
 *
 * @param data
 */
export function standardError(...data): void {
	// eslint-disable-next-line no-console
	console.error(...data);
}
