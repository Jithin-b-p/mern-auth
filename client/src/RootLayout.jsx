import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="max-w-[30rem] mx-auto pt-10">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
