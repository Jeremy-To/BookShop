import Navbar from './Navbar';
import Footer from './Footer';
import classes from './Layout.module.css';
function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
