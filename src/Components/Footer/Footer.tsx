import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './footer.css';

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const year = new Date().getFullYear();
  const quickLinks = [
    {
      name: 'Our Services',
      content: [
        {
          path: '#',
          display: 'Digital Marketing',
        },
        {
          path: '#',
          display: 'Social Media Management',
        },
        {
          path: '#',
          display: 'Search Engine Optimization',
        },
      ],
    },
    {
      name: 'Support',
      content: [
        {
          path: '#',
          display: 'Pricing Plans',
        },
        {
          path: '#',
          display: 'Client Testimonials',
        },
        {
          path: '#',
          display: 'FAQs',
        },
      ],
    },
    {
      name: 'About Us',
      content: [
        {
          path: '#',
          display: 'Our Story',
        },
        {
          path: '#',
          display: 'Careers',
        },
      ],
    },
  ];

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer__wrapper">
          <div
            className="footer__logo"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <h2>Elbethel Digital Marketing</h2>
            <p className="description footer__desc">Empowering Your Digital Growth</p>
            <p className="small__text description">
              "Empowering Your Digital Growth" represents our commitment to helping Ethiopian businesses grow and succeed in the digital era. We provide strategic digital marketing solutions tailored to the unique needs of local businesses.
            </p>
          </div>
          <div
            className="footer__quick-links-wrapper"
            style={{
              transform: isInView ? 'none' : 'translateX(100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            {quickLinks.map((i, idx) => (
              <div key={idx} className="footer__quick-links">
                <h3 className="quick__links-title">{i.name}</h3>
                <ul className="quick__links">
                  {i.content.map((link, idx) => (
                    <li
                      key={`link-${idx}`}
                      className="quick__link-item"
                    >
                      <a href={link.path}>
                        {link.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="copyright">
          Copyright© {year},  All rights reserved.
        </p>
      </div>
    </footer>
  );
};
