import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Footer } from "./components/Footer"
import { FalseFooter } from "./components/falseFooter"

//Layout of the website
function App() {
  return (
    <>
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <FalseFooter />
      <Footer />
    </>
  )
}

export default App
