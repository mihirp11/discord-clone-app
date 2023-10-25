import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import NavAction from "@/components/navigation/nav-action";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavItem from "@/components/navigation/nav-item";
import { ModeToggle } from "@/components/theme-toggle";
import { UserButton } from "@clerk/nextjs";

const NavSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primaru w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-4">
      <NavAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavItem
              name={server.name}
              id={server.id}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
      </div>
      <UserButton
        afterSignOutUrl="/"
        appearance={{ elements: { avatarBox: "h-[48px] w-[48px]" } }}
      />
    </div>
  );
};

export default NavSidebar;
