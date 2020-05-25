<template>
  <div style="margin-top: 50px">
      <h1 style="margin-bottom: 75px;">About Me</h1>
      <p style="font-size: 24px;">I <span style="font-weight: bolder;">DESIGN</span> & <span style="font-weight: bolder;">GROW</span> products that people love!</p>
      
      <div class="columns">
          <div class="column-1">
            <p style="margin-left: 100px;">I am a software devloper born & raised in the Chicagoland area. I recently graduated from the University of Iowa in 2019 with a BA in Computer Science. Web development is one of my big passions that I enjoy doing in & out of the office! My goals are to expand my brand & become the best programmer I could be.</p>
          </div>
          <div class="column-2">
              <p style="margin-right: 100px;">I currently work for a healthcare company working in Angular and C#! I love learning new languages and frameworks (this site is in VueJS). I enjoy making the user interface & user experience as comfortable for the user as it can be! Check out my <a href="#" target="_blank" class="link">project portfolio</a> & <a href="https://github.com/chlader" target="_blank" class="link">my Github.</a></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.intro {
    display: flex;
}

p{
    font: 12px;
    margin-top: 0;
    margin-bottom: 0;
}
.columns {
    margin-top: 75px;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 125px;
}

.column-1 {
    text-align: center;
    line-height: 50px;
}

.column-2 {
    text-align: center;
    line-height: 50px;
}

.link {
    color: #999999;
}

.link:hover {
    color: #333333;
}
</style>