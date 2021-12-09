import { CURSOR, ACTION_KEY_LIST, KEYBOARD_LIST } from "config/config";
import React, { useCallback, useEffect, useState } from "react";
import { actionKeysHandler } from "utils/actionKeysHandler";
import { getAddStrByPositionFunc } from "utils/getAddStrByPositionFunc";
import { getLineList } from "utils/getLineList";

import { CustomInputContainer, TextContainer } from "./Styled";

const CustomInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(CURSOR);

  const onKeyDown = useCallback(
    (event) => {
      if (ACTION_KEY_LIST.some((keyCode) => keyCode === event.keyCode)) {
        setInputValue(
          actionKeysHandler({ str: inputValue, keyCode: event.keyCode })
        );
      } else if (KEYBOARD_LIST.some((keyCode) => keyCode === event.keyCode)) {
        setInputValue(
          getAddStrByPositionFunc({ str: inputValue, addStr: event.key })({
            strPosition: inputValue.indexOf(CURSOR),
          })
        );
      }

      return;
    },
    [inputValue]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <CustomInputContainer>
      {getLineList({ str: inputValue }).map((strItem, strIndex) => {
        if (strItem.indexOf(CURSOR) !== -1) {
          return (
            <TextContainer key={strIndex}>
              {strItem.split("").map((charItem) => {
                if (charItem === CURSOR) return <label>{charItem}</label>;

                return <span>{charItem}</span>;
              })}
            </TextContainer>
          );
        }

        return (
          <TextContainer key={strIndex}>
            <span>{strItem}</span>
          </TextContainer>
        );
      })}
    </CustomInputContainer>
  );
};

export default CustomInput;
