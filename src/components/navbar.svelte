<!-- src/components/AnotherComponent.svelte -->
<script>
  import { Link } from 'svelte-routing';
  import { audioControl } from '../stores/audioStore';

// Variable para suscribirte al estado del audio
let isPlaying;
audioControl.subscribe(value => {
    isPlaying = value.isPlaying;
});

// Función para reproducir el audio
function pauseAudio() {
    audioControl.pause();
}
</script>

<div class="navbar clwithe w100cent gcolumns3 pabsolute tduration2 galingc">
  <div on:click={pauseAudio}><Link to="/">HOME</Link></div>
  <div class="fcc">
    <section>
      <a class="animated-line clwithe bgrnorepeat cp fs2">Izquierda</a>
    </section>
    <section>
      <a class="animated-line clwithe bgrnorepeat cp fs2">Centro</a>
    </section>
    <section>
      <a class="animated-line clwithe bgrnorepeat cp fs2">Derecha</a>
    </section>
  </div>
  <div class="menu">MENU</div>
</div>

<style lang="less">
  .navbar {
    margin: 0;
    padding: 0;
    height: 8vh;
    background: rgba(0, 0, 0, 0.353);
    justify-content: space-between;
    z-index: 4;
  }

  .navbar::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 98%;
    height: 2px;
    background: rgba(255, 255, 255, 0.175);
    z-index: 555;
  }

  .menu {
    display: flex;
    justify-self: end;
    margin-right: 2rem;
  }

  .navbar:hover {
    transition-duration: 2s;
    font-size: 2rem;
  }

  .animated-line {
    margin: 10px 30px;
    background-image: linear-gradient(90deg, #62aeff, #ff0468, #af4ffe);
    text-decoration: none;
    font-weight: bold;
    background-size: 0% 2px;
    background-position: left bottom;
    transition: background-size 700ms ease-in-out;
  }

  .animated-line:hover {
    background-size: 100% 2px;
  }
</style>
