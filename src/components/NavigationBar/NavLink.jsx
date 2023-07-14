import { useMatch, Link } from 'react-router-dom';

const NavLink = ({ to, className, activeClassName, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={match ? `${className} ${activeClassName}` : className}
      {...props}
    />
  );
};

export default NavLink;
