import ChatroomInput from "./chatroom-input";
import ChatroomMessageList from "./chatroom-message-list";

export default function Chatroom() {
  return (
    <div className="w-[90%] h-full flex flex-col justify-between gap-6">
      <div className="w-full h-full overflow-y-auto">
        <ChatroomMessageList />
      </div>
      <div className="flex flex-row w-full gap-6 items-center mb-8">
        <ChatroomInput />
      </div>
    </div>
  );
}
