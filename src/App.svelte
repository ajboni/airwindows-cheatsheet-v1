<script>
  import "bulma/css/bulma.css";
  import Header from "./Header.svelte";
  import Nav from "./Nav.svelte";
  import Table from "./Table.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }
</style>

<Nav />
<Header />
<Table />
