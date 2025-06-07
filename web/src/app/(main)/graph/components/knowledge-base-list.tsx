"use client";

import { knowledgeBaseData } from "@/samples/knowledge-base";
import KnowledgeBaseItem from "./knowledge-base-item";
import { KnowledgeBaseModel } from "@/models/knowledge-base";
import { useState } from "react";
import useKnowledgeBaseSearchStore from "@/store/use-knowledge-base-search-store";

const KnowledgeBaseList = () => {
  const [selectedKnowledgeBase, setSelectedKnowledgeBase] =
    useState<KnowledgeBaseModel>();
  const { searchInput } = useKnowledgeBaseSearchStore();

  return (
    <div className="flex flex-col h-[90%] overflow-y-auto gap-4">
      {knowledgeBaseData.map((knowledgeBase, index: number) => {
        if (
          knowledgeBase.name.toLowerCase().includes(searchInput.toLowerCase())
        ) {
          return (
            <KnowledgeBaseItem
              key={index}
              item={knowledgeBase}
              selectedKnowledgeBase={selectedKnowledgeBase}
              setSelectedKnowledgeBase={setSelectedKnowledgeBase}
            />
          );
        }
      })}
    </div>
  );
};

export default KnowledgeBaseList;
