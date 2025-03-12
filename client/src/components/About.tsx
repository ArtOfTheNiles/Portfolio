import '@/styles/about.css'

//TODO: add an aside for an image
export const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title about">About Me:</h2>
            <p>Hello there! I'm <u>Niles Bontrager</u>, an <em className='brown-eye'><a href="https://www.artstation.com/nilesbontrager">experienced artist</a></em> and <em className='blue-eye'><a href="https://www.github.com/artoftheniles">now-programmer</a></em> with <a href="https://www.linkedin.com/in/niles-bontrager-61906117">over 15 years of experience</a> working in creative careers for everyone from international clients to local outfits. I've got a penchant for beautiful and concise affordances meant for any kind of audience, from senior citizens to professional gamers, and I look forward to continuing to make interactivity flourish.</p>
            <p>On the personal side, I've been married to an even more <a href="https://mxfitforge.artstation.com/">creative spouse</a> for 12 years now, who has created the wonderful icon of my face for us to enjoy! Together we house four black cats, and enjoy all kinds of music, animation, food, travel and games. Also, if it wasn't obvious yet, I've got <em><a href="https://en.wikipedia.org/wiki/Heterochromia">heterochromia</a></em>, giving me the silly title of the site.</p>
            <p>If you've got a need for hands that can get dirty in the pipeline and a mind that's always searching for the next solution; then let this production-unicorn help you bring <em className='brown-eye'>beauty to your interactivity</em> and <em className='blue-eye'>interactivity to your beauty!</em></p>
        </section>
    )
}