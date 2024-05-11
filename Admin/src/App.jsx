// App.jsx

import React, { useState } from 'react';
import Admin from './Pages/Admin/Admin';
import Navbar from './Components/Navbar/Navbar';
import { OrdersProvider } from './Context/Allcontext';
import axios from 'axios'; // Import Axios
import Login from './Pages/Login/Login'; // Import the Login component
import { Navigate } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    async function handleLogin(username, password) {
      // try {
      //   // Use Axios to send the POST request
      //   const response = await axios.post('https://consultancy-zefr.onrender.com/login', {
      //     username,
      //     password,
      //   });
    
      //   // Data is available directly, no need to call `response.json()`
      //   const data = response.data;
    
      //   // Check if the request was successful
      //   if (response.status === 200) {
      //     setIsLoggedIn(true); // Or other success handling
      //   } else {
      //     // Alert message if request was not successful
      //     alert(data.message);
      //   }
      // } catch (error) {
      //   // Handle error, checking if the error has a response (Axios-specific)
      //   if (error.response) {
      //     console.error('Login error:', error.response.data);
      //     alert(`Error: ${error.response.data.message || 'Something went wrong'}`);
      //   } else {
      //     console.error('Login error:', error);
      //     alert('Error: Something went wrong');
      //   }
      // }
    
    

    try {
      const response = await fetch(`https://consultancy-zefr.onrender.com/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-type': 'text/plain',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
   const handleLogout = (value) => {
    setIsLoggedIn(value);
   }
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <OrdersProvider>
        <Admin onLogout={handleLogout}/>
      </OrdersProvider>
    </div>
  );
};

export default App;