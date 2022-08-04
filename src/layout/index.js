import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.css';
import SearchAppBar from '../Search';
import Header from '../Header';
import Footer from '../Footer/Footer';
import Search from '../Search';

const Layout = () => {
  return <>
      <div className='App'>
        
        
          {/* <Header></Header> */}
          {/* <Sidebar /> */}
          {/* <Search /> */}
          
          <div className='page'>
    
          <Outlet />

          </div>
          {/* <Footer /> */}
      </div>
    </>

}

export default Layout;