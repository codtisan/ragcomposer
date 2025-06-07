"use client";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatMessageModel } from "@/models/chat-message";
import { chatMessagesSample } from "@/samples/chat-message";
import ReactMarkdown from "react-markdown";
import MarkdownBlock from "./markdown-blocks/common";

export default function ChatroomMessageList() {
  const chatMessages = chatMessagesSample;
  return (
    <div>
      <ChatMessageList>
        {chatMessages.map((chatMessage: ChatMessageModel) => {
          return (
            <ChatBubble
              key={chatMessage._id}
              variant={chatMessage.role === "user" ? "sent" : "received"}
            >
              {chatMessage.role === "assistant" && (
                <ChatBubbleAvatar src="/RAGComposer.png" />
              )}
              <ChatBubbleMessage
                variant={chatMessage.role === "user" ? "sent" : "received"}
              >
                <div className="markdown-container">
                  <ReactMarkdown components={MarkdownBlock}>
                    {chatMessage.message_content}
                  </ReactMarkdown>
                </div>
              </ChatBubbleMessage>
            </ChatBubble>
          );
        })}
      </ChatMessageList>
    </div>
  );
}
