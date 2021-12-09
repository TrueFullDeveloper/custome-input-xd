import { CHARACTERS_PER_LINE, CURSOR } from "config/config";
import { deleteCharByPosition } from "utils/deleteCharByPosition";
import { getAddStrByPositionFunc } from "utils/getAddStrByPositionFunc";
import { getLineNumberByIndex } from "utils/getLineNumberByIndex";

type ActionKeysHandlerParams = {
  str: string;
  keyCode: number;
};

export const actionKeysHandler = ({
  str,
  keyCode,
}: ActionKeysHandlerParams) => {
  const cursorIndex: number = str.indexOf(CURSOR);

  const newStr: string = deleteCharByPosition({ str, position: cursorIndex });
  const cursorLineNumber: number = getLineNumberByIndex({
    position: cursorIndex,
  });
  const lineCount: number = getLineNumberByIndex({ position: str.length - 1 });

  const addCursorToStr = getAddStrByPositionFunc({
    str: newStr,
    addStr: CURSOR,
  });

  if (cursorIndex < 0) return str; // Index Validation

  if (keyCode === 8) {
    // Backspace Key
    return deleteCharByPosition({ str, position: cursorIndex - 1 });
  } else if (keyCode === 35) {
    // End Key
    if (lineCount === cursorLineNumber) {
      return `${newStr}${CURSOR}`;
    }

    return addCursorToStr({
      strPosition: (cursorLineNumber + 1) * CHARACTERS_PER_LINE,
    });
  } else if (keyCode === 36) {
    // Home Key
    return addCursorToStr({
      strPosition: cursorIndex + 1 - ((cursorIndex + 1) % CHARACTERS_PER_LINE),
    });
  } else if (keyCode === 37) {
    // Left Arrow Key
    if (cursorIndex === 0) return str;

    return addCursorToStr({
      strPosition: cursorIndex - 1,
    });
  } else if (keyCode === 38 && cursorIndex + 1 > CHARACTERS_PER_LINE) {
    // Up Arrow Key
    return addCursorToStr({
      strPosition: cursorIndex - CHARACTERS_PER_LINE,
    });
  } else if (keyCode === 39) {
    // Right Arrow Key
    if (cursorIndex === str.length - 1) return str;

    return addCursorToStr({
      strPosition: cursorIndex + 1,
    });
  } else if (keyCode === 40) {
    // Down Arrow Key
    if (cursorIndex > newStr.length - CHARACTERS_PER_LINE)
      return `${newStr}${CURSOR}`;

    return addCursorToStr({
      strPosition: cursorIndex + CHARACTERS_PER_LINE,
    });
  } else if (keyCode === 46) {
    // Delete Key
    return CURSOR;
  } else {
    return str;
  }
};
