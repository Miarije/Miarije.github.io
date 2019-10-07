<template>
    <div class="tile" style="background-color:lightblue;">
        <img src="img">
        <h3>{{ msg }} </h3>
    </div>
</template>

<script>
export default {
  name: 'Reptile-tile',
  props: {
    msg: String,
    img: String
  }
}
</script>

<style>

</style>