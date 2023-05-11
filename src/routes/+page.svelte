<script>
  import ArrowIcon from '../lib/components/ArrowIcon.svelte';
  import cube_1 from '../lib/assets/landing/landing-diamond-1.png';
  import cube_2 from '../lib/assets/landing/landing-diamond-2.png';
  import Chart from '../lib/assets/landing/landing-line-chart.png';
  import nvidaLogo from '../lib/assets/landing/landing_nvida_logo.png';
  import fcLogo from '../lib/assets/landing/landing_fc_university.png';
</script>

<main>
  <div class="home-wrapper">
    <!-- Diagnostics section -->
    <div class="home-bg" />
    <section class="home-diagnostics-container">
      <div class="home-diagnostics-content">
        <h1>Diagnostics</h1>
        <h3>Human knowledge is needed. Industry 5.0!</h3>
        <p>
          The key of the next technical revolution. Let us imagine that we can detect and narrow
          upcoming errors and damages, before they really happen. We use our trained AI machines to
          achieve this.
        </p>
        <ArrowIcon />
      </div>
    </section>

    <!-- Preventive section -->
    <section class="home-section-preventive relative">
      <div class="home-preventive-content-container">
        <span class="cube-1">
          <img
            src={cube_1}
            alt="diamond"
          />
        </span>
        <div>
          <h2>Preventive Forecasting</h2>
          <p>
            The most important part of maintaining Engines, Machines and Production-Lines. For fast
            rectification of the error and damage, it is of advantage to have enough experienced
            technicians.
          </p>
          <h3>Real data from real environments for AI training.</h3>
        </div>
        <span class="cube-2">
          <img
            src={cube_2}
            alt="diamond"
          />
        </span>
        <ArrowIcon />
      </div>
    </section>

    <!-- Chart section  -->
    <section class="home-chart-section">
      <div class="home-chart-content-container">
        <div class="home-chart-content">
          <p>
            Downtime can cause significant productivity loss for factories, with most experiencing a
            minimum of <span>5%</span> and some losing up to <span>20%</span>.
          </p>
          <p>
            Unfortunately, nearly <span>80%</span> of companies are unable to accurately calculate the
            cost of downtime.
          </p>
          <h3>Your 1 minute ≈ $ 22,000 <br /> Your 1 hour ≈ $ 1.3 million</h3>
        </div>
        <div class="home-chart">
          <img
            src={Chart}
            alt="Chart that represents the productivity loss"
          />
        </div>
      </div>
      <ArrowIcon />
    </section>
    <section class="home-partner-section">
      <div class="home-partner-container">
        <h2>Partners & Supporters</h2>
        <div class="home-partner-logo-container">
          <div>
            <img
              src={nvidaLogo}
              alt="nvida logo"
            />
          </div>
          <div class="home-partner-fc">
            <img
              src={fcLogo}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

<style lang="scss">
  .home-wrapper {
    width: 100%;
    position: relative;
    padding-top: 5rem;

    .home-bg {
      background-image: url('../lib/assets/landing/landing-bg.png');
      min-height: 90vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: brightness(25%);
    }

    .home-diagnostics-container {
      width: 100%;
      position: absolute;
      color: aliceblue;
      top: 5rem;
      display: flex;
      flex-direction: column;
      margin-top: 4rem;

      .home-diagnostics-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2rem;

        h1 {
          font-size: 5rem;
          color: var(--brand-primary-red);
          padding: 1rem 0;
        }
         h3 {
          font-size: 2rem;
          color: var(--brand-primary-red);
          padding-bottom: 1rem;
        }
        p {
          width: 100%;
          max-width: 1000px;
          font-size: 1.5rem;
          
        }
      }
    }

    .home-section-preventive.relative {
      width: 100%;
      position: relative;
      color: #fafafa;
      margin: 5rem 0;

      .home-preventive-content-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 4rem 2rem;

        h2 {
          font-size: 4rem;
          color: var(--brand-primary-red);
        }
        p {
          width: 100%;
          max-width: 1000px;
          font-size: 1.5rem;
          padding-bottom: 1rem;
        }
        h3 {
          font-size: 2rem;
          color: var(--brand-primary-red);
        }

        .cube-1 {
          position: absolute;
          top: 50px;
          left: 80px;
          z-index: -10;
        }
        .cube-2 {
          position: absolute;
          top: 150px;
          right: 130px;
          z-index: -10;
        }
      }
    }

    .home-chart-section {
      width: 100%;
      color: #fafafa;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .home-chart-content-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;

      .home-chart-content {
        flex: 1;
        padding: 1rem;
        text-align: center;

        p {
          font-size: 1.5rem;
          padding-bottom: 1rem;

          span {
            color: var(--brand-primary-red);
            font-weight: 900;
          }
        }
        h3 {
          font-size: 2rem;
          color: var(--brand-primary-red);
        }
      }

      .home-chart {
        width: 700px;
        height: 500px;
        flex: 1;
        padding: 1rem;
      }
    }

    .home-partner-section {
      width: 100%;
      color: #fafafa;

      .home-partner-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
          font-size: 4rem;
          color: var(--brand-primary-red);
        }

        .home-partner-logo-container {
          padding: 3rem;
          display: flex;
          align-items: center;

          .home-partner-fc {
            width: 200px;
          }

          div {
            width: 370px;
            height: auto img {
              display: block;
              max-width: 100%;
            }
          }
        }
      }
    }
  }
</style>
