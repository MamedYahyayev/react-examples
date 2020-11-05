import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts);

  return (
    <div className="App">
      <Header />
      <div className="posts">
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
