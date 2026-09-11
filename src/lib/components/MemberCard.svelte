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

  <div class="middle">
    <div class="sidebar">
      <p class="team-name"></p>
    </div>

    <img
    class="mugshots"
    src={`https://fdnd.directus.app/assets/${person.mugshot_year2}`}
    alt={`Mugshot of ${person.name}`}
    width="300"
    height="300"
  />

    <div class="right-sidebar"></div>
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

  .mugshots {
    object-fit: cover;
  }
</style>
