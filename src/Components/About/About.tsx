import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '../../images/about-us.jpg';
import { ChoseUs } from './ChoseUs';
import './about.css';

const chooseData = [
  {
    icon: 'ri-team-line',
    title: 'Local Expertise in Digital Marketing',
    description:
      'Our team has deep knowledge of the Ethiopian market and its unique challenges. We understand how to leverage local trends and cultural nuances to create impactful digital marketing strategies that resonate with your audience.',
  },
  {
    icon: 'ri-user-settings-line',
    title: 'Tailored Marketing Strategies',
    description:
      'Every business is different, which is why we customize our strategies to meet your specific needs. We focus on delivering solutions that align with your goals, ensuring that your brand stands out in the competitive Ethiopian digital landscape.',
  },
  {
    icon: 'ri-global-line',
    title: 'Global Reach, Local Touch',
    description:
      'While we are experts in the Ethiopian market, our strategies are designed to help your business expand beyond borders. We integrate international best practices to create digital marketing campaigns that have both local relevance and global appeal.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why Choose Us</h6>
            <h2>Elbethel Digital Marketing: Empowering Ethiopian Businesses</h2>
            <h2 className="highlight">Through Effective Digital Marketing</h2>
            <p className="description about__content-desc">
              At Elbethel Digital Marketing, we understand that navigating the digital world can be challenging, especially in Ethiopia. Our expert team is dedicated to helping your business succeed by providing innovative, results-driven digital marketing strategies that help you stand out in the ever-growing Ethiopian market.
            </p>
            <div className="choose__us-item-wrapper">
              {chooseData.map((i, idx) => (
                <ChoseUs
                  icon={i.icon}
                  title={i.title}
                  description={i.description}
                  key={`choose__us-${idx}`}
                />
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="ethiopian-digital-marketing" />
          </div>
        </div>
      </div>
    </section>
  );
};
