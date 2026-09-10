<script>
    let {data} = $props()
    const person = $derived (data.person)
</script>

<h1>Detail</h1>

<h2>{person.name}</h2>
<p>{person.team_s13}</p>
<blockquote>{@html person.bio}</blockquote>
<a href={person.profilecard}>Profilecard</a>

<style>
    blockquote{
        background-color: beige;
        border-radius: 20px;
        padding: 15px;
    }
</style>


