import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./pages/PostList/PostList";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
