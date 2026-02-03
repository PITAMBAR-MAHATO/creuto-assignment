import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Footer from './components/Footer';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {isLogin ? (
        <LoginPage onSwitch={togglePage} />
      ) : (
        <SignUpPage onSwitch={togglePage} />
      )}
      <Footer />
    </div>
  );
}

export default App;
