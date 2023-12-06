export function classNames(
	cls: string,
	mods: Record<string, boolean> = {},
	additional: string[] = []
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([keyCN, valueCn]) => Boolean(valueCn))
			.map(([keyCn, valueCn]) => keyCn),
	].join(" ");
}
