<script>
  let { person } = $props();
</script>

<article>

<div class="card">

    <ul class="icons">
        <li class="icon"></li>
        <li class="icon"></li>
        <li class="icon"></li>
    </ul>

  <h3>
    <a href="/{person.id}">
      {person.name}
    </a>
  </h3>

</div>
</article>

<style>
  article {
    width: 300px;
    height: 300px;
    background-color: pink;
  }
</style>
