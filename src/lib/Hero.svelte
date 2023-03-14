<script>
  import arrowDown from "../lib/assets/icons/arrow_down.svg";
</script>
<main>
  <div class="hero"></div>
  <div class="hero-container">
    <h1>Diagnostics</h1>
    <p>The most important part of maintaining Engines, Machines and Production-Lines. For fast rectification of the error and damage, it is of advantage to have enough experienced technicians.</p>
    <p>Human knowledge is needed. Industry 5.0!</p>
  </div>
  <div>
    <img src={arrowDown} alt="arrow down"/>
  </div>
</main>

<style lang="scss">
  .hero {
    width: 100%;
    min-height: 100vh;
    background-image: url("../lib//assets/landing/landing-bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter:brightness(25%);
    position: absolute;
    z-index: 0;
  }

  .hero-container {
    position: relative;
    z-index: 100;
    text-align: center;
    margin: 0 auto;
    max-width: 800px;

    h1 {
      color: var(--brand-primary-red);
      font-size: 5rem;
      padding-top: 9rem;
      padding-bottom: 2rem;
    }

    p {
      color: var(--bright2);
      font-size: 1.7rem;
      padding: 0 1rem;
    }

    :last-child {
      color: var(--brand-primary-red);
      font-weight: 800;
    }
  }


</style>