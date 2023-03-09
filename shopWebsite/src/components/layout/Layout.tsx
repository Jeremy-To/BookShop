import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout(props : LayoutProps) {
  return (
    <div className='w-full'>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
