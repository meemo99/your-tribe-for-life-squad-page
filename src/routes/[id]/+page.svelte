<script>
    let {data} = $props()
    const person = $derived (data.person)

    import DetailMemberCard from "$lib/components/DetailMemberCard.svelte";
</script>

<DetailMemberCard {person} />