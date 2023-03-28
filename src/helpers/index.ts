export const omit = <T extends object, K extends keyof T>(keys: K[], obj: T) => Object.fromEntries(Object.entries(obj).filter(([key]) => (key in keys)));

export const cx = (...classnames: any[]) => classnames.filter(Boolean).join(' ');
