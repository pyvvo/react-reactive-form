import { Flatten } from '@/types';

/* eslint-disable import/prefer-default-export */
export const getValuePath = (paths: string[], obj: Record<string, any>) => {
  const keys = Object.keys(obj);
  if (keys.length) {
    const key = paths[0];
    const newVal = obj[key];
    const newPaths = paths.slice(1, paths.length);
    let tempVal: Record<string, any> | undefined;
    if (!newPaths.length && typeof newVal === 'object') {
      return newVal;
    }
    if (
      typeof newVal === 'object' &&
      newPaths.length &&
      !Array.isArray(newVal)
    ) {
      tempVal = getValuePath(newPaths, newVal) as Record<string, any>;
    }
    return tempVal;
  }

  return undefined;
};

export const flattenObj = <T extends Record<string, any>>(
  obj: T,
  parent?: string,
  res = {} as any,
  index = 0
): Flatten<T> => {
  // eslint-disable-next-line no-param-reassign
  index += 1;
  if (index > 5) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw 'object is too deep, maximum authorized level is 6';
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(obj)) {
    const propName = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      flattenObj(obj[key], propName, res, index);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};
