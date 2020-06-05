<script>
  import config from "./config";
  export let plugin;
  let airwindowsSiteLink = config.AIRWINDOWS_SITE;
  let youtubeLink = config.AIRWINDOWS_YOUTUBE_QUERY;
  if (plugin.Name) {
    let airwindowsSiteLink = config.AIRWINDOWS_SITE + plugin.Name.toLowerCase();
    let youtubeLink =
      config.AIRWINDOWS_YOUTUBE_QUERY + plugin.Name.toLowerCase();
  }
</script>

<style>
  /* .separator {
    margin: 0 6px;
    width: 1px;
  } */

  .card-header {
    box-shadow: 0 0 0.25em rgba(10, 10, 10, 0.1);
  }

  .comments {
    font-size: 0.85rem;
  }
  /* 
  .card-footer-item {
    padding: 0.35rem;
  } */

  span.icon {
    margin-right: 0.25rem;
  }
</style>

<!-- content here -->

<div class="card">
  <a href={airwindowsSiteLink} target="_blank">
    <header class="card-header has-background-white-bis">
      <p class="card-header-title">{plugin.Name}</p>

      <div class="card-header-icon">
        <div class="tags has-addons">
          <span class="tag ">{plugin.Use}</span>
          <span class="tag is-primary">{plugin.Type}</span>

        </div>
      </div>
    </header>
  </a>
  <div class="card-content">
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
