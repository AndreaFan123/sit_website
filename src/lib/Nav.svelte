<script>
  import sit_logo from '$lib/assets/sit_logo.png';
  import { page } from '$app/stores';
  
  $: routeId = $page.route.id;

  const navLists = [
    {
      routeName: "Home",
      url: "/"
    },
    {
      routeName: "Product",
      url: "/product"
    },
    {
      routeName: "News",
      url: "/news"
    },
    {
      routeName: "Team",
      url: "/team"
    },
    {
      routeName: "Contact",
      url: "/contact"
    },
  ]
</script>

<header class="header-wrapper" role="navigation">
  <div class="header-container">
    <div class="header-logoText">
      <a href="/">喜德科技有限公司 | S.I.T. Technology</a>
    </div>
    <div class="header-logoImg">
      <img src={sit_logo} alt="S.I.T Tech" />
    </div>
    <nav class="header-nav-container" aria-label="desktop-navigation">
      <ul>
        {#each navLists as { routeName, url }}
          <li>
            <a href={url} class:active={routeId === url} title={routeName}>{routeName}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">

.header-wrapper {
  z-index: 100;
  margin: 0 auto;
  right: 0;
  left: 0;
  position: relative;
  min-height: 60px;
  border-bottom: 2px solid var(--brand-primary-red);;

  .header-container {
    margin: 0 auto;
    /* padding: 1rem 2rem; */
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Left: logo-text-link */
    .header-logoText {
      display: inline-block;

      a {
        display: inline-block;
        &:hover {
          transition: all .3s ease-in-out;
          color: var(--brand-primary-red);
        }
      }
    }
    /* Media Query */
    @media screen and (min-width: 1200px) {
      max-width: 1170px;
    }

    @media screen and (min-width: 992px) {
      height: 80px;
    }
  }
  
  /* Main-nav */
  .header-nav-container {
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 1rem;

    li {
      display: inline-block;
      
      a {
        display: inline-block;
        position: relative;
        font-weight: 800;
        padding: 5px 10px;  

      &.active {
        color:var(--brand-primary-red);
      }  
      &:hover {
        color:var(--brand-primary-red);
        transition: all 0.3s ease-in 0s;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px var(--brand-primary-red);
      }
	    &:after {
          content: "";
          display: block;
          position: absolute;
          width: 0;
          bottom: 0;
          height: 2px;
          margin: -5px 0;
          left: 0;
          background-color: var(--brand-primary-red);
          transition: all 0.3s ease-in 0s;
        }
          &:hover:after {
            width: 100%;
          }
}
      }

      /* Media Query */
      @media screen and (min-width: 992px)  {
        display: inline-flex;
      }
    }
  }
}

</style>
