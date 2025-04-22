import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} path="/" />
    </Routes>
  );
};

export default AppRoutes;
