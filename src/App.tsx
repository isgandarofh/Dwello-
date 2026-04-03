import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import FirstSection from "./Components/FirstSection/FirstSection";

export default function App() {
  return (
    <Router>
      <Header />
      <FirstSection/>
      <Routes>
        <Route />
      </Routes>
    </Router>
  )
}
