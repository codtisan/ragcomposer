"use client";

import { cn } from "@/lib/utils";
import { KnowledgeBaseModel } from "@/models/knowledge-base";
import { useParams, useRouter } from "next/navigation";
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
  setSelectedKnowledgeBase,
}: KnowledgeBaseItemProps) => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div
      className={
        (cn("h-[20%] hover:bg-gray-200 flex items-center"),
        id === item._id ? "bg-gray-200" : "")
      }
      onClick={() => {
        setSelectedKnowledgeBase(item);
        router.push("/graph/" + item._id);
      }}
    >
      <div className="flex flex-col gap-4 ml-6">
        <span>{item.name}</span>
        <span>{item.created_at}</span>
      </div>
    </div>
  );
};

export default KnowledgeBaseItem;
