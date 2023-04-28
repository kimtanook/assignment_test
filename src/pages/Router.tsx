import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Main from "./Main";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
