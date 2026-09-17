        {#if person.profilecard }
            <a class="project" href={person.profilecard}>Profilecard</a>
            {:else}
            <a class="project" href={`https://github.com/${person.github_handle}`}>Github</a>
        {/if}
    </section>
