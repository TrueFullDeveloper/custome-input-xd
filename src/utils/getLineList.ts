import { CHARACTERS_PER_LINE, CURSOR } from "config/config";
import { getAddStrByPositionFunc } from "utils/getAddStrByPositionFunc";
import { getLineNumberByIndex } from "utils/getLineNumberByIndex";

type GetLineListParams = {
  str: string;
};

export const getLineList = ({ str }: GetLineListParams): Array<string> => {
  const lineCount = getLineNumberByIndex({ position: str.length - 1 });

  const cursorLineNumber = getLineNumberByIndex({
    position: str.indexOf(CURSOR) - 1,
  });

  const newStr = str.split(CURSOR).join("");

  const lineList = Array(lineCount + 1)
    .fill(0)
    .map((_, index) => index)
    .map((line) => {
      return newStr.slice(
        line * CHARACTERS_PER_LINE,
        (line + 1) * CHARACTERS_PER_LINE
      );
    });

  lineList[cursorLineNumber] = getAddStrByPositionFunc({
    str: lineList[cursorLineNumber],
    addStr: CURSOR,
  })({
    strPosition: str.indexOf(CURSOR) % CHARACTERS_PER_LINE,
  });

  return lineList;
};
