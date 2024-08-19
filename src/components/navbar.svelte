<script>
</script>

<div class="navbar clwithe w100cent gcolumns3 pabsolute tduration2 galingc">
  <div>INFO</div>
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
    /*   width: 100%; */
    /*     display: grid;
    align-items: center; */
    /*  position: absolute; */
    background: rgba(0, 0, 0, 0.353);
    /*   grid-template-columns: 33% 33% 33%; */
    justify-content: space-between;
    /*   color: rgb(255, 255, 255); */
    z-index: 4;
    /*  transition-duration: 2s; */
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
    /*  color: #ffffff; */
    margin: 10px 30px;
    /*   font-size: 2rem; */
    background-image: linear-gradient(90deg, #62aeff, #ff0468, #af4ffe);
    text-decoration: none;
    font-weight: bold;
    /*    cursor: pointer; */
    /*   background-repeat: no-repeat; */
    background-size: 0% 2px;
    background-position: left bottom;
    transition: background-size 700ms ease-in-out;
  }

  .animated-line:hover {
    background-size: 100% 2px;
  }
</style>
