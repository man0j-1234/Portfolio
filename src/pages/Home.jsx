import profileImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="section" style={{ padding: "1rem 2rem 1rem 6em"}}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="greeting">Hey, I'm Manoj</div>
          <h1 className="hero-title">
            <span className="highlight">Computer Science</span>
            <span className="title-main">Engineer</span>
          </h1>
          <p className="hero-description">
            Pursuing final year MTech @VIT Vellore, passionate about building
            innovative, high-impact software solutions. My experience spans
            building scalable systems with thoughtful tech stack and design .
          </p>
          <div className="hero-buttons">
            <Link to="/contact">
              <button className="btn btn-primary">Get In Touch</button>
            </Link>
            <Link to="/projects">
              <button className="btn btn-secondary">Browse Projects</button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image-container">
            <img src={profileImage} alt="Manoj D" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
