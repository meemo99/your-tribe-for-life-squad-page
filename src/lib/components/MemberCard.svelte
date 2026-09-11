<script>
  let { person } = $props();
</script>

<article class="card">

<header class="header">
<div class="window-icons">
    <span></span>
    <span></span>
    <span></span>
</div>
</header>

<div class="middle"></div>

<div class="sidebar">
    <p class="team-name"> </p>
</div>

<img>

<div class="right-sidebar">

</div>

  <h3>
    <a href="/{person.id}">
      {person.name}
    </a>
  </h3>


</article>

<style>
  article {
    width: 300px;
    height: 300px;
    background-color: pink;
  }
</style>
