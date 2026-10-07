import type { RefObject } from 'react';
import {
  faArrowRight,
  faBoltLightning,
  faClock,
  faEnvelope,
  faGear,
  faHandshake,
  faLocationPin,
  faPhone,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SharedSectionHeaderViewComponent from '../../shared/components/shared-section-header.component.view';

type ContactUsViewComponentProps = {
  mainRef: RefObject<HTMLElement | null>;
};

export default function ContactUsViewComponent({
  mainRef,
}: ContactUsViewComponentProps) {
  return (
    <main ref={mainRef} className="w-full flex flex-col mt-15">
      <section
        className="scroll-reveal w-full md:grid md:grid-cols-2 bg-center bg-cover"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}ContactUs/hero.png")`,
        }}
      >
        <div className="reveal-stagger w-full flex flex-col bg-[color-mix(in_srgb,var(--secondary-color)_60%,transparent)] md:bg-[transparent] p-5 md:p-10">
          <label className="eyebrow-text uppercase text-[var(--tertiary-color)]">
            Contact Us
          </label>
          <label className="hero-title text-[var(--tertiary-color)]">
            Let's Build Precision
          </label>
          <label className="hero-title text-[var(--primary-color)]">
            Together
          </label>
          <p className="body-text text-[var(--tertiary-color)]">
            From custom forged components to high-precision CNC machining, our
            team is here to support your porject from concept to completion.
          </p>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger py-5 px-5 lg:px-10 bg-[var(--secondary-color)] w-full grid grid-cols-2 md:grid-cols-4">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faBoltLightning}
            className="text-3xl text-[var(--primary-color)]"
          ></FontAwesomeIcon>
          <span className="flex flex-col gap-2 text-[var(--tertiary-color)]">
            <label className="card-heading">Quick Response</label>
            <label className="body-text-small">
              We reply within 48 business hours
            </label>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faGear}
            className="text-3xl text-[var(--primary-color)]"
          ></FontAwesomeIcon>
          <span className="flex flex-col gap-2 text-[var(--tertiary-color)]">
            <label className="card-heading">Precision Expertise</label>
            <label className="body-text-small">
              Trusted manufacturing partner
            </label>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-3xl text-[var(--primary-color)]"
          ></FontAwesomeIcon>
          <span className="flex flex-col gap-2 text-[var(--tertiary-color)]">
            <label className="card-heading">Dedicated Support</label>
            <label className="body-text-small">From enquiry to delivery</label>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faHandshake}
            className="text-3xl text-[var(--primary-color)]"
          ></FontAwesomeIcon>
          <span className="flex flex-col gap-2 text-[var(--tertiary-color)]">
            <label className="card-heading">Long-Term Partnership</label>
            <label className="body-text-small">
              Built on quality and trust
            </label>
          </span>
        </div>
      </section>

      <section className="scroll-reveal reveal-stagger my-5 mx-5 lg:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="p-5 bg-[var(--muted-secondary-color)] flex flex-col gap-5 rounded-lg justify-center transition-transform duration-300 hover:-translate-y-1">
          <span className="flex flex-col gap-2">
            <label className="section-heading-small">Send Us an Enquiry</label>
            <p className="body-text-small">
              Tell us about your project. Our team will get back to you with the
              best solution for your manufacturing needs.
            </p>
          </span>
          <span className="grid grid-cols-2 gap-3">
            <span className="flex flex-col gap-1">
              <label className="body-text-small font-bold">Full Name</label>
              <input
                placeholder="John Smith"
                className="bg-[var(--tertiary-color)] text-[var(--secondary-color)] border border-[var(--secondary-color)] py-1 px-2 rounded-lg body-text-small transition-colors duration-200 focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
              ></input>
            </span>
            <span className="flex flex-col gap-1">
              <label className="body-text-small font-bold">Company Name</label>
              <input
                placeholder="Your Company Ltd."
                className="bg-[var(--tertiary-color)] text-[var(--secondary-color)] border border-[var(--secondary-color)] py-1 px-2 rounded-lg body-text-small transition-colors duration-200 focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
              ></input>
            </span>
          </span>
          <span className="grid grid-cols-2 gap-3">
            <span className="flex flex-col gap-1">
              <label className="body-text-small font-bold">Email Address</label>
              <input
                placeholder="you@company.com"
                className="bg-[var(--tertiary-color)] text-[var(--secondary-color)] border border-[var(--secondary-color)] py-1 px-2 rounded-lg body-text-small transition-colors duration-200 focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
              ></input>
            </span>
            <span className="flex flex-col gap-1">
              <label className="body-text-small font-bold">Phone Number</label>
              <input
                placeholder="+(91)1234567890"
                className="bg-[var(--tertiary-color)] text-[var(--secondary-color)] border border-[var(--secondary-color)] py-1 px-2 rounded-lg body-text-small transition-colors duration-200 focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
              ></input>
            </span>
          </span>
          <span className="flex flex-col gap-1">
            <label className="body-text-small font-bold">
              Project Requirement
            </label>
            <textarea
              placeholder="Please describe your part, material, quantity, timeline or any specific requirements..."
              className="bg-[var(--tertiary-color)] text-[var(--secondary-color)] border border-[var(--secondary-color)] py-1 px-2 rounded-lg body-text-small transition-colors duration-200 focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
            ></textarea>
          </span>
          <button className="bg-[var(--primary-color)] text-[var(--tertiary-color)] w-full py-2 rounded-lg button-text flex gap-2 items-center justify-center transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5">
            Submit Enquiry
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </div>
        <div className="p-5 bg-[var(--muted-secondary-color)] flex flex-col gap-5 rounded-lg transition-transform duration-300 hover:-translate-y-1">
          <div className="flex flex-col gap-2">
            <label className="section-heading-small">
              Connect With Our Team
            </label>
            <p className="body-text-small">
              Reach out through your preferred channel. We're here to help with
              quotes, technical questions and project support.
            </p>
          </div>

          <div className="flex gap-5 items-center transition-transform duration-300 hover:-translate-y-0.5">
            <span className="p-3 rounded-xl bg-[var(--secondary-color)]">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[var(--primary-color)] text-3xl"
              ></FontAwesomeIcon>
            </span>
            <span className="flex flex-col">
              <label className="card-heading">Phone</label>
              <label className="card-heading">+91 9818898696</label>
              <label className="body-text-small">
                Mon - Fri, 9:00 AM - 7:00 PM (IST)
              </label>
            </span>
          </div>

          <div className="flex gap-5 items-center transition-transform duration-300 hover:-translate-y-0.5">
            <span className="p-3 rounded-xl bg-[var(--secondary-color)]">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[var(--primary-color)] text-3xl"
              ></FontAwesomeIcon>
            </span>
            <span className="flex flex-col">
              <label className="card-heading">Email</label>
              <label className="card-heading">info@sdforgmac.com</label>
              <label className="body-text-small">
                We typicall respond within 48 business hours
              </label>
            </span>
          </div>

          <div className="flex gap-5 items-center transition-transform duration-300 hover:-translate-y-0.5">
            <span className="p-3 rounded-xl bg-[var(--secondary-color)]">
              <FontAwesomeIcon
                icon={faClock}
                className="text-[var(--primary-color)] text-3xl"
              ></FontAwesomeIcon>
            </span>
            <span className="flex flex-col">
              <label className="card-heading">Business Hours</label>
              <label className="body-text-small">Monday-Friday</label>
              <label className="body-text-small">9:00 AM - 7:00 PM (IST)</label>
            </span>
          </div>

          <div className="flex gap-5 items-center transition-transform duration-300 hover:-translate-y-0.5">
            <span className="p-3 rounded-xl bg-[var(--secondary-color)]">
              <FontAwesomeIcon
                icon={faLocationPin}
                className="text-[var(--primary-color)] text-3xl"
              ></FontAwesomeIcon>
            </span>
            <span className="flex flex-col">
              <label className="card-heading">Our Location</label>
              <label className="body-text-small">
                Pocket A, Sanjay Gandhi Memorial Nagar, Sector 48
              </label>
              <label className="body-text-small">
                Faridabad, Haryana 121001
              </label>
            </span>
          </div>
        </div>
      </section>

      <section className="scroll-reveal my-5 mx-5 lg:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <SharedSectionHeaderViewComponent
            sectionTitle="Visit Us"
            smallSectionTitle="SDforgmac"
          ></SharedSectionHeaderViewComponent>
          <p className="body-text-small">
            We Welcome customers partners and industry colleagues to visit our
            facility. See our capabilities, discuss your project in person, and
            explor how SDforgmc can support your manufacturing needs.
          </p>
          <span className="flex gap-2">
            <span className="flex gap-1">
              <FontAwesomeIcon
                icon={faLocationPin}
                className="text-3xl text-[var(--primary-color)]"
              ></FontAwesomeIcon>
              <label>
                C72R+337, Pocket A, Sanjay Gandhi Memorial Nagar, Sector 48,
                Faridabad, Haryana 121001
              </label>
            </span>
          </span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.6321856586087!2d77.28760797601025!3d28.400175294593378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdf0008314a5d%3A0x35288ce2ed3dceca!2sS.D.%20Forgmac!5e0!3m2!1sen!2sin!4v1791369658463!5m2!1sen!2sin"
          className="block h-50 w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
    </main>
  );
}
