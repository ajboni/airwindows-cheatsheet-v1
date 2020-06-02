<script>
  import TableItem from "./TableItem.svelte";
  import db from "./database";
  const uniqueTypes = [...new Set(db.map(item => item.Type))];
  const uniqueUse = [...new Set(db.map(item => item.Use))];
  console.log(uniqueUse);
</script>

<style>
  .table-item {
    margin-bottom: 1rem;
  }
  .section-small {
    padding: 1rem;
  }

  .filter {
    max-width: 170px;
  }
</style>

<section class="section-small has-background-grey-light has-text-white">

  <div class="field is-grouped is-grouped-multiline is-grouped-centered">

    <div class="control filter is-expanded has-icons-left has-icons-right">
      <input class="input is-small" type="search" placeholder="Search" />
      <span class="icon is-small is-left">
        <i class="fas fa-search" />
      </span>
    </div>
    <div class="control filter has-icons-left has-icons-right">
      <div class="select is-small">
        <select>

          <option>Sort by Name</option>
          <option>Sort by Type</option>
          <option>Sort by Usage</option>

        </select>
        <span class="icon is-small is-left">
          <i class="fas fa-sort" />
        </span>
      </div>
    </div>
    <div class="control has-icons-right">
      <div class="select is-small">
        <select>
          <option>All Uses</option>
          {#each uniqueUse as item}
            <option value="item">{item}</option>
          {/each}
        </select>
      </div>
    </div>

    <div class="control has-icons-right">
      <div class="select is-small">
        <select>

          <option>All Types</option>
          {#each uniqueTypes as item}
            <option value="item">{item}</option>
          {/each}
        </select>
      </div>
    </div>

  </div>
</section>

<section class="section">
  <div class="container">
    {#each db as plugin}
      <div class="table-item">
        <TableItem {plugin} />
      </div>
    {/each}
  </div>
</section>
