import { useState } from 'react';
import FooterViewComponent from './footer.component.view';

export function FooterComponent() {
  const [showQuickLinks, setShowQuickLink] = useState(false);
  const [showContactUs, setContactUs] = useState(false);

  const toggleQuickLinks = () => {
    setShowQuickLink((showQuickLinks) => !showQuickLinks);
  };

  const toggleContactUs = () => {
    setContactUs((showContactUs) => !showContactUs);
  };

  return (
    <FooterViewComponent
      showQuickLinks={showQuickLinks}
      toggleQuickLink={toggleQuickLinks}
      showContactUs={showContactUs}
      toggleContactUs={toggleContactUs}
    ></FooterViewComponent>
  );
}
