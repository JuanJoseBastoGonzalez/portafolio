
<div class="contenedor">
    <div class="tarjeta">
      <h2 class="canal">back <br> juan</h2>    </div>
</div>
<style>

.contenedor{
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tarjeta{
    height: 250px;
    width: 200px;
    background-color: #101010;
    border-radius: 10%;
    box-shadow: 16px 14px 20px #0000008c;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tarjeta::before{
    content: "";
    position: absolute;
    height: 300px;
    width: 300px;
    background-image: conic-gradient(rgb(255, 255, 255) 20deg, transparent 120deg);
    animation: rotar 2s linear infinite;
    
}

@keyframes rotar{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(-360deg);
    }
}

.tarjeta::after{
    content: "";
    position: absolute;
    height: 240px;
    width: 190px;
    background-color: #ffffff;
    border-radius: 10%;
    box-shadow: inset 16px 14px 20px #0000008c;;
}


h2{
    color: rgb(0, 0, 0);
    z-index: 2;
    background-color: transparent;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    text-shadow: 5px 5px 5px black;
}
</style>
