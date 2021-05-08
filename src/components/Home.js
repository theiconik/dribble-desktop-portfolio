import React from "react";
import typing from "../typingillus.png";

export default function Home() {
  return (
    <div style={{ marginTop: "120px" }}>
      <section
        style={{
          display: "flex",
          margin: "60px 60px",
          justifyContent: "center",
          alignItems: "space-between",
        }}
      >
        <div style={{ marginRight: "-400px", zIndex: "1000" }}>
          <div
            style={{
              color: "#ff3942",
              fontSize: "3rem",
              fontWeight: "800px",
              marginBottom: "80px",
            }}
          >
            Hello<span>,</span> I<span>'</span>m Ujjawal<span>,</span>
            <br />
            3rd year B<span>.</span>Tech CSE student
            <br />
            with frontend skillset<span>.</span> It<span>'</span>s my
            <br />
            pleasure you found me<span>.</span>
          </div>
          <div>
            See my projects on{" "}
            <a
              href="https://github.com/theiconik"
              style={{
                fontWeight: "800",
                textDecoration: "underline",
                color: "#ff3942",
              }}
            >
              <span className="underline" style={{}}>
                Github
              </span>
            </a>{" "}
            if you
            <br />
            like it<span>,</span> then follow me, it will
            <br />
            boost my dopamine.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginRight: "-60px",
            position: "relative",
            right:"-60px",
            bottom:"-60px"
          }}
        >
          <img src={typing} width="900px" height="485px" alt="typing" />
        </div>
      </section>
    </div>
  );
}
