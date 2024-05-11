import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/ekartlogo.jpg'
import navProfile from '../../assets/usericon.jpeg'
import { useContext } from 'react'

const Navbar = ({handleLog}) => {
  const handleClick = () =>{
    handleLog(false);
  }
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className="nav-logo" />
      <button onClick={handleClick} style={styles.logoutButton}>Logout</button>
      <h2>Admin portal</h2>
      <img src={navProfile} alt="" />

    </div>
  )
};

const styles = {
  logoutButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#dc3545', // Bootstrap danger color
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    width: '10rem',
    cursor: 'pointer',
    marginLeft: '-200px', 
    height: '40px'
  },
};

export default Navbar
