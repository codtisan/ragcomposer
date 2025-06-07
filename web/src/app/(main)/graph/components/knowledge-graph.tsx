"use client";
import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";

const KnowledgeGraph = () => {
  const container = useRef(null);

  const nodes = [
    {
      id: 1,
      label: "Artificial Intelligence",
      group: "core",
      color: "#ff6b6b",
    },
    { id: 2, label: "Machine Learning", group: "subfield", color: "#4ecdc4" },
    { id: 3, label: "Deep Learning", group: "subfield", color: "#4ecdc4" },
    { id: 4, label: "Neural Networks", group: "technique", color: "#45b7d1" },
    {
      id: 5,
      label: "Natural Language Processing",
      group: "subfield",
      color: "#4ecdc4",
    },
    { id: 6, label: "Computer Vision", group: "subfield", color: "#4ecdc4" },
  ];

  const edges = [
    { from: 1, to: 2, label: "includes" },
    { from: 1, to: 5, label: "includes" },
    { from: 1, to: 6, label: "includes" },
    { from: 2, to: 3, label: "subset" },
    { from: 3, to: 4, label: "uses" },
  ];

  const options = {};

  useEffect(() => {
    if (container.current) {
      new Network(container.current, { nodes, edges }, options);
    }
  }, [container, nodes, edges]);

  return <div ref={container} className="size-full" />;
};

export default KnowledgeGraph;
