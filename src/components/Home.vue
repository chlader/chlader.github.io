<template>
  <div>
      <img src="../assets/chi.jpg" alt="" class="image">
      <h2>Hello my name is Ryan</h2>
      <h4>I am a software developer located in Chicago, Illinois</h4>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
.image {
  height: 300px;
}
@media screen and (max-width: 320px) {
  .image {
    height: 150px;
  }
}

@media screen and (max-width: 375px) {
  .image {
    height: 150px;
  }

  h2 {
    font-size: 18px;
  }
}

@media only screen and (min-width: 414px) and (max-width: 767px) {
  .image {
    height: 150px;
  }

  h2 {
    margin-left: 15px;
    font-size: 18px;
  }

  h4 {
    margin-left: 15px;
    font-size: 18px;
  }
}
</style>