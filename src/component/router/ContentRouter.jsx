import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../home/Home";

const ContentRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default ContentRouter;