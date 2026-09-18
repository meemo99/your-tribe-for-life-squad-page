<script>
    let {data} = $props()
    const person = $derived (data.person)
    import DetailMemberCard from "$lib/components/DetailMemberCard.svelte";
    import InfoblocksComp from "$lib/components/InfoblocksComp.svelte";
</script>

<DetailMemberCard {person} />
<InfoblocksComp {person} />
