import NavLink from "./NavLink"
import HeroIcon from "./HeroIcon"
import "@/styles/header.css"

export const Header = () => {
    return (
        <header>
            <HeroIcon />
            <div className="post-icon">
                <div className="header-bar">
                    <div>
                        <h1 className="brown-eye">Hetero</h1><h1 className="blue-eye">Codea</h1>
                    </div>
                    <nav>
                        <NavLink to="/projects">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/resume">Resumé</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                </div>
                <p className="subtitle">The Art and Code of Niles Bontrager</p>
            </div>
        </header>
    )
}
