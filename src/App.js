import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        <AppRouter />
      </CommonLayOut>
    </>
  );
}

export default App;