<script>
  // @ts-nocheck

  import sit_logo from '$lib/assets/sit_logo.png';
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';

  $: routeId = $page.route.id;

  const navLists = [
    {
      routeName: 'Home',
      url: '/',
    },
    {
      routeName: 'Product',
      url: '/product',
    },
    {
      routeName: 'News',
      url: '/news',
    },
    {
      routeName: 'Team',
      url: '/team',
    },
    {
      routeName: 'Contact',
      url: '/contact',
    },
  ];

  let mobileMenuOpen = false;
</script>

<header
  class="header-wrapper"
  role="navigation"
>
  <div class="header-container">
    <div class="header-logoText">
      <div class="header-logoImg">
        <img
          src={sit_logo}
          alt="S.I.T Tech"
        />
      </div>
      <a href="/">喜德科技有限公司 | S.I.T. Technology</a>
    </div>
    <nav
      aria-label="desktop-navigation"
      class="desktop-navigation"
    >
      <ul>
        {#each navLists as { routeName, url }}
          <li>
            <a
              href={url}
              class:active={routeId === url}
              title={routeName}>{routeName}</a
            >
          </li>
        {/each}
      </ul>
    </nav>
    {#if mobileMenuOpen}
      <nav aria-label="mobile-navigation" class="mobile-navigation" transition:fly={{ x: '100%' }}>
        <ul>
          {#each navLists as { routeName, url }}
            <li>
              <a
                href={url}
                class:active={routeId === url}
                title={routeName}>{routeName}</a
              >
            </li>
          {/each}
        </ul>
         <button
      aria-label="Cancel button"
      class="mobile-cancel-btn"
      on:click={() => (mobileMenuOpen = false)}
    >
      <Icon
        icon="ic:round-cancel"
        color="#fe1359"
        width="30"
        height="30"
      />
    </button>
      </nav>
    {/if}
    <button
      aria-label="Hambuger button"
      class="mobile-ham-btn"
      on:click={() => (mobileMenuOpen = true)}
    >
      <Icon
        icon="material-symbols:menu-rounded"
        color="#fe1359"
        width="30"
        height="30"
      />
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
    position: fixed;
    background-color: black;

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

        @media screen and (max-width: 600px) {
          a {
            display: none;
          }
        }

        a {
          &:hover {
            transition: all 0.3s ease-in-out;
            color: var(--brand-primary-red);
          }
        }
       }
      }
    }

    /* Main-nav */

    .desktop-navigation {
      display: block;

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
              color: var(--brand-primary-red);
            }
            &:hover {
              color: var(--brand-primary-red);
              transition: all 0.3s ease-in 0s;
            }

            &:focus {
              outline: none;
              box-shadow: 0 0 0 3px var(--brand-primary-red);
            }
            &:after {
              content: '';
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
      }
      @media screen and (max-width:700px) {
        display: none;
      }
    }

    .mobile-navigation {
      position: relative;
      top: 150px;
      left:130px;
      height: 50vh;
      width: 240px;
      background-color: black;
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      align-items: center;
      padding-top: 3rem;
      box-shadow: -2px 0px 6px -1px rgba(79, 79, 79, 0.429);
      border-radius: 5;

      ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        color: #fafafa;
        padding-top: 2rem;
        font-size: 1.2rem;
        li {
          a {
            position: relative;
            font-weight: 800;
            padding: 5px 10px;

            &.active {
              color: var(--brand-primary-red);
            }
            &:hover {
              color: var(--brand-primary-red);
              transition: all 0.3s ease-in 0s;
            }

            &:focus {
              outline: none;
              box-shadow: 0 0 0 3px var(--brand-primary-red);
            }
            &:after {
              content: '';
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
      }
    }

    .mobile-ham-btn {
      display: none;

      @media screen and (max-width:700px) {
        display: block;
      }
    }
</style>
