<script>
    let { data } = $props();

    const persons = $derived (data.persons);
</script>

<h1>Squadpage Squad G</h1>

{#each persons as person}
    <a href="/{person.id}"> {person.name}</a><br />
    <p>werkt de font en kleur?</p>
{/each}

<style>
    :global(body) {
        /* font */
        /* Font H1 and all p */
        --font-primary: 'Science Gothic';
        /* Font for h2 */
        --font-secondary: 'Ropa Sans';
        /* Font for '(squad) 2G' */
        --font-tertiary: 'Rock Salt';

        /* Border-radius */ 
        --border-radius-regular: 15px;
        --border-radius-circel: 30px;

        /* Colors */

        /* Background */
        --background-color-primary: #FECCDD;

        /* Cards */
        --color-card-pink: #EF78C9;
        --color-card-team-pink: #F34CA6;

        --color-card-purple: #9D96FF;
        --color-card-team-purple: #6F66F1;

        --color-card-orange: #FFB881;
        --color-card-team-orange: #F08837;

        --color-card-green: #CFEB79;
        --color-card-team-green: #ADD72C;

        --color-card-blue: #BDE3FF;
        --color-card-team-blue: #70BFF8;

        /* Texts */
        --color-text-primary: #520931;
        --color-text-secunday: #EE7BBE;
        --color-text-accent: #F38AB8;

        /* Nav buttons (Mac versie) */
        --color-nav-green: #63C327;
        --color-nav-red: #F74E4E;
        --color-nav-orange: #F29955;
    }

    @font-face {
        font-family: 'Science Gothic';
        src: url('/fonts/ScienceGothic-VariableFont_CTRS,slnt,wdth,wght.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Rock Salt';
        src: url('/fonts/RockSalt-Regular.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Ropa Sans';
        src: url('/fonts/RopaSans-Italic.ttf') format('truetype');
    }
    p{
        color: var(--color-text-secunday);
        font-family: var(--font-primary);
    }
</style>