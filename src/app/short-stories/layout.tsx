import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}
export const metadata = {
  title: 'Stories | elegiacal & rotten',
  description: 'A place where people can poetically express themselves. elegiacal & rotten',
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>{children}</div>
  );
}

export default Layout;
