// React
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Pages/ScrollToTop";
function App() {
  return (
    <>
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default App;
