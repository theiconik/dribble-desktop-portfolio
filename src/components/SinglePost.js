import React from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  //   console.log(slug);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
         slug,
         title,
         _id,
         mainImage{
            asset -> {
               _id,
               url
            }
         },
         body,
         "name": author->name,
         "authorImage": author->image
      }`
      )
      .then((data) => {
        setSinglePost(data[0]);
        console.log(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <h4 style={{ textAlign: "center" }}>Loading...</h4>;

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: "50px 100px",
      }}
    >
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <header>
          <div>
            <div>
              <span style={{ textDecoration: "underline", color: "#ff2942" }}>
                <h1 style={{ textAlign: "center" }}>{singlePost.title}</h1>
              </span>
              <p style={{textAlign:"center", fontStyle:"italic", color:"#ff3942", marginTop:"-10px"}}> - {singlePost.name}</p>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </header>
        <div>
          <BlockContent className="block-content" 
            blocks={singlePost.body}
            projectId="o0w4pl3d"
            dataset="production"
            style={{border:"1px solid #ff3942"}}
          />
        </div>
      </article>
    </main>
  );
}
