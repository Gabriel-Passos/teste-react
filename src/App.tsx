import { AppProvider } from "./hooks";

import { Home } from "./pages/Home";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Home />
    </AppProvider>
  );
}

export default App;
