export type ChatMessageModel = {
  _id: string;
  role: "assistant" | "user";
  message_content: string;
  created_at: string;
};
