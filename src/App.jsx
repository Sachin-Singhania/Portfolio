
import { About, Contact } from "./Components/About"
import { Projects } from "./Components/Projects"
import { Skills } from "./Components/Skills"

export default function App() {
  return (
    <div className="bg-[#101630ff] text-white">
      <About/>
      <Skills/>
      <Projects />
      <Contact/>
    </div>
  )
}

