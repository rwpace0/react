import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Welcome from "./pages/Welcome";
import Search from "./pages/Search";
import ViewClasses from "./pages/ViewClasses";
import Navbar from "./components/navbar";
import About from "./pages/About";
import AnimatedLayout from "./components/Animations";
import "./index.css";

// This wrapper component ensures a new AnimatedLayout is created for each route
const AnimatedPage = ({ component: Component }) => {
  const location = useLocation();

  return (
    <AnimatedLayout key={location.pathname}>
      <Component />
    </AnimatedLayout>
  );
};

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main
          id="main-content"
          className="transition-opacity duration-1000 ease-out"
        >
          <Routes>
            <Route path="/" element={<AnimatedPage component={Welcome} />} />
            <Route
              path="/search"
              element={<AnimatedPage component={Search} />}
            />
            <Route
              path="/export"
              element={<AnimatedPage component={ViewClasses} />}
            />
            <Route path="/about" element={<AnimatedPage component={About} />} />
          </Routes>
        </main>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
