import Footer from "./layout-elements/Footer";
import Topbar from "./layout-elements/Topbar";
function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <div>
        <div>
          <Topbar />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
