import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<div>Hello world!</div>}>
        <Route path="dashboard" element={<div>dashboard!</div>} />
        <Route path="about" element={<div>about</div>} />
      </Route>
    )
  );