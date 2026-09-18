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
                <li><span aria-hidden="true">📍</span> {person.residency}</li>
                <li><span aria-hidden="true">🍿</span> {person.fav_movie}</li>
                <li><span aria-hidden="true">✨</span> {person.fav_hobby}</li>
                <li><span aria-hidden="true">🌤️</span> {person.fav_season}</li>
                <li><span aria-hidden="true">🗓️</span> {person.birthdate}</li>
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
                <li class="fav-tag">{person.fav_feature}</li>
                <li class="fav-tag">{person.fav_attribute}</li>
                <li class="fav-tag">{person.fav_tag}</li>
                <li class="fav-tag">{person.fav_property}</li>
            </ul>
        </section>
    </div>
</div>

<style>
    .card-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        @media (min-width: 583px) {
            flex-direction: row;
            gap: 24px;
            padding: 24px;
        }
    }
    .block-container {
        flex: 1;
    }
    .traffic-lights {
        background-color: #9d96ff;
        display: flex;
        gap: 8px;
        padding: 8px;
        border-radius: 21px 21px 0px 0px;
    }

    .light {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        cursor: pointer;
    }

    .red {
        background-color: #ff5f57;
        margin-left: 10px;
    }

    .yellow {
        background-color: #ffbd2e;
    }

    .green {
        background-color: #28ca42;
    }
    section {
        background-color: white;
        opacity: 83%;
        width: auto;
        height: fit-content;
        padding: 15px;
        margin-bottom: 20px;
        border-top: solid 1.5px #520931;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
    .fav-tag {
        margin-bottom: 4px;
        background-color: #feccdd;
        border-radius: 15px;
        width: fit-content;
        padding: 8px;
        border: 1.5px solid #520931;
    }
</style>
