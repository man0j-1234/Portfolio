import project1Image from "../assets/badminton.jpg";
import project2Image from "../assets/brain.jpg";
import project3Image from "../assets/airline.jpg";
import project4Image from "../assets/movie.jpg";
const styles= {
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    // marginBottom: "1rem",
    padding:"0 0 0 8rem",
  },
  dot: {
    color: "#7aa2ff",
  },

};
function Projects() {
  const projects = [
    {
      id: 1,
      title:
        "Video Summarization for Badminton | AI-Powered Match Highlight Generator",
      description:
        "Implemented YOLOv8 models for player detection, pose classification, and shuttle recognition to extract high-impact segments like power shots, long rallies, and defensive plays. Leveraged TrackNetV3 to accurately track shuttlecock movement frame-by-frame, enabling fine-grained analysis of rally dynamics and motion intensity. Generated stitched highlight reels using OpenCV and FFmpeg, reducing manual editing by 80%.",
      tech: ["YOLOv8", "TrackNetV3", "OpenCV", "FFmpeg", "Python"],
      image: project1Image,
    },
    {
      id: 2,
      title: "Brain Tumor Classifier | MRI Tumor Detection using KNN",
      description:
        "Developed an advanced machine learning model using K-Nearest Neighbors (KNN) to classify MRI brain scans with 92% accuracy, significantly improving minority class representation by augmenting samples through SMOTE. Achieved an 80-85% reduction in training time via PCA for dimensionality reduction, while fine-tuning hyperparameters led to accuracy variations of -5% to +8%. Designed this model to facilitate early tumor detection, enhancing decision-making for medical professionals and outperforming deep learning models like CNN and VGG16 by 4%.",
      tech: ["KNN", "SMOTE", "PCA", "Python", "Scikit-learn"],
      image: project2Image,
    },
    {
      id: 3,
      title:
        "Airline Availability and Low Fare Prediction | Web Scraping and Predictive Modeling",
      description:
        "Developed a data scraping system using Selenium and Beautiful Soup to collect airline fare trends from multiple sources, achieving over 90% accuracy in fare predictions. Employed feature engineering to transform, create, and extract important features from the scraped data, enhancing model accuracy. Utilized data analytics and forecasting techniques to enhance user experience by predicting flight availability and low fares with an accuracy of 95%.",
      tech: [
        "Selenium",
        "Beautiful Soup",
        "Python",
        "Machine Learning",
        "Data Analytics",
      ],
      image: project3Image,
    },
    {
      id: 4,
      title: "Movie Recommendation System | NLP, Flask, React Framework",
      description:
        "Developed a movie recommendation system using Python and NLP, leveraging TF-IDF and Cosine Similarity to analyze user queries and match them with movie synopses.Implemented a Flask-based web application for seamless interaction, integrating the TMDB API to fetch movie details like posters, ratings, and genres and deployed the system on Render: Cloud Application Platform.",
      tech: ["NLP", "Flask", "React", "TF-IDF", "TMDB API", "Render"],
      image: project4Image,
    },
  ];

  return (
    <div className="section" style={{ padding: "0rem 1rem 1rem 2rem" }}>
      <h2 style={styles.heading}>
        Projects<span style={styles.dot}>.</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="project-image-placeholder">
                <span className="project-initial">P{project.id}</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="spacer" />
    </div>
  );
}

export default Projects;
