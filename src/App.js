import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth';
import Logout from './containers/Logout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
        </Switch>

      </Layout>
    </div>
  );
}

export default App;
