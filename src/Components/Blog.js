import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);
  // const [filterPosts, setFilterPosts] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState(new Set());
  const [visibleposts, setVisibleposts] = useState(6);
  const Getallposts = async () => {
    await fetch("https://capobrain.vercel.app/api/auth/getallposts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        const newCategory = new Set(data.map((post) => post.category));
        setUniqueCategory(newCategory);
        if (newCategory.size > 0) {
          setCategory([...newCategory][0]);
        }
      });
  };
  useEffect(() => {
    Getallposts();
  }, []);

  const filteredPosts = useMemo(() => {
    if (category === null) {
      return [];
    } else {
      return posts.filter((post) => post.category === category);
    }
  }, [category, posts]);


  const loadMorePosts = () => {
    setVisibleposts(visibleposts + 6);
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="background-image7">
        <div className="color-overlay7 d-flex align-items-center justify-content-center">
          <div>
            <h1 className="head text-center text-white animate__animated animate__zoomIn">
              Blog Section
            </h1>
          </div>
        </div>
      </div>
      <div className="row mb-3 mt-3 d-flex justify-content-between">
        <div className="col-md-3">
          <div
            className="background-img8"
            style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
          >
            <div className="color-overlay8 pb-3 pt-2 outlet">
              {posts &&
                [...uniqueCategory].map((category) => {
                  return (
                    <div className="text-dark">
                      <button
                        className="btn w-100 text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target=""
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <div className="d-flex justify-content-start">
                          <div>
                            <span
                              className="text-white ms-2"
                              onClick={() => setCategory(category)}
                            >
                              {category}
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="container">
            <div className="row">
              {filteredPosts.slice(0, visibleposts).map((post) => {
                return (
                  <div className="col-md-4 col-12 mt-3">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/blog/${post.slug}`}
                    >
                      <div class="card">
                        <div class="card-body">
                          <h5
                            class="card-title"
                            style={{ fontWeight: "normal" }}
                          >
                            {post.title}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          {/* {visibleposts < filterPosts.length && (
            <div className="text-center mt-4 mb-3">
              <button className="btn btn-primary" onClick={loadMorePosts}>
                Load More
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
