import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

export default function Blogcat() {
    const {postSlug} = useParams()
    const [posts,setPosts] = useState({})
    useEffect(() => {
        const postData = async () => {
          await fetch(`https://capobrain.vercel.app/api/auth/getpost/${postSlug}`, {
            method: "GET",
          })
            .then((res) => res.json())
            .then((data) => setPosts(data) );
        };
        postData();
      }, [postSlug]);
      const sanitizedContent = { __html: DOMPurify.sanitize(posts.content) };
  return (
    <div>
      <div className="home-container">
      <div
          className="background-image7"
        >
          <div className="color-overlay7 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
              >
                {posts.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
<div className="container blog-container">
      <div className='mt-5' dangerouslySetInnerHTML={sanitizedContent}></div>
      </div>
    </div>
  )
}
