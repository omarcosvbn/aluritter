import { BrowserRouter as Router, Route, Routes } from "react-router";

import { Home } from "./Home";
import { NotFound } from "./NotFound";

export default function Pages() {
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
}
