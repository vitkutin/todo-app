import React from "react";
import { ReactDOM, render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./TodoApp";
import Yucca from "./routes/Yucca";
import EnglishIvy from "./routes/EnglishIvy";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoApp />}>
        <Route path="yucca" element={<Yucca />} />
        <Route path="englishivy" element={<EnglishIvy />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
