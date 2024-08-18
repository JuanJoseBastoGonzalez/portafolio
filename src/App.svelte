<script>
  import { Router, Route, Link } from 'svelte-routing';
  import lobye from './routers/lobye.svelte';
/*   import About from './About.svelte'; */
</script>

<Router>
  <nav>
    <Link to="/"></Link>
<!--   <Link to="/about">Sobre Nosotros</Link> -->
  </nav>

  <Route path="/" component={lobye} />
 <!--  <Route path="/about" component={About} /> -->
</Router>
