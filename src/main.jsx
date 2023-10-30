import React from "react";
import ReactDOM from "react-dom/client";
import { Game } from "./pages/Game/Game";
import GlobalStyles from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <Game />
  </React.StrictMode>
);
