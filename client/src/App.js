import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from './components/NavBar';
import Available from "./pages/Available";
import Examples from "./pages/Examples";

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <Switch>
          <Route exact path="/" component={Available} />

          <Route exact path="/examples" component={Examples} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
