import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const links = [
  {
    label: "Email",
    href: "mailto:manoj.connecthere@gmail.com",
    text: "manoj.connecthere@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    href: "tel:+919182158821",
    text: "+91 9182158821",
    icon: <FaPhone />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manojdorai",
    text: "LinkedIn",
    icon: <FaLinkedin />,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/man0j-1234",
    text: "Github",
    icon: <FaGithub />,
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_.man0j?igsh=cXBoa3ByNzJuMXRt",
    text: "Instagram",
    icon: <FaInstagram />,
    external: true,
  },
  {
    label: "Twitter",
    href: "https://x.com/theonlyman0j?t=1bqXiOM5TB5SSPc32T-uwQ&s=09",
    text: "X",
    icon: <FaTwitter />,
    external: true,
  },
];

export default function Contact() {
  const styles = {
    section: {
      backgroundColor: "#0b1220",
      padding: "2rem",
      minHeight: "100vh",
      color: "#e6eefc",
      textAlign: "center",
      fontFamily: "'Segoe UI', sans-serif",
      },
       heading1: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    // marginBottom: "1rem",
  },
  dot: {
    color: "#7aa2ff",
  },
    heading: {
      fontSize: "2rem",
      color: "#7aa2ff",
      marginBottom: "2rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.5rem",
      justifyContent: "center",
   
    },
    card: {
      backgroundColor: "#0f1a2b",
      padding: "1.5rem",
      borderRadius: "12px",
      border: "1px solid rgba(122, 162, 255, 0.15)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
     
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.35)",
    },
    link: {
      textDecoration: "none",
      color: "#e6eefc",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    icon: {
      fontSize: "2rem",
      color: "#6ee7f8",
      marginBottom: "0.5rem",
    },
    text: {
      fontSize: "1rem",
      color: "#90a0c0",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <section id="contact" style={styles.section}>
        <h2 style={styles.heading1}>
          Contact Me<span style={styles.dot}>.</span>
        </h2>{" "}
        <div style={styles.grid}>
          {links.map(({ label, href, text, icon, external }) => (
            <div
              key={label}
              style={styles.card}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.cardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, styles.card)
              }
            >
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                title={label}
                style={styles.link}
              >
                <span style={styles.icon}>{icon}</span>
                {text && <span style={styles.text}>{text}</span>}
              </a>
            </div>
          ))}
        </div>
      </section>
      <div style={styles.grid}>
        {links.map(({ label, href, text, icon, external }) => (
          <div
            key={label}
            style={styles.card}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.cardHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, styles.card)
            }
          >
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              title={label}
              style={styles.link}
            >
              <span style={styles.icon}>{icon}</span>
              {text && <span style={styles.text}>{text}</span>}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
