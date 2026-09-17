<script>
  let { person } = $props();
</script>
<header>
    <p class="fdnd">FDND</p>
    <a href="/" aria-label="Terug naar overzicht" class="back-btn"> Terug naar overzicht</a>
</header>

<div>
    <img
        src={`https://fdnd.directus.app/assets/${person.mugshot_year2}`}
        alt=""
        width="250"
        height="300"
    />
    <section>
        <h2>{person.name}</h2>

        <p class="bio-detail">{@html person.bio}</p>

        {#if person.profilecard }
            <a class="project" href={person.profilecard}>Profilecard</a>
            {:else}
            <a class="project" href={`https://github.com/${person.github_handle}`}>Github</a>
        {/if}
    </section>
</div>



