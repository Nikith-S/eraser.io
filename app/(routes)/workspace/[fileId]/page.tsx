import React from "react";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";
import Editor from "../_components/Editor";

const Workspace = () => {
  return (
    <div>
      <WorkSpaceHeader />

      {/* WorkspaceLayout  */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document  */}
        <div className=" h-screen">
          <Editor />
        </div>

        {/* whiteBoardcanvas  */}
        <div className="bg-red-400 h-screen">canvas</div>
      </div>
    </div>
  );
};

export default Workspace;
