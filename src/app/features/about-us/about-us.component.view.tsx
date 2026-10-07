import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { RefObject } from 'react';
import {
  faAngleDown,
  faAngleUp,
  faBullseye,
  faCalendarDays,
  faCheckCircle,
  faCompassDrafting,
  faEye,
  faGear,
  faGlobe,
  faShieldHalved,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SharedSectionHeaderViewComponent from '../../shared/components/shared-section-header.component.view';

type Strength = {
  image: string;
  icon: IconDefinition;
  title: string;
  description: string;
};

type AboutUsViewComponentProps = {
  mainRef: RefObject<HTMLElement | null>;
  strengths: Strength[];
  activeStrength: number;
  onSelectStrength: (index: number) => void;
  onPreviousStrength: () => void;
  onNextStrength: () => void;
  missionVisible: boolean;
  visionVisible: boolean;
  valuesVisible: boolean;
  toggleMission: () => void;
  toggleVision: () => void;
  toggleValues: () => void;
};

export default function AboutUsViewComponent({
  mainRef,
  strengths,
  activeStrength,
  onSelectStrength,
  onPreviousStrength,
  onNextStrength,
  missionVisible,
  visionVisible,
  valuesVisible,
  toggleMission,
  toggleValues,
  toggleVision,
}: AboutUsViewComponentProps) {
  const activeSlide = strengths[activeStrength];

  return (
    <main ref={mainRef} className="flex flex-col mt-15">
      <section
        className="scroll-reveal w-full md:grid md:grid-cols-2 bg-center bg-cover"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}AboutUs/hero.png")`,
        }}
      >
        <div className="reveal-stagger w-full flex flex-col bg-[color-mix(in_srgb,var(--secondary-color)_60%,transparent)] md:bg-[transparent] p-5 md:p-10">
          <label className="eyebrow-text uppercase text-[var(--tertiary-color)]">
            About SDforgmac
          </label>
          <label className="hero-title text-[var(--tertiary-color)]">
            Built Today for a{' '}
          </label>
          <label className="hero-title text-[var(--primary-color)]">
            Stronger Tomorrow
          </label>
          <p className="body-text text-[var(--tertiary-color)]">
            We are trusted manufacturing partner, delivering high-quality forged
            component, precision machining and cold extrusion solutions that
            power progress across industries nationwide.
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

      <section className="scroll-reveal reveal-stagger my-5 mx-5 lg:mx-10 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <SharedSectionHeaderViewComponent
            sectionTitle="A Manufacturing Partner with a Bigger Purpose"
            smallSectionTitle="Our Story"
          ></SharedSectionHeaderViewComponent>
          <p className="body-text">
            SDforgmac was founded on a simple belief: great manufacturing builds
            a stronger, more sustainable world. What started as a specialized
            forging and machining operation has grown into a turned nationwide
            partner to industries that keep the world moving.
          </p>
          <p className="md:hidden lg:block body-text">
            Through continuous investment in technology, people and processes,
            we deliver precision, reliability and long-tern value - helping our
            customers turn bold ideas into real-world imapct.
          </p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}AboutUs/ourStory.png`}
          className="rounded-lg self-center"
        />
      </section>

      <section className="scroll-reveal my-5 mx-5 lg-mx-10 flex flex-col">
        <SharedSectionHeaderViewComponent
          sectionTitle="What Sets SDforgmac Apart"
          smallSectionTitle="Our Strengths"
        ></SharedSectionHeaderViewComponent>
        <div className="reveal-stagger hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
          <div className="flex flex-col gap-2 bg-[var(--secondary-color)] rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <img
              src={`${import.meta.env.BASE_URL}AboutUs/advancedManufacturing.png`}
              className="rounded-lg"
            />
            <span className="flex gap-2 px-2 pb-2">
              <FontAwesomeIcon
                icon={faGear}
                className="text-3xl text-[var(--primary-color)]"
              ></FontAwesomeIcon>
              <span className="flex flex-col gap-1">
                <label className="card-heading text-[var(--tertiary-color)]">
                  Advanced Manufacturing
                </label>
                <label className="body-text-small text-[var(--tertiary-color)]">
                  Integrated forging, machining and cold extrusion under one
                  roof.
                </label>
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-2 bg-[var(--secondary-color)] rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <img
              src={`${import.meta.env.BASE_URL}AboutUs/engineeringExpertise.png`}
              className="rounded-lg"
            />
            <span className="flex gap-2 px-2 pb-2">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                className="text-3xl text-[var(--primary-color)]"
              ></FontAwesomeIcon>
              <span className="flex flex-col gap-1">
                <label className="card-heading text-[var(--tertiary-color)]">
                  Engineering Expertise
                </label>
                <label className="body-text-small text-[var(--tertiary-color)]">
                  Decades of experience solving complex manufacturing
                  challenges.
                </label>
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-2 bg-[var(--secondary-color)] rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <img
              src={`${import.meta.env.BASE_URL}AboutUs/consistentQuality.png`}
              className="rounded-lg"
            />
            <span className="flex gap-2 px-2 pb-2">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-3xl text-[var(--primary-color)]"
              ></FontAwesomeIcon>
              <span className="flex flex-col gap-1">
                <label className="card-heading text-[var(--tertiary-color)]">
                  Consistent Quality
                </label>
                <label className="body-text-small text-[var(--tertiary-color)]">
                  Precision, reliability and strict quality construct in every
                  component.
                </label>
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-2 bg-[var(--secondary-color)] rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <img
              src={`${import.meta.env.BASE_URL}AboutUs/nationwidePartnerships.png`}
              className="rounded-lg"
            />
            <span className="flex gap-2 px-2 pb-2">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-3xl text-[var(--primary-color)]"
              ></FontAwesomeIcon>
              <span className="flex flex-col gap-1">
                <label className="card-heading text-[var(--tertiary-color)]">
                  Nationwide Partnership
                </label>
                <label className="body-text-small text-[var(--tertiary-color)]">
                  Supporting customers nationwide with responsive service and
                  long-term collaboration.
                </label>
              </span>
            </span>
          </div>
        </div>
        <div className="mt-5 md:hidden">
          <div className="flex flex-col gap-2 rounded-lg bg-[var(--secondary-color)]">
            <img
              src={`${import.meta.env.BASE_URL}AboutUs/${activeSlide.image}`}
              className="w-full aspect-video rounded-lg object-cover"
              alt={activeSlide.title}
            />
            <span className="flex gap-2 px-2 pb-2">
              <FontAwesomeIcon
                icon={activeSlide.icon}
                className="text-3xl text-[var(--primary-color)]"
              />
              <span className="flex flex-col gap-1">
                <label className="card-heading text-[var(--tertiary-color)]">
                  {activeSlide.title}
                </label>
                <label className="body-text-small text-[var(--tertiary-color)]">
                  {activeSlide.description}
                </label>
              </span>
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <button
              type="button"
              className="rounded-lg bg-[var(--secondary-color)] px-3 py-2 text-[var(--tertiary-color)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
              aria-label="Previous strength"
              onClick={onPreviousStrength}
            >
              Previous
            </button>
            <div className="flex gap-2" aria-label="Choose a strength">
              {strengths.map((strength, index) => (
                <button
                  key={strength.image}
                  type="button"
                  className={`h-3 w-3 rounded-full ${
                    index === activeStrength
                      ? 'bg-[var(--primary-color)]'
                      : 'bg-gray-300'
                  } transition-transform duration-200 hover:scale-110 focus-visible:scale-110`}
                  aria-label={`Show ${strength.title}`}
                  aria-current={index === activeStrength ? 'true' : undefined}
                  onClick={() => onSelectStrength(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="rounded-lg bg-[var(--secondary-color)] px-3 py-2 text-[var(--tertiary-color)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
              aria-label="Next strength"
              onClick={onNextStrength}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger my-5 mx-5 lg:mx-10 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-2 ">
        <div className="flex flex-col gap-2">
          <SharedSectionHeaderViewComponent
            sectionTitle="Guided by Purpose. Driven by Progress."
            smallSectionTitle="Our Mission, vision & values"
          ></SharedSectionHeaderViewComponent>
          <p className="hidden lg:block body-text">
            Our mission, vision and values reflect who we are, what we stand
            for, and the long-term impact we strive to create for our customers,
            our people and the industries we serve.
          </p>
        </div>
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-2 mt-5 lg:mt-0">
          <div className="flex flex-col gap-2 bg-[var(--muted-secondary-color)] p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <span className="w-full flex md:flex-col items-center md:items-start gap-1">
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-[var(--primary-color)] text-4xl"
              ></FontAwesomeIcon>
              <label className="card-heading w-full flex justify-between md:block">
                Our Mission
                <span className="block md:hidden">
                  <FontAwesomeIcon
                    icon={missionVisible ? faAngleUp : faAngleDown}
                    className="text-[var(--primary-color)]"
                    onClick={toggleMission}
                  />
                </span>
              </label>
            </span>
            <p
              className={`md:block ${missionVisible ? 'block' : 'hidden'} body-text-small`}
            >
              To deliver high-quality manufacturing solutions that help our
              customers build better products and a stronger tomorrow.
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-[var(--muted-secondary-color)] p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <span className="w-full flex md:flex-col gap-1 items-center md:items-start">
              <FontAwesomeIcon
                icon={faEye}
                className="text-[var(--primary-color)] text-4xl"
              ></FontAwesomeIcon>
              <label className="card-heading w-full flex justify-between md:block">
                Our Vision
                <span className="block md:hidden">
                  <FontAwesomeIcon
                    icon={visionVisible ? faAngleUp : faAngleDown}
                    className="text-[var(--primary-color)]"
                    onClick={toggleVision}
                  />
                </span>
              </label>
            </span>
            <p
              className={`md:block ${visionVisible ? 'block' : 'hidden'} body-text-small`}
            >
              To be a global leader in precision manufacturing, recognized for
              innovation, reliability and lasting partnerships.
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-[var(--muted-secondary-color)] p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <span className="w-full flex md:flex-col gap-1 items-center md:items-start">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-[var(--primary-color)] text-4xl"
              ></FontAwesomeIcon>
              <label className="card-heading w-full flex justify-between md:block">
                Our Values
                <span className="block md:hidden">
                  <FontAwesomeIcon
                    icon={valuesVisible ? faAngleUp : faAngleDown}
                    className="text-[var(--primary-color)]"
                    onClick={toggleValues}
                  />
                </span>
              </label>
            </span>
            <p
              className={`md:block ${valuesVisible ? 'block' : 'hidden'} body-text-small`}
            >
              <ul className="list-disc ml-2">
                <li>Integrity</li>
                <li>Customer Focus</li>
                <li>Excellence</li>
                <li>Continuous Improvement</li>
                <li>People & Partnership</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger py-5 px-5 lg:px-10 bg-[color-mix(in_srgb,var(--primary-color)_10%,transparent)] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
        <div className="flex flex-col items-start justify-around">
          <SharedSectionHeaderViewComponent
            sectionTitle="Key Milestones in Our Growth"
            smallSectionTitle="Our Journey"
          ></SharedSectionHeaderViewComponent>
          <div className="mt-5 w-full flex flex-col justify-center md:justify-between md:flex-row items-start w-full overflow-x-auto pb-4">
            <span className="flex md:flex-col gap-1 items-center flex-1">
              <span className="bg-[var(--primary-color)] w-5 h-5 rounded-full z-10 shrink-0"></span>
              <label className="card-heading mt-2">2017</label>
              <label className="body-small-text text-center px-1">
                Founded SDforgmac
              </label>
            </span>

            <div className="h-[30px] md:h-[2px] bg-[var(--primary-color)] w-[2px] md:min-w-[30px] ml-2.5 md:mt-2.5"></div>

            <span className="flex md:flex-col gap-1 items-center flex-1 min-w-[120px]">
              <span className="bg-[var(--primary-color)] w-5 h-5 rounded-full z-10 shrink-0"></span>
              <label className="card-heading mt-2">2019</label>
              <label className="body-small-text text-center px-1">
                Introduced Cold Extrusion
              </label>
            </span>

            <div className="h-[30px] md:h-[2px] bg-[var(--primary-color)] w-[2px] md:min-w-[30px] ml-2.5 md:mt-2.5"></div>

            <span className="flex md:flex-col gap-1 items-center flex-1">
              <span className="bg-[var(--primary-color)] w-5 h-5 rounded-full z-10 shrink-0"></span>
              <label className="card-heading mt-2">2020</label>
              <label className="body-small-text text-center px-1">
                Expanded production
              </label>
            </span>

            <div className="h-[30px] md:h-[2px] bg-[var(--primary-color)] w-[2px] md:min-w-[30px] ml-2.5 md:mt-2.5"></div>

            <span className="flex md:flex-col gap-1 items-center flex-1">
              <span className="bg-[var(--primary-color)] w-5 h-5 rounded-full z-10 shrink-0"></span>
              <label className="card-heading mt-2">2025</label>
              <label className="body-small-text text-center px-1">
                Expanded Manufacturing Capabilities
              </label>
            </span>

            <div className="h-[30px] md:h-[2px] bg-[var(--primary-color)] w-[2px] md:min-w-[30px] ml-2.5 md:mt-2.5"></div>

            <span className="flex md:flex-col gap-1 items-center flex-1 min-w-[120px]">
              <span className="bg-[var(--primary-color)] w-5 h-5 rounded-full z-10 shrink-0"></span>
              <label className="card-heading mt-2">Today</label>
              <label className="body-small-text text-center px-1">
                Continuing for a better tomorrow
              </label>
            </span>

            <div className="h-[30px] md:h-[2px] bg-[var(--primary-color)] w-[2px] md:min-w-[30px] ml-2.5 md:mt-2.5"></div>
          </div>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}MainPage/SDforgmac.png`}
          className="h-50 w-full object-cover lg:h-full rounded-lg"
        />
      </section>
    </main>
  );
}
