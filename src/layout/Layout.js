import Blogs from '../pages/blogs/Blogs';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Layout() {
  return (
    <div class="layout">
      <Router>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/blogs">Blogs</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Layout;
