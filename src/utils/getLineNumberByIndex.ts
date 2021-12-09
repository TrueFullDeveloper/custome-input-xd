import { CHARACTERS_PER_LINE } from "config/config";

type GetLineNumberByIndex = {
  position: number;
};

export const getLineNumberByIndex = ({
  position,
}: GetLineNumberByIndex): number => {
  return Math.trunc((position + 1) / CHARACTERS_PER_LINE);
};
