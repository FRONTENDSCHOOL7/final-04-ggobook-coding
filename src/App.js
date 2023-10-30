
import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from 'react-router-dom';
import Navigator from "./components/Navigator/Navigator";
import ProfileModification from "./pages/Profile/ProfileModification";



import FollowTest from "./pages/FollowersList/FollowTest";
import FollowersFor from "./pages/FollowersList/FollowersFor";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        <Router>
          <FollowersFor/>
        </Router>
        
      </CommonLayOut>
    </>
  );
}


export default App;
