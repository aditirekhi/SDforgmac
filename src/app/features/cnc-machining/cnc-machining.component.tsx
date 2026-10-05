import { useEffect, useRef, useState } from 'react';
import CNCMachiningViewComponent from './cnc-machining.component.view';

const equipmentSlides = [
  {
    image: '5AxisCNCMachiningCenters.png',
    title: '5-Axis CNC Machining Centers',
    description: 'Complete parts with superior accuracy',
  },
  {
    image: 'CNCTurningCenters.png',
    title: 'CNC Turning Centers',
    description: 'High-precision turning and multi-turn',
  },
  {
    image: 'QualityInspectionEquipment.png',
    title: 'Quality Inspection Equipment',
    description: 'CMM and advanced methodology',
  },
];

export default function CNCMachiningComponent() {
  const [activeEquipmentSlide, setActiveEquipmentSlide] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

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
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const showPreviousEquipmentSlide = () => {
    setActiveEquipmentSlide(
      (activeSlide) =>
        (activeSlide - 1 + equipmentSlides.length) % equipmentSlides.length,
    );
  };

  const showNextEquipmentSlide = () => {
    setActiveEquipmentSlide(
      (activeSlide) => (activeSlide + 1) % equipmentSlides.length,
    );
  };

  return (
    <CNCMachiningViewComponent
      mainRef={mainRef}
      equipmentSlides={equipmentSlides}
      activeEquipmentSlide={activeEquipmentSlide}
      onSelectEquipmentSlide={setActiveEquipmentSlide}
      onPreviousEquipmentSlide={showPreviousEquipmentSlide}
      onNextEquipmentSlide={showNextEquipmentSlide}
    />
  );
}