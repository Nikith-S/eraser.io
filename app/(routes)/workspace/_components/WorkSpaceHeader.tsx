import React from "react";
import Image from "next/image";

const WorkSpaceHeader = () => {
  return (
    <div>
      <Image src={"/logo-1.png"} alt="logo" height={40} width={40} />
      <h2>File Name</h2>
    </div>
  );
};

export default WorkSpaceHeader;
