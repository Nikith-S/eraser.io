import React, { useEffect, useState, useContext } from "react";
import SideNavTopSection, { Team } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottomSection from "./SideNavBottomSection";
import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FileListContext } from "@/app/_context/FileListContext";

function SideNav() {
  const { user } = useKindeBrowserClient();

  const [activeTeam, setActiveTeam] = useState<Team | null>(null);
  const createFile = useMutation(api.files.createFile);
  const [totalFiles, setTotalFiles] = useState<Number>();
  const convex = useConvex();

  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);

  const onFileCreate = (fileName: string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archive: false,
      document: "",
      whiteBoard: "",
    }).then(
      (resp) => {
        if (resp) {
          getFiles();
          toast("File created successfully");
        }
      },
      (e) => {
        toast("Error while creating file");
      }
    );
  };

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });
    console.log(result);
    setFileList_(result);
    setTotalFiles(result?.length);
  };

  const { fileList_, setFileList_ } = useContext(FileListContext);

  return (
    <div className="h-screen fixed w-72 border-r border-[1px] px-6 flex flex-col">
      <div className="flex-1">
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: Team) => setActiveTeam(activeTeam)}
        />
      </div>

      <div>
        <SideNavBottomSection
          onFileCreate={onFileCreate}
          totalFiles={totalFiles}
        />
      </div>
    </div>
  );
}

export default SideNav;
