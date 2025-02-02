import { useRef } from 'react';
import member1 from '../../images/team-01.png';
import member2 from '../../images/team-02.png';
import member3 from '../../images/team-03.png';
import member4 from '../../images/team-04.png';
import { Member } from './Member';
import './team.css';
import { useInView } from 'framer-motion';

const teamData = [
  {
    image: member1,
    name: 'Abenezer',
    position: 'Founder & CEO',
  },
  {
    image: member2,
    name: 'Biruk Alemayehu',
    position: 'Marketing Strategist',
  },
  {
    image: member3,
    name: 'Mihret Tsegaye',
    position: 'Creative Designer',
  },
  {
    image: member4,
    name: 'Eliyana Belay',
    position: 'Web Developer',
  },
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="our__team" ref={ref}>
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet <span className="highlight">our team</span>
          </h2>
        </div>
        <div className="team__wrapper">
          {teamData.map((i, idx) => (
            <Member
              image={i.image}
              name={i.name}
              position={i.position}
              key={`team__member-${idx}`}
              idx={idx}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};