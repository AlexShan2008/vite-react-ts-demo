import GlobalStyle from "@theme/global-styles";

import "@styles/app.scss";
import "@styles/app.less";

import { Router } from "./routes";

const mode = import.meta.env.VITE_APP_ENV;

console.log(mode, "mode");

function App() {
  return (
    <div className="app-container">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
