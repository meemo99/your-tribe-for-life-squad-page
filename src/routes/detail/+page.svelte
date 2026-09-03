<h1>detail</h1>

<script>
    let {data} = $props();
    const persons = data.persons;
</script>

{#each persons as person}
    <h2>{person.name}</h2> <br>
    <p>{person.team_s13}</p>
    <blockquote>{@html person.bio}</blockquote>
    <a href= {person.profilecard}>Profilecard</a>
{/each}

<style>
    blockquote{
        background-color: beige;
        border-radius: 20px;
        padding: 15px;
    }
</style>


