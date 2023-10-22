import Home from "./pages/Home/Home";
import Home2 from "./pages/Home/Home2";
// import YourProfile from "./pages/YourProfile/YourProfile";
// import YourProfile2 from "./pages/YourProfile/YourProfile2";
// import YourProfile3 from "./pages/YourProfile/YourProfile3";
// import YourProfile4 from "./pages/YourProfile/YourProfile4";
// import Myprofile from "./pages/MyProfile/MyProfile"

import { CommonLayOut, GlobalStyle, PaddingLayOut } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        <PaddingLayOut padding={33}>
          <>
            <h1>ggobook-coding❤</h1>
          </>
        </PaddingLayOut>
      </CommonLayOut>
    </>
  );
}

export default App;
