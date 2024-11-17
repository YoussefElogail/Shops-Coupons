import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchSmallFallBack() {
  return (
    <Button variant="ghost" size="icon">
      <Search className="h-5 w-5" />
    </Button>
  );
}
