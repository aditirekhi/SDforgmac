import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCalendarDays,
  faCheckCircle,
  faGear,
  faGears,
  faMagnifyingGlass,
  faMedal,
  faMicrochip,
  faPenRuler,
  faScrewdriverWrench,
  faTruckFast,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import SharedSectionHeaderViewComponent from '../../shared/components/shared-section-header.component.view';

const MainPageView = () => {
  const mainRef = useRef<HTMLElement | null>(null);

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

  return (
    <>
      <main ref={mainRef} className="w-full flex flex-col">
        <section
          className="scroll-reveal reveal-stagger w-full md:grid md:grid-cols-2 bg-center bg-cover"
          style={{
            backgroundImage: `url("${import.meta.env.BASE_URL}MainPage/hero.png")`,
          }}
        >
          <div className="w-full flex flex-col bg-[color-mix(in_srgb,var(--secondary-color)_60%,transparent)] md:bg-[transparent] p-5 md:p-10">
            <label className="uppercase eyebrow-text text-[var(--tertiary-color)]">
              Precision Today. Stronger Tomorrow.
            </label>
            <label className="hero-title text-[var(--tertiary-color)]">
              Forged for a
            </label>
            <label className="hero-title text-[var(--primary-color)]">
              Stronger Tomorrow
            </label>
            <p className="hero-description text-[var(--tertiary-color)]">
              High-quality forged components, precision machining and cold
              extrusion solution for demanding industries nationwide.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <NavLink
                to="/cncMachining"
                className="button-text bg-[var(--primary-color)] text-[var(--tertiary-color)] rounded-lg px-3 py-4 transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
              >
                CNC Machining Services
              </NavLink>
              <NavLink
                to="/coldExtrusion"
                className="button-text border border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg px-3 py-4 transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
              >
                Cold Extrusion Services
              </NavLink>
            </div>
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

        <section className="scroll-reveal mx-5 my-5 md:mx-10 ">
          <div className="md:flex md:flex-col lg:flex-row justify-between items-start lg:items-center">
            <SharedSectionHeaderViewComponent
              smallSectionTitle="Our Expertise"
              sectionTitle="Manufacturing Capabilities"
            />
            <p className="hidden md:block w-100 body-text-small text-[var(--secondary-color)]">
              From forging to precision machining, we deliver high-performance
              components with unmatched quality and reliability.
            </p>
          </div>

          <div className="reveal-stagger mt-5 flex flex-col lg:grid lg:grid-cols-2 gap-3">
            <div className="grid grid-cols-[2fr_4fr] lg:flex lg:flex-col overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative min-h-0 overflow-hidden lg:h-50 lg:object-cover">
                <img
                  src={`${import.meta.env.BASE_URL}MainPage/CNCMachining.png`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 bg-[var(--secondary-color)] text-[var(--tertiary-color)] p-2 md:px-5 md:py-2 lg:p-2">
                <label className="card-heading block">CNC Machining</label>
                <p className="hidden md:block body-text-small mt-2">
                  Precision machining for complex geometrics and tight
                  tolerances.
                </p>
                <NavLink
                  to="/cncMachining"
                  className="label-text flex gap-1 items-center text-[var(--primary-color)]"
                >
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </NavLink>
              </div>
            </div>

            <div className="grid grid-cols-[2fr_4fr] lg:flex lg:flex-col overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative min-h-0 overflow-hidden lg:h-50 lg:object-cover">
                <img
                  src={`${import.meta.env.BASE_URL}MainPage/ColdExtrusion.png`}
                  className="absolute inset-0 h-full w-full object-bottom-right object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 bg-[var(--secondary-color)] text-[var(--tertiary-color)] p-2 md:px-5 md:py-2 lg:p-2">
                <label className="card-heading block">
                  Cold Extrusion Services
                </label>
                <p className="hidden md:block body-text-small mt-2">
                  Cost-effective, high-volume production with superior material
                  properties.
                </p>
                <NavLink
                  to="/coldExtrusion"
                  className="label-text flex gap-1 items-center text-[var(--primary-color)]"
                >
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-5 m-5">
          <div className="flex flex-col gap-5">
            <SharedSectionHeaderViewComponent
              sectionTitle="Engineered for Excellence"
              smallSectionTitle="Why SDforgmac"
            ></SharedSectionHeaderViewComponent>
            <p className="hidden lg:block body-text-small w-100">
              We combine advanced manufacturing, technical expertise and a
              relentless focus on quality to deliver components that perform in
              the world's most demanding environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex gap-2 items-center md:items-start">
              <FontAwesomeIcon
                icon={faMedal}
                className="text-3xl md:text-4xl text-[var(--primary-color)] border border-[var(--primary-color)] rounded-full p-2"
              ></FontAwesomeIcon>
              <span>
                <label className="card-heading">Proven Expertise</label>
                <p className="hidden md:block body-text-small">
                  Decade of experience in forging and precision machining.
                </p>
              </span>
            </div>

            <div className="flex gap-2 items-center md:items-start">
              <FontAwesomeIcon
                icon={faMicrochip}
                className="text-3xl md:text-4xl text-[var(--primary-color)] border border-[var(--primary-color)] rounded-full p-2"
              ></FontAwesomeIcon>
              <span>
                <label className="card-heading">Advanced Technology</label>
                <p className="hidden md:block body-text-small">
                  Modern facilities and continuous innovation.
                </p>
              </span>
            </div>

            <div className="flex gap-2 items-center md:items-start">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-3xl md:text-4xl text-[var(--primary-color)] border border-[var(--primary-color)] rounded-full p-2"
              ></FontAwesomeIcon>
              <span>
                <label className="card-heading">Customer Focus</label>
                <p className="hidden md:block body-text-small">
                  Long-term partnerships built on trust and performance.
                </p>
              </span>
            </div>

            <div className="flex gap-2 items-center md:items-start">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="text-3xl md:text-4xl text-[var(--primary-color)] border border-[var(--primary-color)] rounded-full p-2"
              ></FontAwesomeIcon>
              <span>
                <label className="card-heading">Reliable Supply Chain</label>
                <p className="hidden md:block body-text-small">
                  Consistent quality and on-time delivery.
                </p>
              </span>
            </div>
          </div>
        </section>

        <section className="scroll-reveal reveal-stagger py-5 flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-5 bg-[color-mix(in_srgb,var(--primary-color)_5%,transparent)]">
          <div className="h-75 overflow-hidden rounded-lg">
            <img
              src="MainPage/Quality.png"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              alt="Quality inspection"
            />
          </div>
          <div className="flex flex-col gap-3 p-5">
            <SharedSectionHeaderViewComponent
              sectionTitle="Inspection at Every Stage"
              smallSectionTitle="Quality You Can Rely On"
            />
            <p className="hidden lg:block body-text">
              Quality is built into every step of our process. From raw material
              inspection to final dimensional checks, we ensure every component
              meets the highest industry standards.
            </p>
            <ul className="hidden md:block body-text">
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[var(--primary-color)]"
                ></FontAwesomeIcon>
                <label className="ml-3">In-process and final inspection</label>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[var(--primary-color)]"
                ></FontAwesomeIcon>
                <label className="ml-3">
                  Advanced metrology and testing equipment
                </label>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[var(--primary-color)]"
                ></FontAwesomeIcon>
                <label className="ml-3">Full material traceability</label>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[var(--primary-color)]"
                ></FontAwesomeIcon>
                <label className="ml-3">
                  Compliance with international standards (ISO,IATF, etc.)
                </label>
              </li>
            </ul>
          </div>
        </section>

        <section className="scroll-reveal reveal-stagger my-5 mx-5 lg:mx-10">
          <div className="flex justify-between items-center">
            <SharedSectionHeaderViewComponent
              sectionTitle="Powering Progress Across Industries"
              smallSectionTitle="Industries We Serve"
            />
            <p className="body-text-small w-100">
              Our components are trusted in a wide range of industries where
              performance, reliability and safety are critical.
            </p>
          </div>

          <div className="reveal-stagger grid grid-flow-col auto-cols-[minmax(150px,_1fr)] overflow-x-scroll md:grid-cols-5 gap-3 lg:gap-5 mt-5">
            <span className="flex flex-col bg-[var(--secondary-color)] text-[var(--tertiary-color)] rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <img
                src={`${import.meta.env.BASE_URL}MainPage/Automobile.png`}
                className="overflow-hidden rounded-lg"
              />
              <label className="card-heading mx-3 my-2 md:my-1">
                Automobile
              </label>
              <p className="hidden md:block body-text-small mx-3 mb-1">
                Precision parts for automotive performance.
              </p>
            </span>

            <span className="flex flex-col bg-[var(--secondary-color)] text-[var(--tertiary-color)] rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <img
                src={`${import.meta.env.BASE_URL}MainPage/Construction.png`}
                className="overflow-hidden rounded-lg"
              />
              <label className="card-heading mx-3 my-2 lg:my-1">
                Construction
              </label>
              <p className="hidden md:block body-text-small mx-3 mb-1">
                Durable parts for heavy construction.
              </p>
            </span>

            <span className="flex flex-col bg-[var(--secondary-color)] text-[var(--tertiary-color)] rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <img
                src={`${import.meta.env.BASE_URL}MainPage/Medical.png`}
                className="overflow-hidden rounded-lg"
              />
              <label className="card-heading mx-3 my-2 lg:my-1">Medical</label>
              <p className="hidden md:block body-text-small mx-3 mb-1">
                Precision parts for medical equipment.
              </p>
            </span>

            <span className="flex flex-col bg-[var(--secondary-color)] text-[var(--tertiary-color)] rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <img
                src={`${import.meta.env.BASE_URL}MainPage/Agriculture.png`}
                className="overflow-hidden rounded-lg"
              />
              <label className="card-heading mx-3 my-2 lg:my-1">
                Agriculture
              </label>
              <p className="hidden md:block body-text-small mx-3 mb-1">
                Reliable parts for agricultural machinery.
              </p>
            </span>

            <span className="flex flex-col bg-[var(--secondary-color)] text-[var(--tertiary-color)] rounded-lg transition-transform duration-300 hover:-translate-y-1">
              <img
                src={`${import.meta.env.BASE_URL}MainPage/Electrical.png`}
                className="overflow-hidden rounded-lg"
              />
              <label className="card-heading mx-3 my-2 md:my-3 lg:my-1">
                Electrical
              </label>
              <p className="hidden md:block body-text-small mx-3 mb-1">
                Precision parts for electrical systems.
              </p>
            </span>
          </div>
        </section>

        <section className="scroll-reveal my-5 flex flex-col px-5 my-5 w-full">
          <span className="mx-10">
            <SharedSectionHeaderViewComponent
              sectionTitle="From Design to Delivery"
              smallSectionTitle="Our Process"
            ></SharedSectionHeaderViewComponent>
          </span>
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 mt-10 gap-6 w-full">
            <div className="md:col-span-2 lg:col-span-1 relative rounded-xl bg-[var(--secondary-color)] text-(var(--tertiary-color)) p-2">
              <div className="absolute top-4 md:-top-7 md:left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--primary-color)] bg-[var(--secondary-color)] text-[var(--tertiary-color)] body-text">
                01
              </div>
              <div className="flex gap-5 pl-10 md:flex-col">
                <FontAwesomeIcon
                  icon={faPenRuler}
                  className="my-5 text-3xl text-[var(--metallic-color)]"
                ></FontAwesomeIcon>
                <div className="flex flex-col gap-1">
                  <label className="card-heading text-[var(--tertiary-color)]">
                    Design & Material
                  </label>
                  <p className="body-text-small text-[var(--tertiary-color)]">
                    Collaborate on requirements specifications and choose right
                    material.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-1 relative rounded-xl bg-[var(--secondary-color)] text-(var(--tertiary-color)) py-2 px-3">
              <div className="absolute top-6 md:-top-7 md:left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--primary-color)] bg-[var(--secondary-color)] text-[var(--tertiary-color)] body-text">
                02
              </div>
              <div className="flex gap-5 pl-10 md:flex-col">
                <FontAwesomeIcon
                  icon={faScrewdriverWrench}
                  className="my-5 text-3xl text-[var(--metallic-color)]"
                ></FontAwesomeIcon>
                <div className="flex flex-col gap-1">
                  <label className="card-heading text-[var(--tertiary-color)]">
                    Process Control Standard (PCS)
                  </label>
                  <p className="body-text-small text-[var(--tertiary-color)]">
                    Define process parameters, tooling strategy, and production
                    planning.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-1 relative rounded-xl bg-[var(--secondary-color)] text-(var(--tertiary-color)) py-2 px-3">
              <div className="absolute top-6 md:-top-7 md:left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--primary-color)] bg-[var(--secondary-color)] text-[var(--tertiary-color)] body-text">
                03
              </div>
              <div className="flex gap-5 pl-10 md:flex-col">
                <FontAwesomeIcon
                  icon={faGears}
                  className="my-5 text-3xl text-[var(--metallic-color)]"
                ></FontAwesomeIcon>
                <div className="flex flex-col gap-1">
                  <label className="card-heading text-[var(--tertiary-color)]">
                    Manufacturing
                  </label>
                  <p className="body-text-small text-[var(--tertiary-color)]">
                    Precision manufacturing using advanced processes, equipment,
                    and robust infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto relative rounded-xl bg-[var(--secondary-color)] text-(var(--tertiary-color)) py-2 px-3">
              <div className="absolute top-6 md:-top-7 md:left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--primary-color)] bg-[var(--secondary-color)] text-[var(--tertiary-color)] body-text">
                04
              </div>
              <div className="flex gap-5 pl-10 md:flex-col">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="my-5 text-3xl text-[var(--metallic-color)]"
                ></FontAwesomeIcon>
                <div className="flex flex-col gap-1">
                  <label className="card-heading text-[var(--tertiary-color)]">
                    Quality Inspection
                  </label>
                  <p className="body-text-small text-[var(--tertiary-color)]">
                    Rigorous inspection ensuring consistent quality, accuracy,
                    reliability, and compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 md:col-start-4 lg:col-span-1 lg:col-start-auto relative rounded-xl bg-[var(--secondary-color)] text-(var(--tertiary-color)) py-2 px-3">
              <div className="absolute top-6 md:-top-7 md:left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--primary-color)] bg-[var(--secondary-color)] text-[var(--tertiary-color)] body-text">
                05
              </div>
              <div className="flex gap-5 pl-10 md:flex-col">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  className="my-5 text-3xl text-[var(--metallic-color)]"
                ></FontAwesomeIcon>
                <div className="flex flex-col gap-1">
                  <label className="card-heading text-[var(--tertiary-color)]">
                    Delivery
                  </label>
                  <p className="body-text-small text-[var(--tertiary-color)]">
                    Timely delivery with complete traceability, documentation,
                    and dependable logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-reveal reveal-stagger mx-5 md:mx-0 my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src={`${import.meta.env.BASE_URL}MainPage/SDforgmac.png`}
            className="w-full h-60 object-cover object-center rounded-lg self-center"
          />
          <div className="flex flex-col gap-2 md:p-3">
            <SharedSectionHeaderViewComponent
              sectionTitle="A Commitment to Quality and Long-Term Partnerships"
              smallSectionTitle="About SDforgmac"
            ></SharedSectionHeaderViewComponent>
            <p className="hidden md:block body-text">
              We are trusted manufacturing partner, delivering high-quality
              forged components and cold extrusion solutions that power programs
              across industries nationwide.
            </p>
            <p className="md:hidden body-text">
              Delivering precision, consistent quality, and lasting value
              through trusted manufacturing partnerships.
            </p>
            <NavLink
              to="/aboutUs"
              className="w-60 px-5 py-3 flex gap-2 text-[var(--tertiary-color)] bg-[var(--primary-color)] rounded-lg button-text items-center justify-center"
            >
              Learn More About Us
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPageView;
