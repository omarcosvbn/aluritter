import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Home";
import NotFound from "./NotFound";

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
