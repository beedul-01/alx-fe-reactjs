import Header from "./Header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
