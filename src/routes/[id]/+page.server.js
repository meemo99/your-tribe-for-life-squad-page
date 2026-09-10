import { error } from '@sveltejs/kit';


export async function load({params}){
    const query = new URLSearchParams({
        fields: 'name,team_s13,bio,profilecard'
    })

    const personRes = await fetch (
        `https://fdnd.directus.app/items/person/${params.id}?${query}`
    )
    
    if (!personRes.ok) {
        error(personRes.status, 'Kon deze persoon niet ophalen');
    }
    
    const personData = await personRes.json();
    
    if (!personData.data) {
        error(404, 'Persoon niet gevonden');
    }

    return{
        person: personData.data
    }
}