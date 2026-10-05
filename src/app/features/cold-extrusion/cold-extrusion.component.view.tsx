import type { RefObject } from 'react';
import {
  faArrowsLeftRight,
  faCalendarDays,
  faCheckCircle,
  faCoins,
  faGear,
  faGem,
  faLayerGroup,
  faRulerCombined,
  faRulerHorizontal,
  faShapes,
  faShield,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SharedSectionHeaderViewComponent from '../../shared/components/shared-section-header.component.view';

type ColdExtrusionViewProps = {
  mainRef: RefObject<HTMLElement | null>;
};

export default function ColdExtrusionViewComponent({
  mainRef,
}: ColdExtrusionViewProps) {
  return (
    <main ref={mainRef} className="mt-15 w-full flex flex-col">
      <section
        className="scroll-reveal reveal-stagger grid grid-cols-2 bg-cover bg-center"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}ColdExtrusion/hero.png")`,
        }}
      >
        <div className="w-full flex flex-col bg-[color-mix(in_srgb,var(--secondary-color)_60%,transparent)] md:bg-[transparent] p-5 md:p-10">
          <label className="eyebrow-text text-[var(--tertiary-color)] uppercase">
            Precision Today. Stronger Tomorrow.
          </label>
          <label className="hero-title text-[var(--tertiary-color)]">
            Cold Extrusion
          </label>
          <label className="hero-title text-[var(--primary-color)]">
            Services
          </label>
          <p className="hero-description text-[var(--tertiary-color)]">
            High-strength, near-net-shape components with superior material
            utilization, consistency and cost efficiency.
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

      <section className="scroll-reveal reveal-stagger flex flex-col my-5 mx-5 lg:mx-10">
        <SharedSectionHeaderViewComponent
          sectionTitle="Key Benefits of Cold Extrusion"
          smallSectionTitle="Why Cold Extrusion"
        ></SharedSectionHeaderViewComponent>
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          <div className="flex items-center gap-2 bg-[var(--muted-secondary-color)] p-2 rounded-lg">
            <span className="bg-[var(--secondary-color)] p-2 rounded-full border-2 border-[var(--primary-color)] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faGem}
                className="text-[var(--primary-color)] text-4xl"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label className="card-heading">High Strength</label>
              <label className="body-text-small">
                Improved mechanical properties through grain flew.
              </label>
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[var(--muted-secondary-color)] p-2 rounded-lg">
            <span className="bg-[var(--secondary-color)] p-2 rounded-full border-2 border-[var(--primary-color)] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faGear}
                className="text-[var(--primary-color)] text-4xl"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label className="card-heading">Material Efficiency</label>
              <label className="body-text-small">
                Near net-shape parts with minimal waste.
              </label>
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[var(--muted-secondary-color)] p-2 rounded-lg">
            <span className="bg-[var(--secondary-color)] p-2 rounded-full border-2 border-[var(--primary-color)] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCoins}
                className="text-[var(--primary-color)] text-4xl"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label className="card-heading">Cost Effective</label>
              <label className="body-text-small">
                Reduced machining and secondary operations.
              </label>
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[var(--muted-secondary-color)] p-2 rounded-lg">
            <span className="bg-[var(--secondary-color)] p-2 rounded-full border-2 border-[var(--primary-color)] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faShield}
                className="text-[var(--primary-color)] text-4xl"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label className="card-heading">Consistent Quality</label>
              <label className="body-text-small">
                Excellent dimensional accuracy and repeatability.
              </label>
            </span>
          </div>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger my-5 mx-5 lg:mx-10">
        <div className="grid grid-cols-[2fr_1fr]">
          <SharedSectionHeaderViewComponent
            sectionTitle="Our Cold Extrusion Services"
            smallSectionTitle="Quality and Realiability"
          />
        </div>
        <div className="reveal-stagger grid grid-col-1 lg:grid-cols-3 gap-5 mt-5">
          <span className="flex lg:flex-col items-center lg:items-start gap-2 bg-[var(--secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/forwardExtrusion.png`}
              className="h-25 lg:h-full object-contain rounded-lg"
            />
            <span className="flex flex-col gap-2 text-[var(--tertiary-color)] px-2">
              <label className="card-heading">Forward Extrusion</label>
              <label className="hidden md:block body-text">
                High-volume production of solid and high quality componens with
                excellent material flow and tight tolerances.
              </label>
            </span>
          </span>

          <span className="flex lg:flex-col items-center lg:items-start gap-2 bg-[var(--secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/backwardExtrusion.png`}
              className="h-25 object-contain lg:h-full rounded-lg"
            />
            <span className="flex flex-col gap-2 text-[var(--tertiary-color)] px-2">
              <label className="card-heading">Backward Extrusion</label>
              <label className="hidden md:block body-text">
                Precise hollow components with superior dimensional accuracy and
                uniformity.
              </label>
            </span>
          </span>

          <span className="flex lg:flex-col items-center lg:items-start gap-2 bg-[var(--secondary-color)] rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/combinedAndMultiStageExtrusion.png`}
              className="h-25 object-contain lg:h-full rounded-lg"
            />
            <span className="flex flex-col gap-2 text-[var(--tertiary-color)] px-2">
              <label className="card-heading">
                Combined and Multi-Stage Extrusion
              </label>
              <label className="hidden md:block body-text">
                Complex geometries achieved through multi-stage forming
                processes.
              </label>
            </span>
          </span>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger my-5 mx-5 lg:mx-10">
        <SharedSectionHeaderViewComponent
          sectionTitle="Our Cold-Extruded Products"
          smallSectionTitle="Wide Range of Components"
        ></SharedSectionHeaderViewComponent>
        <div className="reveal-stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
          <span className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/solidPins.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] rounded-sm w-full"
            />
            <label className="card-heading">Solid Pins</label>
          </span>

          <span className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/hollowBushings.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] rounded-sm w-full"
            />
            <label className="card-heading">Hollow Bushings</label>
          </span>

          <span className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/gearBlanks.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] rounded-sm w-full"
            />
            <label className="card-heading">Gear Blanks</label>
          </span>

          <span className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/flangedComponents.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] rounded-sm w-full"
            />
            <label className="card-heading">Flanged Components</label>
          </span>

          <span className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/tubularParts.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] rounded-sm w-full"
            />
            <label className="card-heading">Tubular Parts</label>
          </span>

          <span className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/FastenersRivets.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] rounded-sm w-full"
            />
            <label className="card-heading">Fasteners & Rivets</label>
          </span>

          <span className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/shaftsSpindles.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] rounded-sm w-full"
            />
            <label className="card-heading">Shafts & Spindles</label>
          </span>

          <span className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/couplings.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] rounded-sm w-full"
            />
            <label className="card-heading">Couplings</label>
          </span>

          <span className="flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/structuralComponents.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] rounded-sm w-full"
            />
            <label className="card-heading">Structural Components</label>
          </span>

          <span className="md:col-start-2 md:col-end-3 lg:col-start-5 lg:col-end-5 flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}ColdExtrusion/customParts.png`}
              className="h-35 object-contain bg-[var(--muted-secondary-color)] w-full rounded-sm"
            />
            <label className="card-heading">Custom Profiles</label>
          </span>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger my-5 mx-5 lg:mx-10">
        <div className="grid grid-cols-[2fr_1fr]">
          <SharedSectionHeaderViewComponent
            sectionTitle="Component Range"
            smallSectionTitle="Wide Variety of Components"
          ></SharedSectionHeaderViewComponent>
          <p className="hidden lg:block body-text-small">
            We produce cold-extruded components in a wide range of sizes,
            materials and complexities to meet diverse industry requirements.
          </p>
        </div>
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-5 mt-5">
          <div className="md:col-span-2 lg:col-span-1 flex gap-2 bg-[var(--muted-secondary-color)] p-2 rounded-lg items-center">
            <span className="border-2 border-[var(--primary-color)] p-2 rounded-full">
              <FontAwesomeIcon
                icon={faRulerHorizontal}
                className="text-[var(--primary-color)] text-2xl"
              ></FontAwesomeIcon>
            </span>
            <span className="flex flex-col gap-1">
              <label className="card-heading">Diameter Range</label>
              <label className="body-text-small">2mm - 100mm</label>
            </span>
          </div>

          <div className="md:col-span-2 lg:col-span-1 flex gap-2 bg-[var(--muted-secondary-color)] p-2 rounded-lg items-center">
            <span className="border-2 border-[var(--primary-color)] p-2 rounded-full">
              <FontAwesomeIcon
                icon={faArrowsLeftRight}
                className="text-[var(--primary-color)] text-2xl"
              ></FontAwesomeIcon>
            </span>
            <span className="flex flex-col gap-1">
              <label className="card-heading">Length Range</label>
              <label className="body-text-small">Up to 300mm</label>
            </span>
          </div>

          <div className="md:col-span-2 lg:col-span-1 flex gap-2 bg-[var(--muted-secondary-color)] p-2 rounded-lg items-center">
            <span className="border-2 border-[var(--primary-color)] p-2 rounded-full">
              <FontAwesomeIcon
                icon={faRulerCombined}
                className="text-[var(--primary-color)] text-2xl"
              ></FontAwesomeIcon>
            </span>
            <span className="flex flex-col gap-1">
              <label className="card-heading">Wall Thickness</label>
              <label className="body-text-small">0.5mm - 20mm</label>
            </span>
          </div>

          <div className="md:col-span-2 lg:col-span-1 md:col-start-1 md:col-end-4 flex md:justify-center lg:justify-start gap-2 bg-[var(--muted-secondary-color)] p-2 rounded-lg items-center">
            <span className="border-2 border-[var(--primary-color)] p-2 rounded-full">
              <FontAwesomeIcon
                icon={faShapes}
                className="text-[var(--primary-color)] text-2xl"
              ></FontAwesomeIcon>
            </span>
            <span className="flex flex-col gap-1">
              <label className="card-heading">Complex Geometry</label>
              <label className="body-text-small">Simple to Multi-stage</label>
            </span>
          </div>

          <div className="md:col-span-2 lg:col-span-1 md:col-start-4 md:col-end-7 flex md:justify-center lg:justify-start gap-2 bg-[var(--muted-secondary-color)] p-2 rounded-lg items-center">
            <span className="border-2 border-[var(--primary-color)] p-2 rounded-full">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-[var(--primary-color)] text-2xl"
              ></FontAwesomeIcon>
            </span>
            <span className="flex flex-col gap-1">
              <label className="card-heading">Material Range</label>
              <label className="body-text-small">
                Steel, Aluminum, Brass & more
              </label>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
