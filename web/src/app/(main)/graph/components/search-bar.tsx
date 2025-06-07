"use client";

import { Search } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import useKnowledgeBaseSearchStore from "@/store/use-knowledge-base-search-store";

const SearchBar = () => {
  const { setSearchInput } = useKnowledgeBaseSearchStore();
  return (
    <div className="relative flex items-center group w-[90%]">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-300" />
      <Input
        type="search"
        placeholder="Search"
        className="pl-8 focus-visible:ring-blue-300 bg-gray-100"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
