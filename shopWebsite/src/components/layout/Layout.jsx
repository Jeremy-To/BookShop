import Navbar from './Navbar';
import Footer from './Footer';
function Layout(props) {
  return (
    <div className='w-full'>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
