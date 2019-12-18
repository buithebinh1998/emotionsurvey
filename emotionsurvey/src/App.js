import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { routers } from "./configs/Routes/Route";
import { Provider } from "react-redux";
import Store, { persistor } from "./configs/Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "./hoc/Layout";
import history from "./configs/History/History";
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
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
