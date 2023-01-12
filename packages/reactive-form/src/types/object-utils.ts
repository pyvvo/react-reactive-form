export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

export type Merge<A, B> = {
  [K in keyof A | keyof B]?: K extends keyof A & keyof B
    ? [A[K], B[K]] extends [object, object]
      ? Merge<A[K], B[K]>
      : A[K] | B[K]
    : K extends keyof A
    ? A[K]
    : K extends keyof B
    ? B[K]
    : never;
};

export type RequireAtLeastOne<
  ObjectType,
  KeysType extends keyof ObjectType = keyof ObjectType
> = {
  // For each `Key` in `KeysType` make a mapped type:
  [Key in KeysType]-?: Required<Pick<ObjectType, Key>> & // 1. Make `Key`'s type required
    // 2. Make all other keys in `KeysType` optional
    Partial<Pick<ObjectType, Exclude<KeysType, Key>>>;
}[KeysType] &
  // 3. Add the remaining keys not in `KeysType`
  Omit<ObjectType, KeysType>;
