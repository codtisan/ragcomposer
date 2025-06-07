import SearchBar from "@/app/(main)/graph/[id]/components/search-bar";
import KnowledgeBaseList from "./components/knowledge-base-list";
import KnowledgeGraph from "./components/knowledge-graph";

export default function Graph() {
  return (
    <div className="size-full flex flex-row">
      <div className="w-[16%] border-r shadow-sm justify-between">
        <div className="flex justify-center h-[10%]">
          <SearchBar />
        </div>
        <KnowledgeBaseList />
      </div>
      <KnowledgeGraph />
    </div>
  );
}
