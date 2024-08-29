import { HashRouter, Route, Routes } from "react-router-dom"
import Gorioshi from "./pages/Gorioshi"
import Index from "./pages/Index"

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gorioshi" element={<Gorioshi />} />
      </Routes>
    </HashRouter>
  )
}

export default App
