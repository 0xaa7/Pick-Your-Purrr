
import './Navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import NavLinks from './NavLinks/NavLinks'

const Navbar = () => {
  

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PICK YOUR PURR!
        </motion.span>
        <NavLinks />
      
      </div>
    </div>
  );
};

export default Navbar;
