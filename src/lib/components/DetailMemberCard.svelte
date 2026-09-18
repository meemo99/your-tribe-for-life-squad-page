<script>
    let { person } = $props();
</script>

<header>
    <p class="logo-fdnd">FDND</p>
    <a href="/" aria-label="Terug naar overzicht" class="back-btn">
        Terug naar overzicht</a
    >
</header>

<main>
    <img
        src={`https://fdnd.directus.app/assets/${person.mugshot_year2}`}
        alt=""
        width="250"
        height="300"
    />
    <section>
        <h2>{person.name}</h2>

        <p class="bio-detail">{@html person.bio}</p>

        {#if person.profilecard}
            <a class="project" href={person.profilecard}>Profilecard</a>
        {:else}
            <a
                class="project"
                href={`https://github.com/${person.github_handle}`}>Github</a
            >
        {/if}
    </section>
</main>

<style>
    .logo-fdnd {
        color: var(--color-text-secunday);
    }
    header {
        margin-left: 10px;
    }
    .back-btn {
        font-family: var(--font-primary);
        text-decoration: none;
        color: var(--color-text-primary);
        letter-spacing: 2px;
    }
    main {
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 80px;

        /* tabelet versie */
        @media (min-width: 583px) {
            grid-template-columns: auto 1fr;
            grid-template-rows: 200px auto auto;
            gap: 15px;
        }
    }
    img {
        object-fit: cover;
        border: 4px solid var(--color-text-primary);
        border-radius: 20px;
        margin: 10px;

        /* width voor img */
        @media (min-width: 685px) {
            width: 400px;
        }
    }
    section {
        margin-left: 10px;
    }
    h2 {
        font-family: var(--font-secondary);
        font-size: var(--font-size-h2);
        color: var(--color-text-primary);
    }
    .bio-detail {
        font-size: clamp(1rem, 0.9rem + 1vw, 1.5rem);
        max-width: 40ch;
        margin-bottom: 40px;

        @media (min-width: 855px) {
            max-width: 60ch;
        }
    }
    .project {
        font-family: var(--font-primary);
        font-size: var(--font-size-base);
        color: var(--color-text-primary);
        text-decoration: none;
        border: 1px solid var(--color-text-primary);
        background-color: var(--color-text-accent);
        border-radius: 20px;
        padding: 10px 20px 10px 20px;
    }
</style>
