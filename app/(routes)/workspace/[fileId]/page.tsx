import React from "react";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";

const Workspace = () => {
  return (
    <div>
      <WorkSpaceHeader />

      {/* WorkspaceLayout  */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document  */}
        <div className="bg-blue-400 h-screen">document</div>

        {/* whiteBoardcanvas  */}
        <div className="bg-red-400 h-screen">canvas</div>
      </div>
    </div>
  );
};

export default Workspace;
