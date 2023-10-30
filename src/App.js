
import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from 'react-router-dom';



import FollowTest from "./pages/FollowersList/FollowTest";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        <Router>
          <FollowTest/>
        </Router>
      </CommonLayOut>
    </>
  );
}


export default App;
