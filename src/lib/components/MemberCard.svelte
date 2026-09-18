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
      <p class="team-name">{person.team_s13}</p>
    </div>

    <img
    class="mugshots"
    src={`https://fdnd.directus.app/assets/${person.mugshot_year2}`}
    alt={`Mugshot of ${person.name}`}
    width="250"
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
    --color-text-dark: #3D0625;
    width: fit-content;
    border: 1px solid black;
    border-radius: 20px;
    overflow: hidden;
  }

  header {
    height: 30px;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    background-color: var(--card-color);
  }

  .window-icons {
    display: flex;
    gap: 0.2rem;
    padding-left: 0.5rem;
  }

  .window-icons span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid black;
  } 

  .window-icons span:nth-child(1) {
   background-color:  var(--color-nav-red) ;
  } 

  .window-icons span:nth-child(2) {
    background-color: var(--color-nav-orange);
  } 

  .window-icons span:nth-child(3) {
    background-color: var(--color-nav-green);
  } 


  .mugshots {
    width: clamp(180px, 20vw, 220px);
    height: auto;
    aspect-ratio: 5 / 6;
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
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    background-color: var(--team-color);
  }

  .team-name {
    transform: rotate(-90deg);
    white-space: nowrap;
    color: var(--color-text-dark);
    font-size: var(--font-size-h3);
  }

  .right-sidebar {
    width: 20px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    background-color: var(--card-color);
  }

  h3 {
    text-align: center;
    background-color: var(--card-color);
    margin: 0;
    padding: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--color-text-dark);
  }


</style>
