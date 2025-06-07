"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { KnowledgeBaseModel } from "@/models/knowledge-base";
import { Dispatch, SetStateAction } from "react";

type KnowledgeBaseItemProps = {
  item: KnowledgeBaseModel;
  selectedKnowledgeBase: KnowledgeBaseModel | undefined;
  setSelectedKnowledgeBase: Dispatch<
    SetStateAction<KnowledgeBaseModel | undefined>
  >;
};

const KnowledgeBaseItem = ({
  item,
  selectedKnowledgeBase,
  setSelectedKnowledgeBase,
}: KnowledgeBaseItemProps) => {
  return (
    <Button
      variant="ghost"
      className={
        (cn("h-[20%] hover:bg-gray-200 flex items-center"),
        selectedKnowledgeBase === item ? "bg-gray-200" : "")
      }
      onClick={() => setSelectedKnowledgeBase(item)}
    >
      <div className="flex flex-col">
        <span>{item.name}</span>
        <span>{item.created_at}</span>
      </div>
    </Button>
  );
};

export default KnowledgeBaseItem;
