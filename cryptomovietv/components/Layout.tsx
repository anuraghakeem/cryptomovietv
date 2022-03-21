import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

interface Layout{
  children: React.ReactNode
}

const Layout = ({ children }:Layout) => {
  return (
    <>
    <Meta />
    <Navbar/>
      <main>{children}</main>
    <Footer />
    </>
  );
};
export default Layout;
