<script>
    let { data } = $props();
    const persons = $derived (data.persons);
</script>

<h1>Squadpage Squad G</h1>

{#each persons as person}
    <a href="/{person.id}"> {person.name}</a><br />
    <p>werkt de font en kleur?</p>
{/each}

