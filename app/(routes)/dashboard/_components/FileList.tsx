import { FileListContext } from "@/app/_context/FileListContext";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";


export interface FILE {
  archive: boolean;
  createdBy: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteBoard: string;
  _id: string;
  _creationTime: number;
}
const FileList = () => {
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const { user }: any = useKindeBrowserClient();
  const [fileList, setFileList] = useState<any>();

  useEffect(() => {
    setFileList(fileList_);
    console.log(fileList_);
  }, [fileList_]);

  return (
    <div className="mt-10">
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                File Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Created At
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Edited
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Author
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {fileList &&
              fileList.map((file: FILE, index: number) => (
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {file.fileName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(file._creationTime).format("DD MM YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(file._creationTime).format("DD MM YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <Image
                      src={user?.picture}
                      alt="user"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <MoreHorizontal />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;
