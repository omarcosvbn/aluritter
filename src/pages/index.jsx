import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Home";
import NotFound from "./NotFound";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
