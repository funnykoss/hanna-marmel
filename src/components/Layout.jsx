import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header';
import '../App.css';

const Layout = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
