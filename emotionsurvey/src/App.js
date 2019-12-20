import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { routers } from "./configs/Routes/Route";
import { Provider } from "react-redux";
import Store from "./configs/Store/Store";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "./hoc/Layout";
import history from "./configs/History/History";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./App.scss";
require("dotenv").config();

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
}

const renderRouteContainer = routes =>
  routes.map((item, idx) => (
    <Route
      key={idx}
      exact={item.exact}
      component={WaitingComponent(item.container)}
      path={item.path}
    />
  ));

function App() {
  return (
    <Provider store={Store}>
        <Router history={history}>
          <Route
            render={({ location }) => (
              <Layout>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="page"
                  >
                    <Switch>
                      {renderRouteContainer(routers)}
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </Layout>
            )}
          />
        </Router>
    </Provider>
  );
}

export default App;
