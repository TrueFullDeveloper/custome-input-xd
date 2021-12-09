import InputFile from "components/InputFile";
import { CURSOR, ACTION_KEY_LIST, KEYBOARD_LIST } from "config/config";
import React, { useCallback, useEffect, useState } from "react";
import { actionKeysHandler } from "utils/actionKeysHandler";
import { getAddStrByPositionFunc } from "utils/getAddStrByPositionFunc";
import { getLineList } from "utils/getLineList";
import { useDownloadTextFile } from "utils/hooks/useDownloadTextFile";

import { CustomInputContainer, TextContainer, Link, Container } from "./Styled";

const CustomInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(CURSOR);
  const { onFileDownload, htmlLinkRef } = useDownloadTextFile();

  const onLoadFile = (file: File) => {
    if (file) {
      const reader = new FileReader();

      reader.readAsText(file);
      reader.onload = () => {
        setInputValue(`${reader.result}${CURSOR}`);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };

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
    <div>
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
      <Container>
        <InputFile
          width={300}
          placeholder={"Add File"}
          onInputFileChange={(fileList) => onLoadFile(fileList[0])}
        />

        <Link
          download={"inputTex.txt"}
          onClick={() => onFileDownload(inputValue.split(CURSOR).join(""))}
          href={"#"}
          // @ts-ignore
          ref={htmlLinkRef}
        >
          Download
        </Link>
      </Container>
    </div>
  );
};

export default CustomInput;
