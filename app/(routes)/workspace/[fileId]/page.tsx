"use client";

import React, { useEffect, useState } from "react";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";
import Editor from "../_components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/_components/FileList";
import Canvas from "../_components/Canvas";

const Workspace = ({ params }: any) => {
  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FILE>();

  const convex = useConvex();

  useEffect(() => {
    console.log("FILEIF", params.fileId);
    params.fileId && getFileData();
  });

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, {
      _id: params.fileId,
    });

    console.log("FILEDATA", result);
    setFileData(result);
  };
  return (
    <div>
      <WorkSpaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* WorkspaceLayout  */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document  */}
        <div className=" h-screen">
          <Editor
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>

        {/* whiteBoardcanvas  */}
        <div className=" h-screen border-l">
          <Canvas />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
