<script>
    let { person } = $props();
</script>

<div class="card-container">
    <div class="block-container">
        <div class="traffic-lights">
            <div class="light red"></div>
            <div class="light yellow"></div>
            <div class="light green"></div>
        </div>

        <section>
            <h3>About me</h3>
            <ul>
                <p>📍 {person.residency}</p>
                <p>🍿 {person.fav_movie}</p>
                <p>✨ {person.fav_hobby}</p>
                <p>🌤️ {person.fav_season}</p>
                <p>🗓️ {person.birthdate}</p>
            </ul>
        </section>
    </div>

    <div class="block-container">
        <div class="traffic-lights">
            <div class="light red"></div>
            <div class="light yellow"></div>
            <div class="light green"></div>
        </div>

        <section>
            <h3>Frontend Faves</h3>
            <ul>
                <li>{person.fav_feature}</li>
                <li>{person.fav_attribute}</li>
                <li>{person.fav_tag}</li>
                <li>{person.fav_property}</li>
            </ul>
        </section>
    </div>
</div>

