import MyNav from "./components/navbar";
import MyLayout from "./layout";
import Create from "./components/create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditPost from "./components/edit";



function App() {
  return (
      <BrowserRouter>
        <MyNav />

        <Routes>
          <Route exact path="/" element={<MyLayout />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route exact path="/edit" element={<EditPost />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
