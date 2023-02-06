import Navbar from './Navbar';
import Footer from './Footer';
function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
