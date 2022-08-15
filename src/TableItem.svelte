<script>
  import config from "./config";
  export let plugin;

  // Provides override option if autogenereated url does not work.
  $: url = plugin.Url
    ? plugin.Url
    : config.AIRWINDOWS_SITE + plugin.Name.toLowerCase();
</script>

<style>
  .card-header {
    box-shadow: 0 0 0.25em rgba(10, 10, 10, 0.1);
  }

.card-content { 
    background-color: #22262E !important;
  }
    
  .card-content > .comments {
    font-size: 0.85rem;
    white-space: pre-wrap;
  }

  .card-content > .content {
    white-space: pre-wrap;
  }

  span.icon {
    margin-right: 0.25rem;
  }
</style>

{#if plugin && plugin.Name}

  <div class="card has-background-dark">
    <a href={url} target="_blank">
      <header class="card-header has-background-info">
        <p class="card-header-title is-dark has-text-light">{plugin.Name}</p>

        <div class="card-header-icon">
          <div class="tags has-addons">
            <span class="tag is-dark">{plugin.Use}</span>
            <span class="tag is-primary">{plugin.Type}</span>

          </div>
        </div>
      </header>
    </a>
    <div class="card-content has-text-light">
      <div class="content">{plugin.Description}</div>
      {#if plugin.Comments}
        <div class="comments">
          <span class="icon has-text-primary is-size-6 ">
            <i class="fas fa-comments" aria-hidden="true" />
          </span>
          {plugin.Comments}
        </div>
      {/if}
    </div>
    <!-- <footer class="card-footer has-background-white-bis">
    <p class="card-footer-item">
      <span class="icon has-text-info">
        <i class="fas fa-info-circle" aria-hidden="true" />
      </span>
      Download
    </p>
    <p class="card-footer-item ">
      <span class="icon has-text-danger">
        <i class="fab fa-youtube" aria-hidden="true" />
      </span>
      Video
    </p>
  </footer> -->
  </div>
{/if}
