<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Lobye from './routers/lobye.svelte';
  import Front from './routers/front.svelte';
  import DataBase from './routers/dataBase.svelte';
  import Backend from './routers/backend.svelte';
</script>

<Router>
  <nav>
    <Link to="/"></Link>
    <Link to="/front"></Link> 
    <Link to="/dataBase"></Link>
    <Link to="/backend"></Link>
  </nav>

  <Route path="/" component={Lobye} />
  <Route path="/front" component={Front} /> 
  <Route path="/dataBase" component={DataBase}/>
  <Route path="/backend" component={Backend}/>
</Router>