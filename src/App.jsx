// import { useState } from 'react'
import "./App.css";
// import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import { ABOUT, BLOG, HOME, PORTOFOLIO, SERVICES, SUPPORT} from "./constant/routesConstant";
import Home from "./pages/Home/Home";
import { PrivateRoutes } from "./routes/privateRoutes";
import UnderDev from "./pages/UnderDev/Underdev";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={HOME} element={<Home />} exact />
            <Route path={ABOUT} element={<UnderDev />} />
            <Route path={SUPPORT} element={<UnderDev />} />
            <Route path={SERVICES} element={<UnderDev />} />
            <Route path={PORTOFOLIO} element={<UnderDev />} />
            <Route path={BLOG} element={<UnderDev />} />
            <Route path={SUPPORT} element={<UnderDev />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
