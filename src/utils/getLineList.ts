import { CHARACTERS_PER_LINE } from "config/config";
import { getLineNumberByIndex } from "utils/getLineNumberByIndex";

type GetLineListParams = {
  str: string;
};

export const getLineList = ({ str }: GetLineListParams): Array<string> => {
  const lineCount = getLineNumberByIndex({ position: str.length - 1 });

  return Array(lineCount + 1)
    .fill(0)
    .map((_, index) => index)
    .map((line) => {
      return str.slice(
        line * CHARACTERS_PER_LINE,
        (line + 1) * CHARACTERS_PER_LINE
      );
    });
};
