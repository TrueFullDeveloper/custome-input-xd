export const getFileNameList = (files: Array<File>): Array<string> => {
  const fileNameList: Array<string> = [];

  if (files) {
    files.forEach((file) => {
      fileNameList.push(file.name);
    });
  }

  return fileNameList;
};
