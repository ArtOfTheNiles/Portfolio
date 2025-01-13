import { Link } from "react-router-dom"

export interface NavProps {
    to: string;
    children: React.ReactNode;
}

export const NavLink: React.FC<NavProps> = ({ to, children }) => {
    return (
        <Link to={to}>
            {children}
        </Link>
    )
}

export default NavLink