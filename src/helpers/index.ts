export const omit = <T extends { [k: string | number]: any }>(keys: (keyof T)[], obj: T) => Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));

export const cx = (...classnames: string[]) => classnames.filter(Boolean).join(' ');
