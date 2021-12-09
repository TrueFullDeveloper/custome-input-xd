import { useRef } from "react";

export const useDownloadTextFile = () => {
  const htmlLinkRef = useRef<HTMLLinkElement>(null);

  const onFileDownload = (fileContent: string) => {
    const blob = new Blob([fileContent], {
      type: "text/plain",
    });

    if (htmlLinkRef.current) {
      htmlLinkRef.current.href = URL.createObjectURL(blob);
    }
  };

  return { htmlLinkRef, onFileDownload };
};
