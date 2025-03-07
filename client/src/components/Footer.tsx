import "@/styles/footer.css";

const link = {
    gh: "https://github.com/ArtOfTheNiles",
    li: "www.linkedin.com/in/niles-bontrager-61906117",
    as: "https://www.artstation.com/nilesbontrager"
}

export const Footer = () => {
    return (
        <footer className="footer">
        <nav className='footer'>Find me on <a href={link.gh}>Github</a>, <a href={link.li}>LinkedIn</a>, and <a href={link.as}>ArtStation</a></nav>
        <p className='footer'>&copy;Niles Bontrager 2025 | Created with Care and React</p>
        </footer>
    )
}