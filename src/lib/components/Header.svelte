<header>
	<a href="/">FDND</a>
	    <svg viewBox="0 0 100 100" aria-hidden="true">
		    <path d="m50 2 11 33h35L68 56l11 35-29-21-29 21 11-35L4 35h35Z" />
	    </svg>

	<hgroup>
		<h1>Squad <span>2G</span></h1>
		    <p class="subtitle">Different minds, same direction</p>
		    <p>2026-2027</p>
	</hgroup>
</header>

<style>

	a {
	  grid-area: 1 / 1;
	  justify-self: start;
	  color: #d64e90;;
	  font: 700 1rem / 1.5 system-ui, sans-serif;
	}

    header {
	  position: relative;
	  isolation: isolate;
	  display: grid;
	  grid-template-columns: minmax(0, 1fr);
	  padding: clamp(1.25rem, 5vw, 4rem);
	  padding-block-end: 1.5rem;
    }

    svg {
	  position: absolute;
	  inset-block-start: 0;
	  inset-inline-end: clamp(1.25rem, 5vw, 4rem);
	  z-index: -1;
	  width: min(70%, 34rem);
	  height: 100%;
	  fill: #641337;
	  opacity: 0.14;
	  rotate: 15deg;
	  pointer-events: none;
    }

    hgroup {
	  grid-area: 2 / 1;
	  margin-block-start: clamp(2rem, 6vw, 4rem);
	  font: italic 1rem / 1.2 'Ropa Sans', sans-serif;
    }

	h1 {
	  position: relative;
	  display: inline-block;
	  margin: 0;
	  padding-inline-end: 0.8em;
	  font: 500 clamp(2.5rem, 15vw, 7rem) / 0.9 'Science Gothic', sans-serif;
	  font-stretch: 125%;
      text-transform: uppercase;
	}

	h1 span {
	  position: absolute;
	  top: 0.6em;
	  left: 5.6ch;
	  color: #d64e90;
	  font: 400 0.9em / 1 'Rock Salt', cursive;
	  rotate: -12deg;
	}

	p {
	  margin: 0.5rem 0 0;
	}

	.subtitle {
	  margin-block-start: 1rem;
	  font-size: clamp(1rem, 4vw, 2.5rem);
	}
</style>