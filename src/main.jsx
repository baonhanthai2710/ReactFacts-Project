import { createRoot } from "react-dom/client"

import Navbar from "./components/Navbar"
import Main from "./components/Main"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Navbar />
    <Main />
  </>
)
