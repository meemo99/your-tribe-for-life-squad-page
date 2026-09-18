<script>
  let { data } = $props();

  const persons = $derived(data.persons);

  import MemberCard from "$lib/components/MemberCard.svelte";
</script>

<h1>Squadpage Squad G</h1>

<ul class="members">
  {#each persons as person}
    <li>
      <MemberCard {person} />
    </li>
  {/each}
</ul>

<style>
  .members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    list-style: none;
    margin: 0;
  }

</style>
