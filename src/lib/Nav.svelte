<script>
  import sit_logo from '$lib/assets/sit_logo.png';
  import Icon from "@iconify/svelte";
  
  import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';
  
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

  // Transition for mobile navbar
  let visible = true;
  let isMobileMenuOpen = false;

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    visible = !visible;
  }
</script>

<header class="header-wrapper" role="navigation">
  <div class="header-container">
    <div class="header-logoText">
      <div class="header-logoImg">
      <img src={sit_logo} alt="S.I.T Tech" />
      </div>
      <a href="/">喜德科技有限公司 | S.I.T. Technology</a>
    </div>
    <nav class:open={isMobileMenuOpen} aria-label="desktop-navigation">
      <ul>
        {#each navLists as { routeName, url }}
          <li>
            <a href={url} class:active={routeId === url} title={routeName}>{routeName}</a>
          </li>
        {/each}
      </ul>
    </nav>
    <button class="header-mobile-menu" on:click={toggleMobileMenu}>
      <Icon icon="material-symbols:menu-rounded" color="red" width="30" height="30"/>
    </button>
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
  border-bottom: 2px solid var(--brand-primary-red);
  padding: 0 2rem;

  .header-container {
    margin: 0 auto;
    padding: 0 rem;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Left: logo-text-link */
    .header-logoText {
      display: flex;
      align-items: center;
      gap: 1rem;

      @media screen and (max-width:775px) {
        display: none;
      }

      a {
        &:hover {
          transition: all .3s ease-in-out;
          color: var(--brand-primary-red);
        }
      }
    }

    .header-mobile-menu {
      display: none;

      @media screen and (max-width: 775px) {
        display: block;
        cursor: pointer;
      
      }
    }
  }
  
  /* Main-nav */

  nav {
    display: block;
    @media screen and (max-width: 700px) {
      display: none;
      &.open {
        display: block;
        position: absolute;
        width: 50%;
        height: 400px;
        background-color: black;
        top: 100%;
        right: 0;
        z-index: 1000;
      }

      ul {
        flex-direction: column;
        align-items:center;
        z-index: 100;
        font-size: 1.5rem;
        padding: 2rem 0;
      }
    }
  
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 1rem;

    li {
      a {
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
