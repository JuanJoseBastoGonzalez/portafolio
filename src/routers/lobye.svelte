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

    import { audioControl, audio2Control, audio3Control } from '../stores/audioStore';
    
    // Variable para suscribirte al estado del audio
    let isPlaying;
    audioControl.subscribe(value => {
        isPlaying = value.isPlaying;
    });
    audio2Control.subscribe(value => {
        isPlaying = value.isPlaying;
    });
    audio3Control.subscribe(value => {
        isPlaying = value.isPlaying;
    });
    
    // Función para reproducir el audio
    function playAudio() {
        audioControl.play();
    }
    function playAudio2() {
        audio2Control.play2();
    }
    function playAudio3() {
        audio3Control.play3();
    }
    
      import { Link } from "svelte-routing";
      import Navbar from "../components/navbar.svelte";
      import Footer from "../components/footer.svelte";
      import { showFront } from "../stores/globalStore";
      import { showDatabase } from "../stores/globalStore";
      import { showBackend } from "../stores/globalStore";
      import { showLobye } from "../stores/globalStore";
      function toggFron() {
        showFront.update((value) => !value);
      }
      function toggData() {
        showDatabase.update((value) => !value);
      }
      function toggBack() {
        showBackend.update((value) => !value);
      }
    </script>
    
    <Navbar />
    <div class="body h100vh gcc bgrnorepeat gcolumns3"  >
      <Link to="/front">
        <div class="section bgrblack w100cent tduration2 h100vh fcc"on:click={playAudio}>
              <div class="dnone cp clwithe"  >FRONT</div>
        </div>
      </Link>   
      <Link to="/dataBase"> 
      <div class="section bgrblack w100cent tduration2 h100vh fcc" on:click={playAudio2}>
           <div class="dnone cp clwithe" >DATA BASE</div>
      </div>
    </Link>
<Link to="/backend">
      <div class="section bgrblack w100cent tduration2 h100vh fcc" on:click={playAudio3}>
              <div class="dnone cp clwithe">BACKEND</div>
      </div>
    </Link>

    </div>
    <Footer />
    
    <style>
      .section {
        /*  width: 100%; */
        /*     height: 100vh; */
        z-index: 3;
        background-position: center;
        /*  background-repeat: no-repeat; */
        /*     display: flex;
        justify-content: center;
        align-items: center; */
        box-shadow: inset 0 0 500px 185px rgba(0, 0, 0, 8);
        /*     background-color: rgb(0, 0, 0); */
        /*   transition-duration: 2s; */
      }
    
      .section:hover .dnone {
        display: block;
        /* cursor: pointer; */
        z-index: 4;
        font-size: 4rem;
        filter: brightness(var(--value, 5));
        --value: 1;
        position: absolute;
      }
    
      .section:hover {
        background: none;
      }
    
      .body {
        /*   height: 100vh; */
        /*     display: grid;
        align-content: center;
        justify-content: center; */
        background: url("../assets/lluvia.gif");
        background-size: cover;
        background-position: center;
        /*   background-repeat: no-repeat; */
        /*   grid-template-columns: 33% 33% 34%; */
        filter: brightness(var(--value, 5));
        --value: 0.8;
      }
    </style>
    