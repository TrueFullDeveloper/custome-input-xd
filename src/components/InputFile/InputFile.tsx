import React, { useRef, useState } from "react";
import { getFileNameList } from "utils/getFileNameList";

import DeleteFileIcon from "static/images/inputFile/delete_file_icon.svg";
import FileIcon from "static/images/inputFile/file_icon.svg";
import UploadFileIcon from "static/images/inputFile/upload_icon.svg";

import {
  FileInput,
  InputFileField,
  InputFileContainer,
  FileItem,
  FileTitleSpan,
  ActionButton,
} from "./Styled";

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width: number;
  placeholder: string;
  onInputFileChange?: (fileList: Array<File>) => void;
}

let dragCounter = 0;

const InputFile: React.FC<InputFileProps> = ({
  width,
  placeholder,
  onInputFileChange,
  id,
  name,
}) => {
  const [fileList, setFileList] = useState<Array<File>>([]);

  const [fileIsDrag, setFileIsDrag] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileAdd = (files: FileList | null) => {
    if (files) {
      const fileListTemp: Array<File> = [];

      for (let i = 0; i < files.length; i++) {
        fileListTemp.push(files[i]);
      }

      setFileList([...fileList, ...fileListTemp]);

      if (onInputFileChange) {
        onInputFileChange([...fileList, ...fileListTemp]);
      }
    }
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files.length) {
      onFileAdd(event.dataTransfer.files);
      event.dataTransfer.clearData();
    }
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    dragCounter--;

    if (dragCounter > 0) return;

    setFileIsDrag(false);
  };

  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    dragCounter++;
    if (dragCounter) setFileIsDrag(true);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onDelete = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";

      setFileList([]);

      if (onInputFileChange) onInputFileChange([]);

      setFileIsDrag(false);
    }
  };

  return (
    <InputFileContainer width={width}>
      <FileInput
        type={"file"}
        ref={fileInputRef}
        accept=".txt"
        onChange={(event) => onFileAdd(event.target.files)}
        id={id}
        name={name}
      />

      <InputFileField
        fileIsDrag={fileIsDrag}
        width={width}
        onClick={() => fileInputRef.current?.click()}
        onDrop={(event) => onDrop(event)}
        onDragOver={(event) => onDragOver(event)}
        onDragEnter={(event) => onDragEnter(event)}
        onDragLeave={(event) => onDragLeave(event)}
      >
        <FileTitleSpan haveFiles={!!fileList.length}>
          {placeholder}
        </FileTitleSpan>

        {getFileNameList(fileList).map((fileName, fileNameIndex) => (
          <FileItem key={fileNameIndex}>
            <img src={FileIcon} alt={""} /> {fileName}
          </FileItem>
        ))}
      </InputFileField>

      {fileList.length ? (
        <ActionButton onClick={() => onDelete()} type={"button"}>
          <img src={DeleteFileIcon} alt={""} />
        </ActionButton>
      ) : (
        <ActionButton
          onClick={() => fileInputRef.current?.click()}
          type={"button"}
        >
          <img src={UploadFileIcon} alt={""} />
        </ActionButton>
      )}
    </InputFileContainer>
  );
};

export default InputFile;
