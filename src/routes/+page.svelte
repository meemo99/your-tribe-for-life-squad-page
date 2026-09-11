<script>
    let { data } = $props();

    const persons = $derived (data.persons);

    import MemberCard from '$lib/components/MemberCard.svelte';
</script>

<h1>Squadpage Squad G</h1>

{#each persons as person}
   <MemberCard {person} />
{/each}
