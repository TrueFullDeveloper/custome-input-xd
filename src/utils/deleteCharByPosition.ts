type DeleteCharByPositionParams = {
  str: string;
  position: number;
};

export const deleteCharByPosition = ({
  str,
  position,
}: DeleteCharByPositionParams) => {
  return `${str.slice(0, position)}${str.slice(position + 1)}`;
};
