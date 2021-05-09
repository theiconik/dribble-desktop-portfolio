import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Post() {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
         title,
         slug,
         mainImage {
            asset -> {
               _id,
               url
            },
            alt
         }
      }`
      )
      .then((data) => setPostData(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <main style={{ margin: "60px 60px", minHeight: "70vh" }}>
      <section>
        <h1
          style={{
            textAlign: "center",
            color: "#ff3942",
            textDecoration: "underline",
          }}
        >
          <span>All Posts</span>
        </h1>
        <h4 style={{ color: "#ff3942", textAlign: "center", margin: "-15px" }}>
          Learning and Sharing!
        </h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "60px",
          }}
        >
          {postData &&
            postData.map((post, index) => (
              <article className="post-preview" style={{ marginTop: "60px", padding:"20px 10px", border:"2px solid #ff3942", borderRadius:"15px" }}>
                <Link to={"/post/" + post.slug.current} key={post.slug.current} style={{textDecoration:"none"}}>
                  <span key={index}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius:"15px"
                      }}
                    />
                    <span className="underline">
                      <h5 style={{textAlign:"center", fontSize:"1.175rem",}}>{post.title}</h5>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
