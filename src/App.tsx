import { Suspense, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './app.routes';
import NavbarComponent from './app/core/layout/navbar/navbar.component';
import { FooterComponent } from './app/core/layout/footer/footer.component';

function App() {
  const routedContent = useRoutes(routes);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <>
      <main className="m-0 p-0">
        <NavbarComponent showMenu={showMenu} toggleMenu={toggleMenu} />
        <div
          className={`${showMenu ? 'blur-sm' : ''} transition-[filter] duration-200`}
        >
          <Suspense fallback={null}>{routedContent}</Suspense>
        </div>
        <FooterComponent />
      </main>
    </>
  );
}

export default App;
