<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const _target = el.dataset.target;
          const $target = document.getElementById(_target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
</script>

<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item has-text-primary" href="/">
      <span class="icon has-text-primary is-size-3 ">
        <i class="fas fa-headphones" aria-hidden="true" />
      </span>
      <span class="separator" />
      <span>Home</span>
    </a>

    <a
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a href="https://airwindows.com" target="blanl" class="navbar-item">
        Airwindows
      </a>
      <a
        href="https://github.com/ajboni/airwindows-cheatsheet/issues"
        target="_blank"
        class="navbar-item"
      >
        Suggest Update
      </a>
      <a
        href="https://github.com/ajboni/airwindows-cheatsheet#how-to-contribute"
        target="_blank"
        class="navbar-item"
      >
        <span class="icon is-size-5">
          <i class="fab fa-github" aria-hidden="true" />
        </span>
        <span class="separator-small" />
        <span>Contribute!</span>
      </a>
    </div>
  </div>
</nav>

<style>
  .separator {
    margin-right: 1rem;
  }

  .separator-small {
    margin-right: 0.3rem;
  }
</style>
