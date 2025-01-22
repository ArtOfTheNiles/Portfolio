import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Resume } from "./components/Resume"
import { Skills } from "./components/Skills"
import { Footer } from "./components/Footer"
import { FalseHeader } from "./components/FalseHeader"
import { FalseFooter } from "./components/FalseFooter"

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
