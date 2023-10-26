// import { CommonLayOut, GlobalStyle, PaddingLayOut } from "./styles/GlobalStyle";

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <CommonLayOut>
//         <PaddingLayOut>
//         {/* <PaddingLayOut padding={33}> */}
//           <YourProfile4>
//             <h1>ggobook-coding❤</h1>
//           </YourProfile4>
//         </PaddingLayOut>
//       </CommonLayOut>
//     </>
//   );
// }

// export default App;



import { CommonLayOut, GlobalStyle } from "./styles/GlobalStyle";
import Follower from "./pages/FollowersList/Follower"
// import FollowersList from "./pages/FollowersList/FollowersList"
// import MyProfile from "./pages/MyProfile/MyProfile";
import ProModification2 from "./pages/Profile/ProModification2"


function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        <ProModification2></ProModification2>
      </CommonLayOut>
    </>
  );
}


export default App;
