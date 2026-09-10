export async function load(){
    // Haalt alleen de id op via een API
    const personRes = await fetch (`https://fdnd.directus.app/items/person?${params.id}`)
    // Zet de API-response om naar JSON
    const personData = await personRes.json();
    
    // Bepaalt welke gegevns van de student uit de API worden opgehaald 
    const params = new URLSearchParams({
        fields: 'name,team_s13,bio,profilecard'
    })

    // Geeft de gegevens van de student door aan de pagina
    return{
        person: personData.data
    }
}

