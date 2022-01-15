/* eslint-disable no-unused-vars */
import React from "react";
import { ReactDOM, render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Todo from "./routes/todo";
import Info from "./routes/info";
import "./App.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Todo" element={<Todo />} />
        <Route path="Info" element={<Info />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
