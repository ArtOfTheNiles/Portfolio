import { ReactNode } from 'react';

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <a href={to} className="nav-link">
      {children}
    </a>
  );
};

export default NavLink;