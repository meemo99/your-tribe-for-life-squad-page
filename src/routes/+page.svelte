<script>
    let { data } = $props();

    const persons = $derived(data.persons);
</script>

<h1>Squadpage Squad G</h1>

{#each persons as person}
    <a href="/">
        {person.name}<br />
        {#if person.mugshot_year2}
            <img
                src={`https://fdnd.directus.app/assets/${person.mugshot_year2}`}
                alt={`Mugshot of ${person.name}`}
                width="300"
                height="300"
            />
        {:else}
            <img
                src={`https://fdnd.directus.app/assets/${person.mugshot}`}
                alt={`Mugshot of ${person.name}`}
            />
        {/if}
    </a>
{/each}
