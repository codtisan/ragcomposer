"use client";

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
    <div
      className={
        (cn("h-[20%] hover:bg-gray-200 flex items-center"),
        selectedKnowledgeBase === item
          ? "bg-gray-200 dark:bg-white dark:text-black"
          : "")
      }
      onClick={() => setSelectedKnowledgeBase(item)}
    >
      <div className="flex flex-col gap-4 ml-6">
        <span>{item.name}</span>
        <span>{item.created_at}</span>
      </div>
    </div>
  );
};

export default KnowledgeBaseItem;
