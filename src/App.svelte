<script>
  import "bulma/css/bulma.css";
  import Header from "./Header.svelte";
  import Nav from "./Nav.svelte";
  import Table from "./Table.svelte";
  import Button from './Toggle.svelte'

</script>


<style>
  :global(body) {
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      
  }
  :global(body) {
		background-color: #f2eee2;
		color: #0084f6;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #000000
;
		color: #bfc2c7;
	}

</style>

<Nav />
<Button>
	Dark Theme
</Button>
<Header />

<Table />
