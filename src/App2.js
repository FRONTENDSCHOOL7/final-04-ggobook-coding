
import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import FollowersList from "./pages/FollowersList/FollowersList";
import ProfileModification from "./pages/Profile/ProfileModification";


function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        <Router>


          <FollowersList/>


        </Router>
          <AppRouter/>
      </CommonLayOut>
    </>
  );
}

export default App;