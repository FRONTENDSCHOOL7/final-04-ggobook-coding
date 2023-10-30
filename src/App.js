
import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import AppRouter from "./routes/AppRouter";
import FollowersList from "./pages/FollowersList/FollowersList";


function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
          <FollowersList/>
          <AppRouter/>
      </CommonLayOut>
    </>
  );
}

export default App;
