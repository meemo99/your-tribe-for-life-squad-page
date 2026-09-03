export async function load() {
    const params = new URLSearchParams({
        fields: 'name,team_s13,bio,profilecard',
        'filter[squads][squad_id][cohort][_eq]': '2627',
        'sort': 'name'
    });
    const res = await fetch(
        `https://fdnd.directus.app/items/person?${params.toString()}`
    );

    const data = await res.json();

    return {
        persons: data.data
    };
}

