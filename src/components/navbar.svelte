<script>

</script>
<div class="navbar">
    <div>LOGO</div>
    <div class="center">
      <section>Izquierda</section>
      <section>Centro</section>
      <section>Derecha</section>
    </div>
    <div class="menu">MENU</div>
</div>
<style lang="less">
.navbar{
  margin: 0;
  padding: 0;
  height: 8vh;
  width: 100%;
  display: grid;
position: absolute;
background: rgba(0, 0, 0, 0.353);
  grid-template-columns: 33% 33% 33%;
  justify-content: space-between;
  align-items: center;
  color:rgb(255, 255, 255);
  z-index: 3;
    }
.menu{
  display: flex;
  justify-self: end;
    }
.center{
  display: flex;
  justify-content: center;
  gap:2rem;

    }

</style>