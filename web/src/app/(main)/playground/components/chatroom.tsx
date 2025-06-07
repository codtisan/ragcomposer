import ChatroomInput from "./chatroom-input";

export default function Chatroom() {
  return (
    <div className="w-[90%] h-full flex flex-col justify-between">
      <div>chat</div>
      <div className="flex flex-row w-full gap-6 items-center mb-8">
        <ChatroomInput />
      </div>
    </div>
  );
}
