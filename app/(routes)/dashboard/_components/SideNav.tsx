import React, { useState } from "react";
import SideNavTopSection, { Team } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottomSection from "./SideNavBottomSection";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

function SideNav() {
  const { user } = useKindeBrowserClient();

  const [activeTeam, setActiveTeam] = useState<Team | null>(null);
  const createFile = useMutation(api.files.createFile);

  const onFileCreate = (fileName: string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
    }).then(
      (resp) => {
        if (resp) {
          toast("File created successfully");
        }
      },
      (e) => {
        toast("Error while creating file");
      }
    );
  };

  return (
    <div className="h-screen fixed w-72 border-r border-[1px] px-6 flex flex-col">
      <div className="flex-1">
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: Team) => setActiveTeam(activeTeam)}
        />
      </div>

      <div>
        <SideNavBottomSection onFileCreate={onFileCreate} />
      </div>
    </div>
  );
}

export default SideNav;
