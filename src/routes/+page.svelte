<script>
  let { data } = $props();

  const persons = $derived(data.persons);
  import Header from "$lib/components/Header.svelte";
  import MemberCard from "$lib/components/MemberCard.svelte";
</script>

<Header />

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

  .members li:nth-child(5n + 1) {
  --card-color: var(--color-card-pink);
  --team-color: var(--color-card-team-pink);
}

.members li:nth-child(5n + 2) {
  --card-color: var(--color-card-purple);
  --team-color: var(--color-card-team-purple);
}

.members li:nth-child(5n + 3) {
  --card-color: var(--color-card-orange);
  --team-color: var(--color-card-team-orange);
}

.members li:nth-child(5n + 4) {
  --card-color: var(--color-card-green);
  --team-color: var(--color-card-team-green);
}

.members li:nth-child(5n + 5) {
  --card-color: var(--color-card-blue);
  --team-color: var(--color-card-team-blue);
}


</style>
