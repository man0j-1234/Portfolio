import React from "react";

export default function About() {
  const styles = {
    page: {
      backgroundColor: "#0b1220",
      color: "#e6eefc",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "1rem 1rem 1rem 5rem",
      lineHeight: 1.6,
    },
    section: {
      marginBottom: "3rem",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    dot: {
      color: "#7aa2ff",
    },
    text: {
      color: "#90a0c0",
      fontSize: "1.1rem",
      maxWidth: "700px",
    },
    experienceBox: {
      backgroundColor: "#0f1a2b",
      border: "1px solid rgba(122, 162, 255, 0.15)",
      borderRadius: "12px",
      padding: "1.5rem",
      marginTop: "1rem",
      maxWidth: "700px",
    },
    expHeading: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#7aa2ff",
    },
    expText: {
      color: "#90a0c0",
      fontSize: "1rem",
    },
    skillsGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "3rem",
      marginTop: "1.5rem",
    },
    skillCategory: {
      minWidth: "180px",
    },
    skillHeading: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      marginBottom: "0.5rem",
      color: "#e6eefc",
    },
    skillItem: {
      color: "#90a0c0",
      fontSize: "0.95rem",
      marginBottom: "0.3rem",
    },
    educationContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      marginTop: "1rem",
    },
    educationCard: {
      backgroundColor: "#0f1a2b",
      border: "1px solid rgba(122, 162, 255, 0.15)",
      borderRadius: "12px",
      padding: "1.5rem",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      maxWidth: "700px",
    },
    eduTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#7aa2ff",
      marginBottom: "0.3rem",
    },
    eduSubtitle: {
      color: "#90a0c0",
      fontSize: "1rem",
      marginBottom: "0.3rem",
    },
    eduDetails: {
      color: "#e6eefc",
      fontSize: "0.95rem",
    },
  };

  return (
    <div style={styles.page}>
      {/* About Me */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          About me<span style={styles.dot}>.</span>
        </h2>
        <p style={styles.text}>
          I love building systems that really matter and that passion drives me taking something from 0→1 or scaling it from 1→100 alongside a team
          that cares just as much.
        </p>
      </section>

      {/* Education */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Education<span style={styles.dot}>.</span>
        </h2>
        <div style={styles.educationContainer}>
          <div style={styles.educationCard}>
            <div style={styles.eduTitle}>
              Vellore Institute of Technology | Integrated MTech
            </div>
            <div style={styles.eduSubtitle}>
              Course Work – Computer Science and Engineering
            </div>
            <div style={styles.eduDetails}>CGPA – 8.37 | 2021 - 2026</div>
          </div>

          <div style={styles.educationCard}>
            <div style={styles.eduTitle}>
              Sri Chaitanya Junior College | BIEAP
            </div>
            <div style={styles.eduSubtitle}>
              Course Work – Mathematics, Physics, Chemistry
            </div>
            <div style={styles.eduDetails}>GPA – 9.74 | 2019 - 2021</div>
          </div>

          <div style={styles.educationCard}>
            <div style={styles.eduTitle}>Keshava Reddy High School | BSEAP</div>
            <div style={styles.eduSubtitle}>Secondary Education</div>
            <div style={styles.eduDetails}>GPA – 10 | 2011 - 2019</div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Experience<span style={styles.dot}>.</span>
        </h2>
        <div style={styles.experienceBox}>
          <div style={styles.expHeading}>
            Virtusa &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; Jun`25 - present
          </div>
          <p style={styles.expText}>
            Contributing to the design and development of Java-based enterprise
            applications using Spring Boot, React.js, and MongoDB, with a focus
            on backend services, API integration, and database optimization.
            Collaborating with cross-functional teams to implement role-based
            authentication, optimize data handling, and ensure responsive and
            secure user experiences.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Skills<span style={styles.dot}>.</span>
        </h2>
        <div style={styles.skillsGrid}>
          <div style={styles.skillCategory}>
            <div style={styles.skillHeading}>Web Design</div>
            <div style={styles.skillItem}>UI/UX Design</div>
            <div style={styles.skillItem}>Responsive Design</div>
            <div style={styles.skillItem}>Wireframing</div>
            <div style={styles.skillItem}>User Research</div>
          </div>
          <div style={styles.skillCategory}>
            <div style={styles.skillHeading}>Frontend</div>
            <div style={styles.skillItem}>JavaScript</div>
            <div style={styles.skillItem}>ReactJS</div>
            <div style={styles.skillItem}>NextJS</div>
            <div style={styles.skillItem}>CSS3</div>
          </div>
          <div style={styles.skillCategory}>
            <div style={styles.skillHeading}>Backend</div>
            <div style={styles.skillItem}>Spring Boot</div>
            <div style={styles.skillItem}>MongoDB</div>
            <div style={styles.skillItem}>Cassandra</div>
            <div style={styles.skillItem}>Vercel</div>
          </div>
          <div style={styles.skillCategory}>
            <div style={styles.skillHeading}>Soft Skills</div>
            <div style={styles.skillItem}>Effective Communication</div>
            <div style={styles.skillItem}>Collaboration</div>
            <div style={styles.skillItem}>Commitment</div>
            <div style={styles.skillItem}>Leadership</div>
          </div>
        </div>
      </section>
    </div>
  );
}
