<template>
  <div class="Home">
    <h1>Welkom op deze site over Nederlandse reptielen</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur justo mattis convallis vehicula. In dolor tellus, accumsan sit amet urna sed, volutpat lacinia mauris. Maecenas at erat ut eros mollis laoreet at id metus. Nam vulputate id lacus sed porttitor. Nulla eget nulla mauris. Vivamus efficitur sem at massa hendrerit volutpat. Nullam at risus sagittis, auctor orci ut, vulputate magna. Integer varius hendrerit nibh posuere rhoncus. Donec auctor enim ut iaculis facilisis. Cras quis ultricies est. Aenean viverra pulvinar dolor quis cursus. Maecenas vel felis consectetur, cursus magna et, tempus sapien. </p>
    <b-container>
        <b-row>
          <b-col></b-col>
        <b-col sm="8"><h3>Overzicht van alle reptielen op deze website</h3></b-col>
        <b-col></b-col>
      </b-row>
      <b-row></b-row>
      <b-row>
        <b-col><h4>Slangen</h4></b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col><Tile msg="Slang 1" img="pad1"></Tile></b-col>
        <b-col><Tile msg="Slang 2" img="pad2"></Tile></b-col>
        <b-col><Tile msg="Slang 3" img="pad3"></Tile></b-col>
      </b-row>
      <b-row>
        <b-col><h4>Hagedissen</h4></b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col><Tile msg="Hagedis 1" img="pad1"></Tile></b-col>
        <b-col><Tile msg="Hagedis 2" img="pad1"></Tile></b-col>
        <b-col><Tile msg="Hagedis 3" img="pad1"></Tile></b-col>
        <b-col><Tile msg="Hagedis 4" img="pad1"></Tile></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Tile from "@/components/Reptile-tile.vue"

  export default {
    name: 'Home',
    components: {
      Tile
    }
  }
</script>
