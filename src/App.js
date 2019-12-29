import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/auth" component={Auth} />
        </Switch>

      </Layout>
    </div>
  );
}

export default App;
