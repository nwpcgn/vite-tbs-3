<script context="module">
	const elements = new Set();

	export function stopAll() {
		elements.forEach(element => {
			element.pause();
		});
	}
</script>

<script>
	import { onMount } from 'svelte';
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faFilm, faComment, faBook, faMicrophone } from '@fortawesome/free-solid-svg-icons';
    // {b_id,buch,id,h_id,name,titel,inhalt,audio_link}
	export let audio_link;
    export let titel;
	export let name;
	export let buch;
	export let inhalt;
    export let id;
    export let currentTime;
    let volume = 0.9;
    let muted;
	let audio;
	let paused = true;

	onMount(() => {
		elements.add(audio);
  		return () => elements.delete(audio);
	});

	function stopOthers() {
		elements.forEach(element => {
			if (element !== audio) element.pause();
		});
	}
    // $: console.log("CurrentTime", currentTime)
</script>

<article class:playing={!paused}>
	<div class="d-flex w-100 justify-content-between align-items-start">
        <div>
          <h1 class="mb-1">
            <span style="opacity: 0.9;">
              <Fa icon={faMicrophone} fw />
            </span>
            <span>{titel}</span>
          </h1>
        </div>
        <span class="badge text-bg-info fs-6">Folge {id}</span>
      </div>
      <div class="px-2">
        <h5 class="mb-1"><Fa icon={faComment} fw /> <em>{name}</em></h5>
        <p class="mb-1"><Fa icon={faBook} fw /> {buch}</p>
        <p class="mb-1">
          <small>{inhalt}</small>
        </p>
      </div>

	<audio
		bind:this={audio}
		bind:paused
		on:play={stopOthers}
        bind:currentTime
        bind:volume
        bind:muted
		controls
		src={audio_link}
	></audio>
</article>

<!--
<audio
src={clip}
bind:duration
bind:buffered
bind:played
bind:seekable
bind:seeking
bind:ended
bind:currentTime
bind:playbackRate
bind:paused
bind:volume
bind:muted
></audio>    
-->

<style>
	article { margin: 0;}
	audio { width: 100%; margin: 0.5rem 0;}
	.playing { color: var(--bs-info, #ff3e00); }
</style>