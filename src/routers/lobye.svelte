<!-- 
<script>
    import { Link } from 'svelte-routing';
    
  </script> -->
  
<!--   <h1>Inicio</h1>
  <p>Bienvenido a nuestra aplicación.</p>
  <p>
    <Link to="/about">Ir a la página Sobre Nosotros</Link>
  </p> -->
  
<script lang="ts">
  import Navbar from "../components/navbar.svelte";
  import carts from "../components/carts.svelte"
    import Carts from "../components/carts.svelte";
</script>

<Navbar />
<div class="body">
  <div class="section">
  <div class="n">
    FRONT
  </div> 
  </div>

  <div class="section">
    <div class=" n ">
      DATA BASE
    </div>
    </div>
  <div class="section">
    <div class="n">
      BACKEND
    </div>
  </div>
</div>
<style>
  
  .circle {
    width: 150px;
    height: 150px; 
    border-radius: 50%; 
    background: transparent; 
    border: 5px solid rgb(241, 1, 1); 
    mix-blend-mode: screen;
  }
  .section{
    width: 100%; 
    height: 100vh; 
    z-index: 3;
    background-position: center; 
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 500px 180px rgba(0, 0, 0, 8); 
background-color: black;
  }
  .n{display: none;}
  .section:hover .n{
    display: block;
    cursor:pointer;
    z-index: 4; 
    font-size: 4rem;
    filter: brightness(var(--value, 5)); --value: 1;
    position: absolute;
  }

  .section:hover{
    background: none;
  } 

  .body{
    height: 100vh;
    display: grid;
    align-content: center;
    justify-content: center;
    background: url("../assets/lluvia.gif");
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
grid-template-columns: 33% 33% 34%;
filter: brightness(var(--value, 5)); --value: 0.8;
color: aliceblue;
  }

</style>