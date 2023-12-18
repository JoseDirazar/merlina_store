"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Button from "@/components/ui/button";
import { Dialog } from "@headlessui/react";
import {
  X,
  Menu,
  SeparatorVertical,
  AlignHorizontalJustifyEnd,
} from "lucide-react";
import { useState } from "react";
import IconButton from "@/components/ui/icon-button";

interface MainNavProps {
  data: Category[];
}

const MobileMainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <Button
        onClick={onOpen}
        className="bg-[#E8D7FF] border-none p-0 text-purple-900 dark:bg-black dark:text-[#E8D7FF] lg:hidden"
      >
        <Menu size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="absolute top-0 z-30 h-[100vh] w-[55%] sm:w-[40%] lg:hidden"
        onClose={onClose}
      >
        <div className=" fixed inset-0 bg-black/10 backdrop-blur-[2px]" />

        <Dialog.Panel className="relative mr-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-[#E8D7FF]/70 backdrop-blur-lg py-4 pb-6 shadow-xl dark:bg-transparent/70">
          {/* Close button */}
          <div className="flex items-center px-[1.1rem]">
            <IconButton icon={<X size={15} />} onClick={onClose} />
          </div>
          <div className=" sm:mr-6  flex h-full max-h-[60vh] flex-col items-end justify-evenly p-6">
            {routes.map((route) => (
              <div
                key={route.href + "mobile"}
                className="mr-0 sm:mr-3 flex min-w-[70%] flex-col items-end hover:scale-[1.15]"
              >
                <Link
                  href={route.href}
                  className={cn(
                    "text-md font-medium transition-colors hover:text-black dark:text-slate-300 dark:hover:font-bold dark:hover:text-white",
                    route.active
                      ? "text-purple-900 dark:text-white"
                      : "text-[#8871B7] dark:text-slate-400",
                  )}
                >
                  {route.label}
                </Link>
                <hr className="mr-3 mt-2 w-full" />
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default MobileMainNav;
