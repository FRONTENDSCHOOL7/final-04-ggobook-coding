import { CommonLayOut, GlobalStyle, PaddingLayOut } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CommonLayOut>
        <PaddingLayOut padding={33}>
          <h1>ggobook-coding❤</h1>
        </PaddingLayOut>
      </CommonLayOut>
    </>
  );
}

export default App;
