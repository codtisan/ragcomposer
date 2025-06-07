import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ChartDataDownloadMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[8%]">
          Download
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full" align="center">
        <DropdownMenuGroup>
          <DropdownMenuItem>csv</DropdownMenuItem>
          <DropdownMenuItem>json</DropdownMenuItem>
          <DropdownMenuItem>excel</DropdownMenuItem>
          <DropdownMenuItem>html</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
