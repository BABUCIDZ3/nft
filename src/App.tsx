import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./routes/Root";
import Homepage from "./routes/Homepage";
import Marketplace from "./routes/Marketplace";
import GlobalStyles from "./styles/globalStyle";
import Rankings from "./routes/Rankings";
import Connectwallet from "./routes/Connectwallet";
import SignUp from "./routes/SignUp";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/nft" element={<Root />}>
      <Route index element={<Homepage />} />
      <Route path="marketplace" element={<Marketplace />} />
      <Route path="rankings" element={<Rankings />} />
      <Route path="connect a wallet" element={<Connectwallet />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}
