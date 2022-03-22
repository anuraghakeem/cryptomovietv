import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

interface Layout{
  children: React.ReactNode
}

const Layout = ({ children }:Layout) => {
  return (
    <div  className="bg-gradient-to-r from-gradientBlue-1 to-gradientBlue-2">
    <Meta />
    <Navbar/>
      <main>{children}</main>
    <Footer />
    </div>
  );
};
export default Layout;
