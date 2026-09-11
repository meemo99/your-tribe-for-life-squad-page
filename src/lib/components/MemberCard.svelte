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
      <p class="team-name">team naam</p>
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
    width: fit-content;
    border: 1px solid black;
    margin: 1em;
  }

  header {
    height: 30px;
    border-bottom: 1px solid black;
  }

  /* span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: pink;
  } */

  .mugshots {
    object-fit: cover;
  }

  .middle {
    display: flex;
  }

  .sidebar {
    width: 40px;
    /* background-color: pink; */
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  .team-name {
    transform: rotate(-90deg);
    /* white-space: nowrap; */
  }

  .right-sidebar {
    width: 20px;
    /* background-color: pink; */
    border-left: 1px solid black;
    border-bottom: 1px solid black;
  }

  h3 {
    text-align: center;
  }

  a {
    text-decoration: none;
  }


</style>
