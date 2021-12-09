export const getFormDataList = (fileList: Array<File>): Array<FormData> => {
  const formDataListTemp: Array<FormData> = [];

  for (let i = 0; i < fileList.length; i++) {
    const formData = new FormData();
    formData.append("file", fileList[i]);

    formDataListTemp.push(formData);
  }

  return formDataListTemp;
};
