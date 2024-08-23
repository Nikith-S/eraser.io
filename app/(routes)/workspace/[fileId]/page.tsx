"use client";

import React, { useEffect, useState } from "react";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";
import Editor from "../_components/Editor";

const Workspace = ({ params }: any) => {
  const [triggerSave, setTriggerSave] = useState(false);
  useEffect(() => {
    console.log("FILEIF", params.fileId);
  });

  return (
    <div>
      <WorkSpaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* WorkspaceLayout  */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document  */}
        <div className=" h-screen">
          <Editor onSaveTrigger={triggerSave} fileId={params.fileId} />
        </div>

        {/* whiteBoardcanvas  */}
        <div className="bg-red-400 h-screen">canvas</div>
      </div>
    </div>
  );
};

export default Workspace;
