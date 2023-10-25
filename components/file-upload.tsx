"use client";
import { FileIcon, X } from "lucide-react";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";

import "@uploadthing/react/styles.css";

type FileUploadProps = {
  value: string;
  endpoint: "messageFile" | "serverImage";
  onChange: (url?: string) => void;
};
const FileUpload = ({ value, endpoint, onChange }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-24 w-24">
        <Image fill className="rounded-full" src={value} alt={"Upload"} />
        <button
          className="bg-red-600 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type={"button"}
          onClick={() => onChange("")}
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    );
  }
  if (value && fileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 strike-indigo-400" />
        <a
          href={value}
          target="blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          className="bg-red-600 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type={"button"}
          onClick={() => onChange("")}
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(e) => console.log(e)}
    />
  );
};

export default FileUpload;
