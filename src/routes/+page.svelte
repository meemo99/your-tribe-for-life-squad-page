<script>
    let { data } = $props();

    const persons = $derived (data.persons);

    import MemberCard from '$lib/components/MemberCard.svelte';
</script>

<h1>Squadpage Squad G</h1>

<div class="members">
{#each persons as person}
   <MemberCard {person} />
{/each}
</div>

<style>

.members {
 display: flex;
 flex-wrap: wrap;
 gap: 1rem;
 padding: 1rem;
}

@media (min-width: 1024px) { 
    .members {
  justify-content: center;
  }
  }


</style>