export async function load({params}){
    const query = new URLSearchParams({
        fields: 'name,team_s13,bio,profilecard'
    })

    const personRes = await fetch (
        `https://fdnd.directus.app/items/person/${params.id}?${query}`
    )
    
    
    const personData = await personRes.json();
    console.log(personData.data)

    return{
        person: personData.data
    }
}