import type { ReactNode } from 'react';

interface SectionHeaderProps {
  sectionTitle: ReactNode;
  smallSectionTitle: ReactNode;
  smallSectionTitleColor?: string;
  sectionTitleColor?: string;
}

function SharedSectionHeaderViewComponent({
  sectionTitle,
  smallSectionTitle,
  smallSectionTitleColor = 'var(--primary-color)',
  sectionTitleColor = 'var(--secondary-color)',
}: SectionHeaderProps) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <span
          className={`eyebrow-text text-[${smallSectionTitleColor}] uppercase`}
        >
          {smallSectionTitle}
        </span>
        <span className={`section-heading text-[${sectionTitleColor}]`}>
          {sectionTitle}
        </span>
      </div>
    </>
  );
}

export default SharedSectionHeaderViewComponent;
