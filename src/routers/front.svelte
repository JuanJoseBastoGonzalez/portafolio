<script lang="ts">
  
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import Carts from "../components/carts.svelte";
    </script>
    <Navbar/>
    <div class="bodyf">
    <div>
        <div class="view"><Carts/></div>
        <div class="view"><Carts/></div>
        <div class="view"><Carts/></div>
        <div class="view"><Carts/></div>
    </div>
    <div class="rolem">
        <div class="part">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam tempora optio iure nemo quae, inventore doloribus fugit exercitationem, accusamus ea sed temporibus odio natus harum illo distinctio tenetur sunt!</div>
        <div class="part">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium odio laborum debitis autem. Eveniet ratione quis vitae. Sequi consectetur voluptatibus veniam dolore. Ut excepturi incidunt, illum soluta omnis dicta quas?</div>
        <div class="part">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit, quis beatae eveniet, debitis ipsa quae est similique rem aliquid adipisci deserunt voluptas dolorem sit libero explicabo quas tempore rerum.</div>
        <div class="part">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, nesciunt ad libero fugiat similique est numquam ratione excepturi id eos nisi neque qui sit unde commodi! Ad numquam sed minima.</div>
    
    
    </div>
    </div>
    <Footer/>
    <style lang="less">
    
    .view{
        margin-top: 5rem;
    }
    .part{
    margin-top: 20rem;
    width: auto;
    height: auto;
    margin-bottom: 3rem;
    }
    .bodyf{
        display: grid;
        /* align-items: center; */
        grid-template-columns: 50% 50%;
        height: 100%;
        color: aliceblue;
        width: 100%;
        background-color: rgb(0, 0, 0);
    }
    </style>