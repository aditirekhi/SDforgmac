import { useEffect, useRef, useState } from 'react';
import {
  faCompassDrafting,
  faGear,
  faGlobe,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import AboutUsViewComponent from './about-us.component.view';

const strengths = [
  {
    image: 'advancedManufacturing.png',
    icon: faGear,
    title: 'Advanced Manufacturing',
    description:
      'Integrated forging, machining and cold extrusion under one roof.',
  },
  {
    image: 'engineeringExpertise.png',
    icon: faCompassDrafting,
    title: 'Engineering Expertise',
    description:
      'Decades of experience solving complex manufacturing challenges.',
  },
  {
    image: 'consistentQuality.png',
    icon: faShieldHalved,
    title: 'Consistent Quality',
    description:
      'Precision, reliability and strict quality construct in every component.',
  },
  {
    image: 'nationwidePartnerships.png',
    icon: faGlobe,
    title: 'Nationwide Partnership',
    description:
      'Supporting customers nationwide with responsive service and long-term collaboration.',
  },
];

export default function AboutUsComponent() {
  const mainRef = useRef<HTMLElement>(null);
  const [activeStrength, setActiveStrength] = useState(0);
  const [missionVisible, showMission] = useState(false);
  const [visionVisible, showVision] = useState(false);
  const [valuesVisible, showValues] = useState(false);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const revealElements =
      mainElement.querySelectorAll<HTMLElement>('.scroll-reveal');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const showPreviousStrength = () => {
    setActiveStrength(
      (current) => (current - 1 + strengths.length) % strengths.length
    );
  };

  const showNextStrength = () => {
    setActiveStrength((current) => (current + 1) % strengths.length);
  };

  const toggleMission = () => {
    showMission((missionVisible) => !missionVisible);
  };

  const toggleVision = () => {
    showVision((visionVisible) => !visionVisible);
  };

  const toggleValues = () => {
    showValues((valuesVisible) => !valuesVisible);
  };

  return (
    <AboutUsViewComponent
      mainRef={mainRef}
      strengths={strengths}
      activeStrength={activeStrength}
      onSelectStrength={setActiveStrength}
      onPreviousStrength={showPreviousStrength}
      onNextStrength={showNextStrength}
      missionVisible={missionVisible}
      visionVisible={visionVisible}
      valuesVisible={valuesVisible}
      toggleMission={toggleMission}
      toggleVision={toggleVision}
      toggleValues={toggleValues}
    />
  );
}
