type GetAddStrByPositionFuncParams = {
  str: string;
  addStr: string;
};

type AddStrByPositionParams = {
  strPosition: number;
};

export const getAddStrByPositionFunc = ({
  str,
  addStr,
}: GetAddStrByPositionFuncParams): (({
  strPosition,
}: AddStrByPositionParams) => string) => {
  return ({ strPosition }: AddStrByPositionParams): string => {
    if (str.length < strPosition) return str; // Index Validation

    return `${str.slice(0, strPosition)}${addStr}${str.slice(strPosition)}`;
  };
};
