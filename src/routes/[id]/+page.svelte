<script>
    let {data} = $props()
    const person = $derived (data.person)
    import InfoblocksComp from "$lib/components/InfoblocksComp.svelte";
</script>

<h1>Detail</h1>

<h2>{person.name}</h2>
<p>{person.team_s13}</p>
<blockquote>{@html person.bio}</blockquote>
<a href={person.profilecard}>Profilecard</a>

<InfoblocksComp {person} />

<style>
    blockquote{
        background-color: beige;
        border-radius: 20px;
        padding: 15px;
    }
</style>
