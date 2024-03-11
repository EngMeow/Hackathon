import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Validate from "./pages/Validate";
import { Addsub } from "./pages/AddSub";
import { EditSub } from "./pages/EditSub";
import { useContext } from "react";
import Subs from "./pages/Subs";
import { SubsContext } from "./State/SubsContext";
import Navbar from "./components/layout/Navbar";
import { subLoader } from './loader/submissionDetailsLoader';
import { SubDetails } from './pages/SubDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Subs />
      </>
    ),
  },
  {
    path: "/new",
    element: (
      <>
        <Navbar />
        <Addsub />
      </>
    ),
  },
  {
    path: "/:id",
    element: (
      <>
        <Navbar />
        <SubDetails />
      </>
    ),
    loader: subLoader,
  },
  {
    path: "/:id/edit",
    element: (
      <>
        <Navbar />
        <EditSub />
      </>
    ),
    loader: subLoader,
  },
]);

function App() {
  const { userName } = useContext(SubsContext);
  return <>{userName ? <RouterProvider router={router} /> : <Validate />}</>;
}

export default App;
