import { RecoilRoot } from "recoil";
import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import AppRouter from "./routes/AppRouter";
import UserInfoProvider from "./context/UserInfoContext";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <CommonLayOut>
        <UserInfoProvider>
          <AppRouter />
        </UserInfoProvider>
      </CommonLayOut>
    </RecoilRoot>
  );
}

export default App;
