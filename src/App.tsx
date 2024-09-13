import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import { userLoader } from "./components/userLoader";
import { Dashboard } from "./pages/Dashboard";
import Home from "./pages/Home";
import { Users } from "./pages/Users";
import { ThemeProvider } from "@/constants/shadcn-theme/theme-provider";
import SplashScreenA from "./components/SplashScreens/SplashScreenA";

const router = createBrowserRouter([
  {
    path: "/main-home",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home-in", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "splashscreen", element: <SplashScreenA /> },
      { path: "users", element: <Users />, loader: userLoader },
    ],
  },
  { path: "home-out", element: <Home /> },
  { path: "*", element: <Home />, errorElement: <ErrorPage /> },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
