import type { RefObject } from 'react';
import SharedSectionHeaderViewComponent from '../../shared/components/shared-section-header.component.view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faCheckCircle,
  faGear,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

type EquipmentSlide = {
  image: string;
  title: string;
  description: string;
};

type CNCMachiningViewProps = {
  mainRef: RefObject<HTMLElement | null>;
  equipmentSlides: EquipmentSlide[];
  activeEquipmentSlide: number;
  onSelectEquipmentSlide: (index: number) => void;
  onPreviousEquipmentSlide: () => void;
  onNextEquipmentSlide: () => void;
};

export default function CNCMachiningViewComponent({
  mainRef,
  equipmentSlides,
  activeEquipmentSlide,
  onSelectEquipmentSlide,
  onPreviousEquipmentSlide,
  onNextEquipmentSlide,
}: CNCMachiningViewProps) {
  return (
    <main ref={mainRef} className="mt-15 w-full flex flex-col">
      <section
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}CNCMachining/hero.png")`,
        }}
        className="scroll-reveal reveal-stagger w-full md:grid md:grid-cols-2 bg-center bg-cover"
      >
        <div className="w-full flex flex-col bg-[color-mix(in_srgb,var(--secondary-color)_70%,transparent)] md:bg-transparent p-5">
          <label className="eyebrow-text uppercase text-[var(--tertiary-color)]">
            Precision CNC Machining Services
          </label>
          <label className="hero-title text-[var(--tertiary-color)]">
            High-Precision
          </label>
          <label className="hero-title text-[var(--tertiary-color)]">
            CNC Machining
          </label>
          <label className="hero-title text-[var(--primary-color)]">
            for a Stronger Tomorrow
          </label>
          <p className="hero-description text-[var(--tertiary-color)]">
            Complex parts. Tight tolerances. Reliable delivery.
          </p>
          <p className="hero-description text-[var(--tertiary-color)]">
            High-quality CNC machining solutions for demanding industries
            worldwide.
          </p>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger grid grid-cols-2 md:flex gap-5 justify-around items-center bg-[var(--secondary-color)] p-5">
        <div className="flex gap-2 items-center">
          <span className="flex items-center justify-around border border-[var(--primary-color)] rounded-full p-2">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-3xl text-[var(--primary-color)]"
            />
          </span>
          <span className="flex flex-col gap-1 text-[var(--tertiary-color)]">
            <label className="section-heading-small">10+</label>
            <label className="eyebrow-text">Years Of Experience</label>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="flex items-center justify-around border border-[var(--primary-color)] rounded-full p-2">
            <FontAwesomeIcon
              icon={faUser}
              className="text-3xl text-[var(--primary-color)]"
            />
          </span>
          <span className="flex flex-col gap-1 text-[var(--tertiary-color)]">
            <label className="section-heading-small">50+</label>
            <label className="eyebrow-text">Satisfied Customers</label>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="flex items-center justify-around border border-[var(--primary-color)] rounded-full p-2">
            <FontAwesomeIcon
              icon={faGear}
              className="text-3xl text-[var(--primary-color)]"
            />
          </span>
          <span className="flex flex-col gap-1 text-[var(--tertiary-color)]">
            <label className="section-heading-small">10M+</label>
            <label className="eyebrow-text">Components Delivered</label>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <span className="flex items-center justify-around border border-[var(--primary-color)] rounded-full p-2">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-3xl text-[var(--primary-color)]"
            />
          </span>
          <span className="flex flex-col gap-1 text-[var(--tertiary-color)]">
            <label className="section-heading-small">99.8%</label>
            <label className="eyebrow-text">Years Of Experience</label>
          </span>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger my-5 mx-5 lg:mx-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2">
          <SharedSectionHeaderViewComponent
            sectionTitle="Comprehensive CNC Machining Capabilities"
            smallSectionTitle="Our CNC Machining Services"
          ></SharedSectionHeaderViewComponent>
          <p className="hidden md:block body-text-small">
            Full-scale production, we deliver precision CNC machined components
            with exceptional accuracy, surface finish and reliability.
          </p>
        </div>
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 bg-[var(--secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/CNCMilling.png`}
              className="rounded-lg w-full h-full min-w-0 object-cover lg:h-auto"
            />
            <span className="flex min-w-0 flex-col gap-2 text-[var(--tertiary-color)] p-5">
              <label className="card-heading">CNC Milling</label>
              <p className="hidden md:block body-text">
                3 axis milling for complex geometrics and high-precision parts.
              </p>
              <p className="block md:hidden body-text">3-axis milling</p>
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 bg-[var(--secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/CNCTurning.png`}
              className="rounded-lg w-full h-full min-w-0 object-cover lg:h-auto"
            />
            <span className="flex min-w-0 flex-col gap-2 text-[var(--tertiary-color)] p-5">
              <label className="card-heading">CNC Turning</label>
              <p className="hidden md:block body-text">
                High precision turning for cylindrical components with light
                tolerances.
              </p>
              <p className="block md:hidden body-text">
                High Precision Turning
              </p>
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 bg-[var(--secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/MultiAxisMachining.png`}
              className="rounded-lg w-full h-full min-w-0 object-cover lg:h-auto"
            />
            <span className="flex min-w-0 flex-col gap-2 text-[var(--tertiary-color)] p-5">
              <label className="card-heading">Multi-Axis Machining</label>
              <p className="hidden md:block body-text">
                5-axis machining for complex intricate parts and superior
                accuracy.
              </p>
              <p className="block md:hidden body-text">5-axis machining</p>
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 bg-[var(--secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/CustomCNCMachining.png`}
              className="rounded-lg w-full h-full min-w-0 object-cover lg:h-auto"
            />
            <span className="flex min-w-0 flex-col gap-2 text-[var(--tertiary-color)] p-5">
              <label className="card-heading">Custom CNC Machining</label>
              <p className="hidden md:block body-text">
                Prototyping to high-volume productions with consistent quality
                and fast turnaround.
              </p>
              <p className="block md:hidden body-text">
                Prototyping to production
              </p>
            </span>
          </div>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger my-5 mx-2 lg:mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
          <SharedSectionHeaderViewComponent
            sectionTitle="Precision Parts for Diverse Applications"
            smallSectionTitle="Our CNC Machined Products"
          ></SharedSectionHeaderViewComponent>
          <p className="hidden lg:block body-text-small">
            We manufacture a wide range of CNC machined components for
            industries that demand performance, reliability, and tight
            tolerances.
          </p>
        </div>
        <div className="reveal-stagger grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-5">
          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/shafts.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Shafts"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Shafts</label>

              <label className="hidden lg:block body-text-small">
                Precision rotatory shafts with tight tolerances
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/housings.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Housings"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Housings</label>

              <label className="hidden lg:block body-text-small">
                Complex enclosures and equipment housings
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/flanges.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Flanges"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Flanges</label>

              <label className="hidden lg:block body-text-small">
                Standard and custom flange components
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/brackets.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Brackets"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Brackets</label>

              <label className="hidden lg:block body-text-small">
                Structural and mounting brackets
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/blocks.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Blocks"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Blocks</label>

              <label className="hidden lg:block body-text-small">
                Precision blocks for mechanical systems
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/connectors.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Connectors"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Connectors</label>

              <label className="hidden lg:block body-text-small">
                Custom connectors and fittings
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/gears.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Gears"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Gears</label>

              <label className="hidden lg:block body-text-small">
                High-precision gears and gear components
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/valveValveBodies.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Valves & Valve Bodies"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Valve Bodies</label>

              <label className="hidden lg:block body-text-small">
                Critical fluid control components
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/pulleys.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Pulleys"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Pulleys</label>

              <label className="hidden lg:block body-text-small">
                Machined pulleys and power transmission parts
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/covers.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Covers"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Covers</label>

              <label className="hidden lg:block body-text-small">
                Protective covers and access panels
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/customComponents.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Custom Components"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Custom Parts</label>

              <label className="hidden lg:block body-text-small">
                Complex custom parts per your drawings
              </label>
            </span>
          </span>

          <span className="flex flex-col bg-[var(--muted-secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/prototyping.png`}
              className="h-30 w-full object-contain object-center p-2"
              alt="Prototype Parts"
            />
            <span className="flex flex-col px-2">
              <label className="card-heading">Prototype Parts</label>

              <label className="hidden lg:block body-text-small">
                Rapid prototyping for design validation
              </label>
            </span>
          </span>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger my-5 mx-10">
        <SharedSectionHeaderViewComponent
          sectionTitle="Advanced CNC Equipment for Superior Results"
          smallSectionTitle="Our Machinery & Infrastructure"
        ></SharedSectionHeaderViewComponent>
        <div className="reveal-stagger hidden md:grid grid-cols-3 gap-5 mt-5">
          <span className="flex flex-col gap-2 bg-[var(--secondary-color)] rounded-lg pb-2">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/5AxisCNCMachiningCenters.png`}
              className="rounded-lg"
            />
            <span className="flex flex-col gap-2 text-[var(--tertiary-color)] px-2">
              <label className="card-heading">
                5-Axis CNC Machining Centers
              </label>
              <label className="hidden lg:block body-text">
                Complete parts with superior accuracy
              </label>
            </span>
          </span>

          <span className="flex flex-col gap-2 bg-[var(--secondary-color)] rounded-lg pb-2">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/CNCTurningCenters.png`}
              className="rounded-lg"
            />
            <span className="flex flex-col gap-2 text-[var(--tertiary-color)] px-2">
              <label className="card-heading">CNC Turning Centers</label>
              <label className="hidden lg:block body-text">
                High-precision turning and multi-turn
              </label>
            </span>
          </span>

          <span className="flex flex-col gap-2 bg-[var(--secondary-color)] rounded-lg pb-2">
            <img
              src={`${import.meta.env.BASE_URL}CNCMachining/QualityInspectionEquipment.png`}
              className="rounded-lg"
            />
            <span className="flex flex-col gap-2 text-[var(--tertiary-color)] px-2">
              <label className="card-heading">
                Quality Inspection Equipment
              </label>
              <label className="hidden lg:block body-text">
                CMM and advanced methodology
              </label>
            </span>
          </span>
        </div>

        <div className="md:hidden w-full">
          {equipmentSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`flex flex-col gap-2 rounded-lg bg-[var(--secondary-color)] pb-2 ${
                index === activeEquipmentSlide ? 'block' : 'hidden'
              }`}
              aria-hidden={index !== activeEquipmentSlide}
            >
              <img
                src={`${import.meta.env.BASE_URL}CNCMachining/${slide.image}`}
                className="w-full aspect-video rounded-lg object-cover"
                alt={slide.title}
              />
              <span className="flex flex-col gap-2 px-2 text-[var(--tertiary-color)]">
                <label className="card-heading">{slide.title}</label>
                <label className="body-text">{slide.description}</label>
              </span>
            </div>
          ))}
          <div className="mt-3 flex items-center justify-between">
            <button
              type="button"
              className="rounded-lg px-3 py-2 text-[var(--tertiary-color)] bg-[var(--secondary-color)]"
              aria-label="Previous equipment slide"
              onClick={onPreviousEquipmentSlide}
            >
              Previous
            </button>
            <div className="flex gap-2" aria-label="Choose equipment slide">
              {equipmentSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  className={`h-3 w-3 rounded-full ${
                    index === activeEquipmentSlide
                      ? 'bg-[var(--primary-color)]'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Show ${slide.title}`}
                  aria-current={index === activeEquipmentSlide}
                  onClick={() => onSelectEquipmentSlide(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="rounded-lg px-3 py-2 text-[var(--tertiary-color)] bg-[var(--secondary-color)]"
              aria-label="Next equipment slide"
              onClick={onNextEquipmentSlide}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
