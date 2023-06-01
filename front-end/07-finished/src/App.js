import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import Login from './components/Cart/usericon';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginIsShown, setLoginIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const showLoginHandler = () => {
    setLoginIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {loginIsShown && <Login onClose={hideLoginHandler} />}
      <Header onShowCart={showCartHandler} onshowLoginHandler= {showLoginHandler}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
