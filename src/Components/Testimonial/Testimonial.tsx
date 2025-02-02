import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
import customer1 from '../../images/ava-1.jpg';
import customer2 from '../../images/ava-2.jpg';
import customer3 from '../../images/ava-3.jpg';
import { CustomerSlide } from './CustomerSlide';
import './testimonial.css';

const customerData = [
  {
    name: 'Mulugeta Assefa',
    description: `"Elbethel Digital Marketing transformed our online presence. We’ve seen incredible growth thanks to their tailored strategy for Ethiopian businesses!"`,
    image: customer1,
    position: 'CEO, Ethiopian Business Solutions',
  },
  {
    name: 'Sara Tesfaye',
    description: `"Partnering with Elbethel Digital Marketing was a game-changer. Their understanding of the Ethiopian market helped us connect with the right audience and drive traffic to our website."`,
    image: customer2,
    position: 'CEO, Tesfaye & Co.',
  },
  {
    name: 'Addis Abeba Marketing Group',
    description: `"Elbethel Digital Marketing helped us reach customers beyond Ethiopia with impactful campaigns that increased engagement and sales!"`,
    image: customer3,
    position: 'Marketing Manager, Addis Abeba Marketing Group',
  },
];

export const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="testimonial" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            {customerData.map((i, idx) => (
              <CustomerSlide
                key={`slide-${idx}`}
                name={i.name}
                description={i.description}
                image={i.image}
                position={i.position}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
