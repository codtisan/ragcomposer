import Chatroom from "./components/chatroom";
import ParameterPlane from "./components/model-parameter";

export default function Playground() {
  return (
    <div className="size-full flex flex-row">
      <div className="h-full w-[20%] flex justify-center border-r shadow-sm">
        <ParameterPlane />
      </div>
      <div className="size-full flex justify-center">
        <Chatroom />
      </div>
    </div>
  );
}
