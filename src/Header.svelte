<script>
  import db from "./database";
  let pluginCount = db.length;
</script>

<style>
  a {
    color: #3298dc;
  }
</style>

<section class="hero is-light">
  <div class="hero-body has-text-centered">
    <div class="container">
      <h1 class="title">Airwindows Cheatsheet</h1>
      <h2 class="subtitle">In a mix, no one can hear your screen.</h2>
      <p>
        This site is ment to be a quick reference for a constantly growing list
        of the
        <a href="https://www.airwindows.com">AirWindows Plugins.</a>
        <br />
        Info originally collected by Tiki Horea with help of the
        <a href="https://www.facebook.com/groups/111040482827627/">
          Airwindows Audiophiles Facebook Group.
        </a>
      </p>
      <br />
      <nav class="level ">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Plugins</p>
            <p class="title ">
              <span class="icon is-size-4">
                <i class="fas fa-headphones" aria-hidden="true" />
              </span>
              {pluginCount}
            </p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</section>
