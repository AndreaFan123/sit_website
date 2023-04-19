

<script>
  import Icon from "@iconify/svelte";
  import cube_1 from "../lib/assets/landing/landing-diamond-1.png";
  import cube_2 from "../lib/assets/landing/landing-diamond-2.png";
  import Chart from "../lib/assets/landing/landing-line-chart.png"

</script>
<main>
  <section class="section-container ">
    <div class="section-bg"></div>
    <div class="section-content-container">
      <div>
        <h1>Diagnostics</h1>
        <p>The key of the next technical revolution. Let us imagine that we can detect and narrow upcoming errors and damages, before they really happen. We use our trained AI machines to achieve this.</p>
        <h4>Human knowledge is needed. Industry 5.0!</h4>
      </div>
      <div >
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" color="#fe1359" width="44" height="44" />
      </div>
    </div>
  </section>
  <section class="section-container">
    <div class="section-content-container relative">
      <span class="cube-1">
        <img src={cube_1} alt="diamond"/>
      </span>
      <div >
        <h2>Preventive Forecasting</h2>
        <p>The most important part of maintaining Engines, Machines and Production-Lines. For fast rectification of the error and damage, it is of advantage to have enough experienced technicians.</p>
        <h4>Real data from real environments for AI training.</h4>
      </div>
      <span class="cube-2">
        <img src={cube_2} alt="diamond"/>
      </span>
      <div class="arrow-icon">
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" color="#fe1359" width="44" height="44" />
      </div>
    </div>
  </section>
  <section class="section-container">
    <div class="section-3-content">
      <div>
        <p>Downtime can cause significant productivity loss for factories, with most experiencing a minimum of <span>5%</span> and some losing up to <span>20%</span>.</p>
        <p>Unfortunately, nearly <span>80%</span> of companies are unable to accurately calculate the cost of downtime.</p>
        <h4>Your 1 minute ≈ $ 22,000 <br> Your 1 hour ≈ $ 1.3 million</h4>
      </div>
      <div class="section-content-chart">
        <img src={Chart} alt="Chart that represents the productivity loss"/>
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  .section-container {
    width: 100%;
    position: relative;

    .section-bg {
      background-image: url("../lib/assets/landing/landing-bg.png");
      min-height: 90vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter:brightness(25%);
    }
    .section-content-container {
      width: 100%;
      position: absolute;
      color: aliceblue;
      top: 0;
      display: flex;
      flex-direction: column;
      div {
        max-width: 1200px;
        margin: 4rem auto;
        padding: 2rem;
        text-align: center;

        h1,h2 {
          font-size: 5rem;
          color: var(--brand-primary-red);
          padding-bottom: 1rem;
        }
        p {
          width: 100%;
          max-width: 900px;
          font-size: 1.5rem;
          padding-bottom: 1rem;
        }
        h4 {
          font-size: 2rem;
          color: var(--brand-primary-red);
        }
        span {
          color: var(--brand-primary-red);
        }

          @media screen and (max-width:400px) {
            padding: 0;

            h1, h2 {
              font-size: 3.8rem;
            }

            p {
              width: 90%;
              margin-left: 1.2rem;
            }
        }
      }
    }
      @media screen and (maxi-width:400px) {
    .arrow-icon.svg {
      display: none;
    }
  }
  }

  .section-content-container.relative {
    position: relative;

    .cube-1 {
      position: absolute;
      top: 90px;
      left: 180px;
      z-index: -10;
    }
    .cube-2 {
      position: absolute;
      top: 230px;
      right: 250px;
      z-index: -10;
    }

    @media screen and (max-width:1200px) {
      .cube-1 {
        top: 70px;
        left: 100px;
      }
      .cube-2 {
        top: 280px;
        right: 90px; 
      }

      @media screen and (max-width:550px) {
        .cube-1 {
          width: 90px;
          top: 90px;
          left: 50px;
        }
        .cube-2 {
          width: 90px;
          top: 230px;
          right: 50px;
        }
      }

      @media screen and (max-width:390px)  {
        .cube-1 {
          top: 50px;
          left: 20px;
        }
        .cube-2 {
          top: 150px;
          right: 20px;
        }
      }

    }
  }

  .section-3-content {
    width: 100%;
    color: aliceblue;
    top: 0;
    display: flex;
    flex-direction: column;
    div {
      max-width: 1200px;
      margin: 4rem auto;
      padding: 2rem;
      text-align: center;

      h2 {
          font-size: 5rem;
          color: var(--brand-primary-red);
          padding-bottom: 1rem;
        }
        p {
          width: 100%;
          max-width: 900px;
          font-size: 1.5rem;
          padding-bottom: 1rem;
        }
        h4 {
          font-size: 2rem;
          color: var(--brand-primary-red);
        }
        span {
          color: var(--brand-primary-red);
        }
      }
  }
  .section-content-chart {
    width: 70%;
    /* height: 700px; */
    img {
      width: 100%;
      object-fit: contain;
    }
  }




</style> 