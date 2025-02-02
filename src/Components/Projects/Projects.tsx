import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './projects.css';

const ceasingProjectsData = [
  {
    name: 'Addis Tech Summit',
    description: `"The Addis Tech Summit was an exciting event where we helped showcase Ethiopian tech innovations and startups. Our digital marketing efforts included creating awareness, managing social media campaigns, and increasing event registration."`,
    status: 'Completed',
    image: 'path-to-your-image1.jpg', // Add actual project image
  },
  {
    name: 'Ethiopian Fashion Week Campaign',
    description: `"Ethiopian Fashion Week attracted a wide audience with our targeted social media ads, email campaigns, and influencer partnerships. We focused on raising awareness about Ethiopian designers and the fashion industry."`,
    status: 'Completed',
    image: 'path-to-your-image2.jpg', // Add actual project image
  },
  {
    name: 'Tech Ethiopia: Online Conference',
    description: `"We supported the Tech Ethiopia conference by creating engaging content, boosting attendee registrations, and managing online interactions. The project aimed to connect tech enthusiasts across Ethiopia."`,
    status: 'In Progress',
    image: 'path-to-your-image3.jpg', // Add actual project image
  },
];

export const CeasingProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="projects__section" ref={ref}>
      <div className="container">
        <div className="projects__content">
          <h6 className="subtitle">Our Recent Projects</h6>
          <h2>
            Check out our <span className="highlight">projects</span>
          </h2>
        </div>
        <div className="projects__wrapper">
          {ceasingProjectsData.map((project, idx) => (
            <div
              className="project__item"
              key={`project-${idx}`}
              style={{
                transform: isInView ? 'none' : 'translateY(100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.5s ease-out 0.2s',
              }}
            >
              <div className="project__image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project__details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className={`project__status ${project.status === 'Completed' ? 'completed' : 'in-progress'}`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
