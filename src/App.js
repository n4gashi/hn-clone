import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/UI/Layout'
import Navigation from 'views/components/Navigation'
import News from 'views/News'

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Navigation />
          <Route exact path="/" component={News} />
          <Route path="/news" component={News} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
