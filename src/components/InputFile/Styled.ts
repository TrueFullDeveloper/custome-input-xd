import styled from "styled-components";

export const FileInput = styled.input`
  display: none;
`;

const InputFileFieldBase = styled.div`
  position: relative;

  background: #ffffff;

  min-height: 62px;

  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    border: 1px dashed #bababa;
  }
`;

export const InputFileField = styled(InputFileFieldBase)<{
  fileIsDrag: boolean;
  width: number;
}>`
  cursor: pointer;
  border: 1px dashed ${({ fileIsDrag }) => (fileIsDrag ? "#bababa" : "#e1e1ec")};
  width: ${({ width }) => `${width}px`};
`;

export const InputFileContainer = styled.div<{ width: number }>`
  position: relative;
  width: ${({ width }) => `${width}px`};

  &:hover {
    ${InputFileField} {
      border: 1px dashed #bababa;
    }
  }
`;

export const FileItem = styled.span`
  display: flex;
  align-items: center;

  margin-bottom: 6px;
  margin-left: 12px;

  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  color: #0e0f0f;

  > img {
    display: block;
    margin-right: 2px;
  }
`;

export const ActionButton = styled.button`
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  background: transparent;

  width: 20px;
  height: 20px;

  position: absolute;
  top: 21px;
  right: 12px;
`;

const FileTitleSpanBase = styled.span`
  display: block;
  margin-left: 12px;

  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: #757575;
`;

export const FileTitleSpan = styled(FileTitleSpanBase)<{ haveFiles: boolean }>`
  margin-top: ${({ haveFiles }) => (haveFiles ? "10px" : "23px")};
  margin-bottom: 6px;
`;
