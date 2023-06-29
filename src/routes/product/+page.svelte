<script>
  import Icon from "@iconify/svelte";
  import dataSource from '../../lib/assets/product/product-data.png'
  import telematics from '../../lib/assets/product/product-title-blue.png'
  import forecast from '../../lib/assets/product/product-title-yellow.png'
  import telematicsImg1 from '../../lib/assets/product/product-image-1.png'
  import telematicsImg2 from '../../lib/assets/product/product-image-2.png'
  import forecastImg1 from '../../lib/assets/product/product-image-3.png';
</script>

<svelte:head>
  <title>Our Product</title>
  <meta name="description" content="Our Product" />
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta content="S.I.T. Technologies Co., Ltd." property="og:site_name">

</svelte:head>

<main>
  <div class="product-section-wrapper">
  <section class="product-title-container">
    <h1>
      Unlocking Accurate Forecasting
    </h1>
    <p>Leveraging Human Knowledge and 
Careful Selection of Training Methods and Data Sets</p>
    <div class="product-icon">
      <Icon icon="material-symbols:keyboard-arrow-down-rounded" color="#fe1359" width="44" height="44" />
    </div>
  </section>
  
  <section class="product-data-source-container">
    <h2>
      Data Source
    </h2>
    <p>Combining different Data to train our AI Machine, to detect upcoming errors.</p>
    <div>
      <img src={dataSource} alt='data '/>
    </div>
    <div class="product-icon">
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" color="#fe1359" width="44" height="44" />
      </div>
  </section>
  <section class="product-telematics-container">
    <div>
      <img src={telematics} alt ='unique telematics'/>
    </div>
    <p class="product-telematics-subtitle">Is designed for Automotive, Repair-Shops, Fleets, Transportation, smart cities and Insurance companies. </p>
    <article>
      <div class="product-telematics-content">
        <h4>A small computer</h4>
        <p>Software as well as Hardware is designed in-house by our own engineers.</p>
      <div>
        <img src={telematicsImg1} alt='small computer designed in-house by our team'/>
      </div>
      </div>
      <div class="product-telematics-content">
          <h4>Smart central platform</h4>
          <p>We also designed our own platform to unite all the needed functions and information in one place. 
          </p>
        <div>
          <img src={telematicsImg2} alt='small computer designed in-house by our team'/>
        </div>
      </div>
    </article>
    <div class="product-icon">
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" color="#fe1359" width="44" height="44" />
    </div>
  </section>
  <section class="product-forecast-container">
        <div>
            <img src={forecast} alt="unique forecast"/>
        </div>
        <p>A new AI driven technology for Industries like Robotics IC - and Electric Engines and production plants.</p>
      <article>
        <div class="product-forecast-content">
          <h4>IC-Engine & Sensors </h4>
          <p>We installed 2 microphones and 1 vibration sensor to an Internal Combustion Engine.With this installations, we are able to record data in a real environment to train our AI-Machine.</p>
        </div>
        <div>
          <img src={forecastImg1} alt='Unique forecasting'/>
        </div>
      </article>
  </section>
</div>
</main>

<style lang="scss">
  main {
    width: 100%;
    .product-section-wrapper {
      max-width: 1200px;
      position: relative;
      margin: 0 auto;
    }
  }

  .product-icon {
    margin: 6rem 0;
  }

  .product-title-container {
    text-align: center;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 4rem;
      color: var(--brand-primary-red);
      padding: 0 4rem;
    }

    p {
      font-size: 2rem;
      /* color: var(--brand-primary-red); */
      color: var(--bright2);
      padding: 1rem 5rem;
    }

     @media screen and (max-width: 390px) {
      h1 {
        font-size: 3.5rem;
        padding: 0;
      }
      p {
        font-size: 1.5rem;
        padding: 1rem;
      }
    }

  }

  .product-data-source-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    h2 {
      font-size: 4rem;
      color: var(--brand-primary-red);
      padding: 0 4rem;
    }

    p {
      font-size: 2rem;
      color: var(--bright2);
      padding: 0 8rem;
      margin-bottom: 6rem;
    }

    img {
      width: 70%;
      margin: 0 auto;
      height: auto;
      object-fit: contain;
      margin-bottom: 6rem;
    }

    @media screen and (max-width: 760px) {
      p {
        padding: 0 4rem;
      }
      
      img {
        width: 80%;
        margin: 0 auto;
      }
    }

    @media screen and (max-width: 390px) {
      h2 {
        font-size: 3.5rem;
        padding: 0;
      }
      p {
        font-size: 1.5rem;
        padding: 1rem;
      }
      
      img  {
        width: 90%;
      }
    }
  }

  .product-telematics-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .product-telematics-subtitle {
      color: var(--bright2);
      font-size: 2rem;
      padding: 2rem 8rem;

      @media screen and (max-width: 760px) {
        padding: 1rem 4rem;
      }
      @media screen and (max-width: 390px) {
        font-size: 1.5rem;
        padding: 1rem;
      }
    }

    article {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 4rem 0;
      gap: 2rem;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;

        h4 {
          font-size: 1.5rem;
          color: var(--brand-primary-red);
        }
        p {
          color: var(--bright2);
          font-size: 1.2rem;
          padding: .5rem 3rem;
        }

        img {
          width: 100%;
          margin: 0 auto;
          object-fit: contain;
        }
      }
    }

    @media screen and (max-width: 760px) {
      p {
        padding: 0;
      }
      img {
        width: 80%;
        margin: 0 auto;
      }

      article {
        flex-direction: column;
        gap: 3rem;
      }
    }
  }

  .product-forecast-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
        color: var(--bright2);
        font-size: 2rem;
        padding: .5rem 3rem;
      }
    article {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 4rem 0;

      h4 {
        font-size: 1.5rem;
        color: var(--brand-primary-red)
      }

      p {
        font-size: 1rem;
      }

      .product-forecast-content {
        width: 70%;
      }
    }

    @media screen and (max-width: 760px) {
      p {
        padding: 0;
      }
      img {
        width: 80%;
        margin: 0 auto;
      }

      article {
        flex-direction: column;
        gap: 2rem;
      }
    }

    @media screen and (max-width: 390px) {
      p {
        font-size: 1.5rem;
        padding: 1rem;
      }

      img {
        width: 100%;
      } 
    }  
  }
</style>
