import React from "react";

import { MenuIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ModeToggle } from "@/components/ModeToggle";

import Logo from "./logo";

function NavbarBlock({ navigationData }) {
  return (
    <header className=" sticky top-0 z-50  backdrop-blur-md  ">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
          <a href="#" className="hover:text-primary max-md:hidden">
            About
          </a>

          <a href="#" className="hover:text-primary max-md:hidden">
            Skills
          </a>

          <a href="#">
            <Logo className="text-foreground gap-3" />
          </a>

          <a href="#" className="hover:text-primary max-md:hidden">
            Projects
          </a>

          <a href="#" className="hover:text-primary max-md:hidden">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-6">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default NavbarBlock;
