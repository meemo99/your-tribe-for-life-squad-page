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
    border-radius: 20px;
  }

  header {
    height: 30px;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
  }

  .window-icons {
    display: flex;
    gap: 0.2rem;
    /* height: 20px; */
    padding-left: 0.5rem;
  }

  .window-icons span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid black;
  } 

  .mugshots {
    width: 220px;
    height: 260px;
    object-fit: cover;
    border-bottom: 1px solid black;
  }

  .middle {
    display: flex;
  }

  .sidebar {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    width: 40px;
    /* background-color: pink; */
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  .team-name {
    transform: rotate(-90deg);
    white-space: nowrap;
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
