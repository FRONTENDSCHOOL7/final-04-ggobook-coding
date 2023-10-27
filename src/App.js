
import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import Follower from "./pages/FollowersList/Follower"
// import FollowersList from "./pages/FollowersList/FollowersList"
// import MyProfile from "./pages/MyProfile/MyProfile";
// import Reecoilpm from "./pages/Profile/Reecoilpm"
import Godpm from "./pages/Profile/Godpm"
import Godpm2 from "./pages/Profile/Godpm2"
import ProModification2 from "./pages/Profile/ProModification2"
// import Recoilpm from "./pages/Profile/Recoilpm"
import Fetchpm from "./pages/Profile/Fetchpm"
import AddProduct from "./pages/AddProduct/AddProduct";


import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        {/* <AddProduct></AddProduct> */}
        <Godpm2></Godpm2>
        {/* <AppRouter /> */}
      </CommonLayOut>
    </>
  );
}


export default App;
