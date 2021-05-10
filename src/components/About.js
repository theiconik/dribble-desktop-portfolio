import about from "../about.png";
import { SocialIcon } from "react-social-icons";

const About = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 100px",
        marginTop: "100px",
        marginBottom: "-10px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          paddingLeft: "50px",
        }}
      >
        <img
          src={about}
          alt="aboutillus"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          alignItems: "flex-start",
          padding: "0 100px",
          marginBottom: "50px",
        }}
      >
        <div style={{ color: "#ff3942", fontSize: "1.5rem" }}>
          I am a 3rd year B<span style={{ color: "#2a60fa" }}>.</span>Tech
          student at NIT Agartala<span style={{ color: "#2a60fa" }}>,</span>{" "}
          India<span style={{ color: "#2a60fa" }}>. </span>I love working on web
          projects and solving coding problems
          <span style={{ color: "#2a60fa" }}>.</span> My tech stack is MERN
          <span style={{ color: "#2a60fa" }}>.</span> <br />I love memes and Tea
          (not Coffee)!
        </div>
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              listStyle: "none",
              padding: "0",
            }}
          >
            <SocialIcon url="https://twitter.com/theiconik_" style={{ height: "45px" , width:"45px", marginRight:"10px"}} bgColor="white" fgColor="#2a60fa" />
            <SocialIcon url="https://www.instagram.com/thewokeguy/" style={{ height: "45px" , width:"45px", marginRight:"10px"}} bgColor="white" fgColor="#2a60fa"  />
            <SocialIcon style={{ height: "45px" , width:"45px", marginRight:"10px"}} url="https://www.linkedin.com/in/ujjawal-pandey-b35524117/" bgColor="white" fgColor="#2a60fa" />
            <SocialIcon url="https://github.com/theiconik" style={{ height: "45px" , width:"45px", marginRight:"10px"}} bgColor="white" fgColor="#2a60fa" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
