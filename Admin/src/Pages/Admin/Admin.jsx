// // admin.jsx

// import React, { useState } from 'react';
// import './Admin.css';
// import Sidebar from '../../Components/Sidebar/Sidebar';
// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import AddProduct from '../../Components/AddProduct/AddProduct';
// import ListProduct from '../../Components/ListProduct/ListProduct';
// import Order from '../../Components/Orders/Order';
// import Customer from '../../Components/Customer/Customer';

// const Admin = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // Sample isLoggedIn state
//   const handleLogout = () => {
//     // Implement logout functionality
//     setIsLoggedIn(false);
//     // Redirect to login or home page after logout
//     // return <Navigate to="/login" />; // Uncomment this line if using React Router v6
//   };

//   if (!isLoggedIn) {
//     // Redirect to login page if not logged in
//     return <Navigate to="/login" />; // Uncomment this line if using React Router v6
//   }

//   return (
//     <div className='admin'>
//       <Sidebar/>
//       <button onClick={handleLogout} style={styles.logoutButton}>Logout</button> {/* Logout button */}
//       <Routes>
//         <Route path='/addproduct' element={<AddProduct/>}></Route>
//         <Route path='/listproduct' element={<ListProduct/>}></Route>
//         <Route path='/customer' element={<Customer/>}></Route>
//         <Route path="/order" element={<Order/>}>
//           <Route path=":orderId" element={<Order/>}/>
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// const styles = {
//   logoutButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#dc3545', // Bootstrap danger color
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     width: '10rem',
//     cursor: 'pointer',
//     marginTop: '-70px',
//     // marginLeft: '-200px',
//     height: '40px'
//   },
// };

// export default Admin;



// admin.jsx
import React, { useState } from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes, Route, Navigate } from "react-router-dom";
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';
import Order from '../../Components/Orders/Order';
import Customer from '../../Components/Customer/Customer';
import Navbar from '../../Components/Navbar/Navbar';

const Admin = ({onLogout}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Sample isLoggedIn state

  const handleLogout = (value) => {
    // Implement logout functionality
    setIsLoggedIn(value);
    onLogout(value);
  };

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/login" replace />; // Use 'replace' to replace the current URL in the history
  }

  return (
    <div>
      <Navbar handleLog={handleLogout}/>
    <div className='admin'>
      <Sidebar />
     
      {/* Logout button */}
      <Routes>
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path='/listproduct' element={<ListProduct />}></Route>
        <Route path='/customer' element={<Customer />}></Route>
        <Route path="/order" element={<Order />}>
          <Route path=":orderId" element={<Order />} />
        </Route>
      </Routes>
    </div>
</div>
  );
};



export default Admin;