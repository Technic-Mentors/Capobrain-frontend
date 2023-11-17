import React, { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [uniqueCategories, setUniqueCategories] = useState(new Set());

  const Getallposts = async () => {
    await fetch("http://localhost:8000/api/auth/getallposts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        const categoriesSet = new Set(data.map((post) => post.category));
        setUniqueCategories(categoriesSet);
      });
  };

  useEffect(() => {
    Getallposts();
  }, []);

  // Filter posts based on selected category
  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredPosts([]); // No category selected, so show no posts
    } else {
      const filtered = posts.filter((post) => post.category === selectedCategory);
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, posts]);

  return (
    <div className="container-fluid ps-0">
      {/* ... (your header section) */}
      <div className="row mt-3 d-flex justify-content-between">
        <div className="col-md-3">
          <div
            className="background-img5"
            style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
          >
            <div className="color-overlay5 pb-3 pt-2 outlet">
              <button onClick={() => setSelectedCategory(null)}>All</button>
              {[...uniqueCategories].map((category) => (
                <button key={category} onClick={() => setSelectedCategory(category)}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {filteredPosts.map((post) => (
              <div className="col-md-4" key={post._id}>
                <div class="card" style={{ width: "18rem" }}>
                  {/* ... (your card content) */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
