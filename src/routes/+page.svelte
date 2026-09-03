<script>
    let { data } = $props();

    const persons = data.persons;
</script>

<h1>Squadpage Squad G</h1>

{#each persons as person}
    <a href="/"> {person.name}</a><br />
{/each}
