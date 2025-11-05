import { Route, Switch } from 'wouter';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Services from './pages/Services';
import ExploreVision from './pages/ExploreVision';
import JoinMovement from './pages/JoinMovement';
import Support from './pages/Support';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/who-we-are" component={WhoWeAre} />
        <Route path="/services" component={Services} />
        <Route path="/explore-vision" component={ExploreVision} />
        <Route path="/join-movement" component={JoinMovement} />
        <Route path="/support" component={Support} />
      </Switch>
    </div>
  );
}

export default App;
