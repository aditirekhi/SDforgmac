import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

type FooterViewComponentProps = {
  showQuickLinks: boolean;
  toggleQuickLink: () => void;
  showContactUs: boolean;
  toggleContactUs: () => void;
};

function FooterViewComponent({
  showQuickLinks,
  toggleQuickLink,
  showContactUs,
  toggleContactUs,
}: FooterViewComponentProps) {
  return (
    <footer className="bg-[var(--secondary-color)] p-5 flex flex-col gap-3">
      <section className="flex flex-col md:flex-row gap-10 justify-around">
        <div className="md:w-150 flex flex-col gap-3">
          <img
            src={`${import.meta.env.BASE_URL}Logo/main-logo.png`}
            className="w-50"
          />
          <p className="body-text-small text-[var(--tertiary-color)]">
            Precision manufacturing partner delivering high quality forged
            components, precision manufacturing and cold extrusion solutions for
            a stronger tomorrow.
          </p>
          <span className="flex gap-3 text-[var(--tertiary-color)] text-xl mt-2">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </span>
        </div>

        <div className="flex md:hidden lg:flex flex-col gap-1 text-[var(--tertiary-color)] w-full md:w-50">
          <label className="card-heading w-full flex justify-between">
            Quick Links
            <span className="block md:hidden">
              <FontAwesomeIcon
                icon={showQuickLinks ? faAngleUp : faAngleDown}
                onClick={toggleQuickLink}
              ></FontAwesomeIcon>
            </span>
          </label>
          <div
            className={`lg:flex lg:flex-col lg:gap-3 ${showQuickLinks ? 'flex flex-col gap-1' : 'hidden'}`}
          >
            <NavLink to="/home" className="body-text-small">
              Home
            </NavLink>
            <NavLink to="/cncMachining" className="body-text-small">
              CNC Machining
            </NavLink>
            <NavLink to="/coldExtrusion" className="body-text-small">
              Cold Extrusion
            </NavLink>
            <NavLink to="/aboutUs" className="body-text-small">
              About Us
            </NavLink>
            <NavLink to="/contactUs" className="body-text-small">
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="h-[1px] lg:hidden bg-[var(--tertiary-color)] self-stretch"></div>

        <div className="flex md:hidden lg:flex flex-col gap-3 text-[var(--tertiary-color)] w-full md:w-70">
          <label className="card-heading w-full flex justify-between flex-nowrap">
            Contact Information
            <span className="block md:hidden">
              <FontAwesomeIcon
                icon={showContactUs ? faAngleUp : faAngleDown}
                onClick={toggleContactUs}
              ></FontAwesomeIcon>
            </span>
          </label>
          <div
            className={`lg:flex lg:flex-col lg:gap-3 ${showContactUs ? 'flex flex-col gap-3' : 'hidden'}`}
          >
            <span className="grid grid-cols-[1fr_6fr] gap-2 items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-xl text-[var(--primary-color)]"
              ></FontAwesomeIcon>
              <label>+91 9818878696</label>
            </span>
            <span className="grid grid-cols-[1fr_6fr] gap-2 items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-xl text-[var(--primary-color)]"
              ></FontAwesomeIcon>
              <label>info@sdforgmac.com</label>
            </span>
            <span className="grid grid-cols-[1fr_6fr] gap-2 items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-xl text-[var(--primary-color)]"
              />
              <label>Sector 48, Faridabad, Haryana 121001</label>
            </span>
          </div>
        </div>

        <div className="h-[1px] bg-[var(--tertiary-color)] self-stretch"></div>

        <div className="flex flex-col gap-2 text-[var(--tertiary-color)]">
          <label className="body-text">
            <b>Stay Updated</b>
          </label>
          <label className="body-text-small">
            Subscribe to get the latest updates, insights and industry news.
          </label>
          <span className="flex gap-2">
            <input
              placeholder="Enter You Email"
              className="p-2 border border-[var(--tertiary-color)] rounded-xl"
            ></input>
            <button className="px-2 bg-[var(--primary-color)] rounded-xl">
              Submit
            </button>
          </span>
        </div>
      </section>
      <div className="bg-[var(--tertiary-color)] h-[1px] self-stretch"></div>
      <section className="flex justify-between items-center text-[var(--tertiary-color)] body-text-small">
        <label>&#64;2026 SDforgmac. All rights reserved.</label>
        <span className="flex items-center gap-2">
          <label>Privacy Policy</label>
          <div className="self-stretch w-[1px] bg-[var(--tertiary-color)]"></div>
          <label>Terms Of Service</label>
          <div className="self-stretch w-[1px] bg-[var(--tertiary-color)]"></div>
          <label>Sitemap</label>
        </span>
      </section>
    </footer>
  );
}

export default FooterViewComponent;
