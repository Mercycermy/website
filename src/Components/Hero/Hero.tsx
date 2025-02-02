import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import darkThemeHeroImg from '../../images/hero-img.png';
import lightThemeHeroImg from '../../images/light-hero-img.jpg';
import './hero.css';

interface Props {
  theme: string;
}

export const Hero: FC<Props> = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="hero__section" id="home" ref={ref}>
      <div className="container">
        <div className="hero__wrapper">
          <div
            className="hero__content"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <div>
              <h1>Elbethel Digital Marketing</h1> {/* Added name here */}
              <h2 className="highlight">Empowering Ethiopian Brands Through Innovative Digital Marketing Solutions</h2>
            </div>
            <p className="description">
              We are an Ethiopian digital marketing agency dedicated to helping local businesses thrive online. Our expertise in SEO, social media marketing, and online advertising ensures that your brand reaches the right audience and achieves measurable growth.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">
                Start Growing Your Brand
              </button>
              <button className="secondary__btn">
                Learn About Our Services
              </button>
            </div>
          </div>
          <div className="hero__img">
            <img
              src={theme === '' ? darkThemeHeroImg : lightThemeHeroImg}
              alt="ethiopian-digital-marketing-hero-img"
              style={{
                transform: isInView ? 'none' : 'translateX(100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 1s ease-out 0.5s',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
