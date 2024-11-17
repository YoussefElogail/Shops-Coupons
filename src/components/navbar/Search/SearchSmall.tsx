"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
const SearchComponent = dynamic(() => import("./SearhComponent"), {
  ssr: false,
});
export default function SearchSmall() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 md:hidden" align="end" sideOffset={5}>
        {isOpen && <SearchComponent />}
      </PopoverContent>
    </Popover>
  );
}
