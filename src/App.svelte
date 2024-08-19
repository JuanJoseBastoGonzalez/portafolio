<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Lobye from './routers/lobye.svelte';
  import Front from './routers/front.svelte';
</script>

<Router>
  <nav>
    <Link to="/"></Link>
 <Link to="/front"></Link> 
  </nav>

  <Route path="/" component={Lobye} />
  <Route path="/front" component={Front} /> 
</Router>
