import Home from "./pages/Home/Home";
import Home2 from "./pages/Home/Home2";
import YourProfile from "./pages/YourProfile/YourProfile";
import YourProfile2 from "./pages/YourProfile/YourProfile2";
import YourProfile3 from "./pages/YourProfile/YourProfile3";
import YourProfile4 from "./pages/YourProfile/YourProfile4";
import Myprofile from "./pages/MyProfile/MyProfile"

import { CommonLayOut, GlobalStyle, PaddingLayOut } from "./styles/GlobalStyle";
import Profile from "./pages/YourProfile/YourProfile";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        <PaddingLayOut>
        {/* <PaddingLayOut padding={33}> */}
          <Home>
            <h1>ggobook-coding❤</h1>
          </Home>
        </PaddingLayOut>
      </CommonLayOut>
    </>
  );
}

export default App;
