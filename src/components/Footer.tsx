import React from 'react';
import { CreatorFooter } from './creator-footer';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-white/75">
      <CreatorFooter />
    </footer>
  );
};

export { Footer as SiteFooter };
