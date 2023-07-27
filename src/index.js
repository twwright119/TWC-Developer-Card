import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="me-snowboarding3.jpg" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Thomas Wright</h1>
      <h3>The Wright Coder</h3>
      <p>
        I am an investigative and determined Full Stack Developer, with extreme
        attention to detail. I have a keen ability to pick up on new things and
        apply them without much direction. Other than my interest in coding, I
        enjoy Brazilian Jiu Jitsu, and golfing, as well ass surfing, skateing,
        and snowboarding!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <h3>My Skills</h3>
      <div className="skill-list">
        <Skill lang="JavaScript" emoji="" bgColor="gold" />
        <Skill lang="HTML" emoji="" bgColor="firebrick" />
        <Skill lang="CSS" emoji="" bgColor="cornflowerblue" />
        <Skill lang="React.JS" emoji="" bgColor="teal" />
        <Skill lang="Node.JS" emoji="" bgColor="olivedrab" />
        <Skill lang="MongoDB" emoji="" bgColor="seagreen" />
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.lang}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
