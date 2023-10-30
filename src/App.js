import { RecoilRoot } from 'recoil';
import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <CommonLayOut>
        <AppRouter />
      </CommonLayOut>
    </RecoilRoot>
  );
}

export default App;