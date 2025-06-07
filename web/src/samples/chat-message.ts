import { ChatMessageModel } from "@/models/chat-message";

export const chatMessagesSample: ChatMessageModel[] = [
  {
    _id: "msg_001",
    role: "user",
    message_content: "Hey, can you help me with a coding issue?",
    created_at: "2025-06-07T10:15:30Z",
  },
  {
    _id: "msg_002",
    role: "assistant",
    message_content:
      "# React Markdown Example - **Some text** - Some other text \n## Subtitle \n### Additional info This is a [link](https://github.com/remarkjs/react-markdown)",
    created_at: "2025-06-07T10:16:05Z",
  },
  {
    _id: "msg_003",
    role: "user",
    message_content: "I'm stuck on a TypeScript error with interfaces.",
    created_at: "2025-06-07T10:17:22Z",
  },
  {
    _id: "msg_004",
    role: "assistant",
    message_content:
      '# Simple Markdown Example \nHere is a bullet point list: \n- First item \n- Second item \n- Third item And here is a code block: \n\n```javascript \nconst greet = () => { \nconsole.log("Hello, Markdown!"); \n}; \ngreet();\n```',
    created_at: "2025-06-07T10:18:00Z",
  },
  {
    _id: "msg_005",
    role: "user",
    message_content: "What's the best way to learn React?",
    created_at: "2025-06-07T11:30:45Z",
  },
  {
    _id: "msg_006",
    role: "assistant",
    message_content:
      "Start with the official React docs and build small projects.",
    created_at: "2025-06-07T11:31:10Z",
  },
  {
    _id: "msg_007",
    role: "user",
    message_content: "Any good project ideas for beginners?",
    created_at: "2025-06-07T11:32:15Z",
  },
  {
    _id: "msg_008",
    role: "assistant",
    message_content:
      "Try a to-do list or a weather app to practice state management.",
    created_at: "2025-06-07T11:33:00Z",
  },
  {
    _id: "msg_009",
    role: "user",
    message_content: "How do I deploy a Node.js app?",
    created_at: "2025-06-07T14:20:50Z",
  },
  {
    _id: "msg_010",
    role: "assistant",
    message_content: "You can use platforms like Heroku, Vercel, or AWS.",
    created_at: "2025-06-07T14:21:30Z",
  },
  {
    _id: "msg_011",
    role: "user",
    message_content: "Is MongoDB a good choice for a small project?",
    created_at: "2025-06-07T15:10:12Z",
  },
  {
    _id: "msg_012",
    role: "assistant",
    message_content:
      "Yes, it's great for quick prototyping and flexible schemas.",
    created_at: "2025-06-07T15:11:00Z",
  },
  {
    _id: "msg_013",
    role: "user",
    message_content: "Can you explain async/await in JavaScript?",
    created_at: "2025-06-08T01:05:20Z",
  },
  {
    _id: "msg_014",
    role: "assistant",
    message_content:
      "Async/await simplifies working with promises for cleaner code.",
    created_at: "2025-06-08T01:06:15Z",
  },
  {
    _id: "msg_015",
    role: "user",
    message_content: "Thanks, that helps! Any tips for debugging?",
    created_at: "2025-06-08T01:07:40Z",
  },
  {
    _id: "msg_016",
    role: "assistant",
    message_content:
      "Use console.log, breakpoints, and tools like VS Code debugger.",
    created_at: "2025-06-08T01:08:25Z",
  },
];
