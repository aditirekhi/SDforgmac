import {
  faAngleRight,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

type NavbarViewComponentProps = {
  showMenu: boolean;
  toggleMenu: () => void;
};

function NavbarViewComponent({
  showMenu,
  toggleMenu,
}: NavbarViewComponentProps) {
  return (
    <header className="fixed top-0 right-0 z-50 w-full flex items-center justify-between gap-4 bg-[var(--secondary-color)] py-2 px-5">
      <img
        src={`${import.meta.env.BASE_URL}Logo/main-logo.png`}
        className="w-50 h-auto rounded-md"
      />
      <button
        className="block lg:hidden transition-transform duration-200 hover:scale-110 focus-visible:scale-110"
        onClick={toggleMenu}
        aria-expanded={showMenu}
        aria-label="Toggle navigation menu"
      >
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-[var(--tertiary-color)]"
        ></FontAwesomeIcon>
      </button>
      <nav className="lg:flex lg:flex-wrap lg:gap-10 hidden">
        <NavLink
          to="/home"
          className={({ isActive }) => `button-text py-3
              ${isActive ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--tertiary-color)]'}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/cncMachining"
          className={({ isActive }) => `button-text py-3
              ${isActive ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--tertiary-color)]'}`}
        >
          CNC Machining
        </NavLink>
        <NavLink
          to="/coldExtrusion"
          className={({ isActive }) => `button-text py-3
              ${isActive ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--tertiary-color)]'}`}
        >
          Cold Extrusion
        </NavLink>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) => `button-text py-3
              ${isActive ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--tertiary-color)]'}`}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contactUs"
          className={({ isActive }) => `button-text py-3
              ${isActive ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--tertiary-color)]'}`}
        >
          Contact Us
        </NavLink>
      </nav>
      <nav
        aria-hidden={!showMenu}
        className={`fixed inset-0 z-50 w-full md:left-auto md:w-100 h-full flex flex-col bg-[var(--secondary-color)] md:bg-[var(--tertiary-color)] transition-[transform,visibility] duration-300 ease-out ${showMenu ? 'visible translate-x-0' : 'invisible translate-x-full pointer-events-none'}`}
      >
        <div className="flex justify-between items-center p-5">
          <img
            src={`${import.meta.env.BASE_URL}Logo/main-logo.png`}
            className="w-50 h-auto rounded-md"
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl text-[var(--tertiary-color)] md:text-[var(--secondary-color)]"
            onClick={toggleMenu}
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col items-start gap-5 p-5 text-[var(--tertiary-color)] md:text-[var(--secondary-color)]">
          <NavLink
            to="/home"
            onClick={toggleMenu}
            className={({
              isActive,
            }) => `section-heading-small py-3 flex justify-between items-center w-full
              ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
          >
            {({ isActive }) => (
              <>
                Home
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`ml-2 ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
                />
              </>
            )}
          </NavLink>
          <div className="border-b border-[var(--tertiary-color)] md:border-[var(--secondary-color)] w-full"></div>
          <NavLink
            to="/cncMachining"
            onClick={toggleMenu}
            className={({
              isActive,
            }) => `section-heading-small py-3 flex justify-between items-center w-full
              ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
          >
            {({ isActive }) => (
              <>
                CNC Machining
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`ml-2 ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
                />
              </>
            )}
          </NavLink>
          <div className="border-b border-[var(--tertiary-color)] w-full md:border-[var(--secondary-color)]"></div>
          <NavLink
            to="/coldExtrusion"
            onClick={toggleMenu}
            className={({
              isActive,
            }) => `section-heading-small py-3 flex justify-between items-center w-full
              ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
          >
            {({ isActive }) => (
              <>
                Cold Extrusion
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`ml-2 ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
                />
              </>
            )}
          </NavLink>
          <div className="border-b border-[var(--tertiary-color)] w-full md:border-[var(--secondary-color)]"></div>
          <NavLink
            to="/aboutUs"
            onClick={toggleMenu}
            className={({
              isActive,
            }) => `section-heading-small py-3 flex justify-between items-center w-full
              ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
          >
            {({ isActive }) => (
              <>
                {' '}
                About Us
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`ml-2 ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
                />
              </>
            )}
          </NavLink>
          <div className="border-b border-[var(--tertiary-color)] w-full md:border-[var(--secondary-color)]"></div>
          <NavLink
            to="/contactUs"
            onClick={toggleMenu}
            className={({
              isActive,
            }) => `section-heading-small py-3 flex justify-between items-center w-full
              ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
          >
            {({ isActive }) => (
              <>
                Contact Us
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`ml-2 ${isActive ? 'text-[var(--primary-color)]' : 'text-[var(--tertiary-color)] md:text-[var(--secondary-color)]'}`}
                />
              </>
            )}
          </NavLink>
          <div className="border-b border-[var(--tertiary-color)] w-full md:border-[var(--secondary-color)]"></div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarViewComponent;
