import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles.css";

import { TodoApp } from "./components/TodoApp/TodoApp";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
