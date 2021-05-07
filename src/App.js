import { ChatEngine } from "react-chat-engine";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="b0bbe92e-7040-4cf3-950c-1b1987d0723c"
      userName="Eugi"
      userSecret="superGeheim"
      renderChatFeed={(chatAppProps) => <ChatFeed />}
    />
  );
};

export default App;
