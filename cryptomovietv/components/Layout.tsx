import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

const Layout = ({ children }:any) => {
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
