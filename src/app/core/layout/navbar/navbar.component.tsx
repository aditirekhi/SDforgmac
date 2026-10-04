import NavbarViewComponent from './navbar.component.view';

type NavbarComponentProps = {
  showMenu: boolean;
  toggleMenu: () => void;
};

function NavbarComponent({ showMenu, toggleMenu }: NavbarComponentProps) {
  return <NavbarViewComponent showMenu={showMenu} toggleMenu={toggleMenu} />;
}

export default NavbarComponent;
