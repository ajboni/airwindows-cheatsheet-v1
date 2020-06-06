<script context="module">
  import db from "./database";
</script>

<script>
  import TableItem from "./TableItem.svelte";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  const uniqueUse = [...new Set(db.map(item => item.Use))].sort();
  let uniqueTypes = [...new Set(db.map(item => item.Type))].sort();
  let init = false;
  let filteredDb = db;
  let searchString = "";
  let searchDelayTimer;
  let searchDelayTime = 350;
  let isLoadingSearchClass = "";
  let searchField;
  let sortBy = "name";
  let useFilter = "all";
  let typeFilter = "all";

  // Sort on first load.
  onMount(() => {
    filterDatabase();
  });

  function filterDatabase() {
    let tempDb = db;

    // Filter by use
    if (useFilter !== "all") {
      tempDb = tempDb.filter(plugin => plugin.Use === useFilter);
      uniqueTypes = [...new Set(tempDb.map(item => item.Type))].sort();
    } else {
      uniqueTypes = [...new Set(db.map(item => item.Type))].sort();
    }

    // Filter by Type
    if (typeFilter !== "all") {
      tempDb = tempDb.filter(plugin => plugin.Type === typeFilter);
    }

    // Search query
    if (searchString === "" || searchString === " ") {
      filteredDb = tempDb;
    } else {
      switch (searchField) {
        case "name":
          tempDb = tempDb.filter(plugin =>
            plugin.Name.toLowerCase().includes(searchString.toLowerCase())
          );
          break;
        case "desc":
          tempDb = tempDb.filter(plugin =>
            plugin.Description.toLowerCase().includes(
              searchString.toLowerCase()
            )
          );
          break;
        default:
          tempDb = tempDb.filter(
            plugin =>
              plugin.Name.toLowerCase().includes(searchString.toLowerCase()) ||
              plugin.Description.toLowerCase().includes(
                searchString.toLowerCase()
              )
          );
          break;
      }
    }

    // Sort
    tempDb = deepSort(tempDb, sortBy);

    filteredDb = tempDb;
  }

  function deepSort(array, sortBy) {
    switch (sortBy) {
      case "type":
        array = array.sort((x, y) => {
          if (x.Type.toLowerCase() > y.Type.toLowerCase()) {
            return 1;
          }
          if (x.Type.toLowerCase() < y.Type.toLowerCase()) {
            return -1;
          }
          if (x.Name.toLowerCase() > y.Name.toLowerCase()) {
            return 1;
          }
          if (x.Name.toLowerCase() < y.Name.toLowerCase()) {
            return -1;
          }
        });

        break;
      case "use":
        array = array.sort((x, y) => {
          if (x.Use.toLowerCase() > y.Use.toLowerCase()) {
            return 1;
          }
          if (x.Use.toLowerCase() < y.Use.toLowerCase()) {
            return -1;
          }
          if (x.Name.toLowerCase() > y.Name.toLowerCase()) {
            return 1;
          }
          if (x.Name.toLowerCase() < y.Name.toLowerCase()) {
            return -1;
          }
        });
        break;
      default:
        array = array.sort(
          (x, y) => x.Name.toLowerCase() > y.Name.toLowerCase()
        );
        break;
    }
    return array;
  }

  // Delay search until certain time after the user stopped writing.
  function handleSearch() {
    isLoadingSearchClass = "is-loading";
    clearTimeout(searchDelayTimer);
    searchDelayTimer = setTimeout(function() {
      filterDatabase();
      isLoadingSearchClass = "";
    }, searchDelayTime);
  }
</script>

<style>
  .table-item {
    margin-bottom: 1rem;
  }
  .section-small {
    padding: 1rem;
  }

  .field.is-grouped.is-grouped-multiline.is-grouped-centered {
    column-gap: 1rem;
  }

  .mb-075rem {
    margin-bottom: 0.75rem;
  }

  .sticky {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 2px 2px 5px #aaa;
  }
</style>

<section
  class="section-small has-background-primary has-text-white search-section
  sticky">
  <div class="field is-grouped is-grouped-multiline is-grouped-centered">
    <div class="field has-addons has-addons-centered">
      <p class="control">
        <span class="select is-small">
          <select bind:value={searchField} on:input={() => handleSearch()}>
            <option value="name">Name</option>
            <option value="desc">Description</option>
            <option value="all">Name/Desc</option>
          </select>
        </span>
      </p>

      <p
        class={'control filter  has-icons-left has-icons-right ' + isLoadingSearchClass}>
        <input
          bind:value={searchString}
          on:input={() => handleSearch()}
          class="input is-small is-expanded"
          type="search"
          placeholder="Search" />
        <span class="icon is-small is-left">
          <i class="fas fa-search" />
        </span>
      </p>

    </div>

    <div class="field has-addons has-addons-centered mb-075rem">

      <p class="control">
        <span class="select is-small">
          <select bind:value={sortBy} on:change={() => filterDatabase()}>
            <option value="name">Sort by Name</option>
            <option value="type">Sort by Type</option>
            <option value="use">Sort by Use</option>
          </select>

        </span>
      </p>

      <p class="control">
        <span class="select is-small">
          <select
            bind:value={useFilter}
            on:change={() => {
              typeFilter = 'all';
              filterDatabase();
            }}>
            <option value="all">All Uses</option>
            {#each uniqueUse as item}
              <option value={item}>{item}</option>
            {/each}
          </select>
        </span>
      </p>

      <p class="control">
        <span class="select is-small">
          <select bind:value={typeFilter} on:change={() => filterDatabase()}>

            <option value="all">All Types</option>
            {#each uniqueTypes as item}
              <option value={item}>{item.substring(0, 16)}</option>
            {/each}
          </select>
        </span>
      </p>
    </div>
  </div>
</section>

<section class="section-small ">
  {#if filteredDb.length > 0}
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Plugins Found</p>
          <p class="title">
            <span class="icon is-size-4">
              <i class="fas fa-headphones" aria-hidden="true" />
            </span>
            <span>{filteredDb.length}</span>
          </p>
        </div>
      </div>
    </nav>
    <div class="container " in:fade={{ delay: 100, duration: 500 }}>
      {#each filteredDb as filteredDbPlugin}
        <div class="table-item">
          <TableItem plugin={filteredDbPlugin} />
        </div>
      {/each}
    </div>
  {:else}
    <div
      class="container is-widescreen "
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}>
      <div class="notification has-text-centered">
        <h1>No results for the given search. 😞</h1>

      </div>
    </div>
  {/if}

</section>
