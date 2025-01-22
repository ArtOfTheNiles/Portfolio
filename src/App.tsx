import { About } from "./components/About.tsx"
import { Contact } from "./components/Contact.tsx"
import { Header } from "./components/Header.tsx"
import { Projects } from "./components/Projects.tsx"
import { Resume } from "./components/Resume.tsx"
import { Skills } from "./components/Skills.tsx"
import { Footer } from "./components/Footer.tsx"
import { FalseHeader } from "./components/FalseHeader.tsx"
import { FalseFooter } from "./components/falseFooter.tsx"


//Layout of the website
function App() {
  return (
    <>
      <Header />
      <FalseHeader />
      <Projects />
      <Skills />
      <Resume />
      <About />
      <Contact />
      <FalseFooter />
      <Footer />
    </>
  )
}

export default App
