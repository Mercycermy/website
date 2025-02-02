import { useRef } from 'react';
import { Card } from './Card';
import './services.css';
import { useInView } from 'framer-motion';

const servicesData = [
    {
        icon: "ri-camera-line",
        title: "Photography",
        description: "We offer professional photography services that capture the essence of your Ethiopian business. From product photography to event shoots, our team helps your brand stand out with high-quality images.",
    },
    {
        icon: "ri-code-s-slash-line",
        title: "Web Design & Development",
        description: "We design and develop responsive, aesthetically pleasing websites tailored to your business. Our websites are not only visually engaging but also optimized for performance, providing a seamless experience for your Ethiopian customers.",
    },
    {
        icon: "ri-landscape-line",
        title: "Graphics Design",
        description: "Our graphic design services help Ethiopian businesses communicate their message effectively. We create compelling visuals, from logos to promotional materials, that reflect your brand's identity.",
    },
    {
        icon: "ri-rocket-line",
        title: "Digital Marketing",
        description: "We specialize in digital marketing strategies that help Ethiopian businesses grow. Our services include SEO, social media marketing, and PPC advertising, ensuring your brand gets the attention it deserves.",
    },
]

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" ref={ref}>
      <div className="container">
        <div className="services__top-content">
          <h1 className="subtitle">Our Services</h1>
          <h2>Boost Your Business with</h2>
          <h2 className="highlight">Our Expert Digital Marketing Services</h2>
        </div>
        <div className="services__item-wrapper">
            {servicesData.map((i, idx) => (
                <Card 
                  key={`services__item-${idx}`} 
                  title={i.title} 
                  description={i.description} 
                  icon={i.icon} 
                  isInView={isInView} 
                  idx={idx} 
                />
            ))}
        </div>
      </div>
    </section>
  );
};
