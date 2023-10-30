
import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from 'react-router-dom';

// import ProfileModification from "./pages/Profile/ProfileModification";
import EditProfile from "./pages/Profile/EditProfile";
import TestFollowersList from "./pages/FollowersList/TEST/TestFollowersList";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        <Router>
          <EditProfile/>
          {/* <TestFollowersList/> */}
        </Router>
      </CommonLayOut>
    </>
  );
}


export default App;
