<script>
  import Icon from "@iconify/svelte";
  import dataSource from '../../lib/assets/product/product-data.png'
  import telematics from '../../lib/assets/product/product-title-blue.png'
  import forecase from '../../lib/assets/product/product-title-yellow.png'
  import telematicsImg1 from '../../lib/assets/product/product-image-1.png'
  import telematicsImg2 from '../../lib/assets/product/product-image-2.png'
</script>

<main>
  <section>
    <h1>
      Unlocking Accurate Forecasting
    </h1>
    <p>Leveraging Human Knowledge and 
Careful Selection of Training Methods and Data Sets</p>
<div>
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" color="#fe1359" width="44" height="44" />
      </div>
  </section>
  
  <section>
    <h2>
      Data Source
    </h2>
    <p>Combining different Data to train our AI Machine, to detect upcoming errors.</p>
    <div>
      <img src={dataSource} alt='data '/>
    </div>
    <div>
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" color="#fe1359" width="44" height="44" />
      </div>
  </section>
  <section>
    <div>
      <img src={telematics} alt ='unique telematics'/>
    </div>
    <p>Is designed for Automotive, Repair-Shops, Fleets, Transportation, smart cities and Insurance companies. </p>
    <article>
      <div>
        <h4>A small computer</h4>
        <p>Software as well as Hardware is designed in-house by our own engineers. 
</p>
<div>
  <img src={telematicsImg1} alt='small computer designed in-house by our team'/>
</div>
      </div>
      <div>
        <h4>Smart central platform</h4>
        <p>We also designed our own platform to unite all the needed functions and information in one place. 
</p>
<div>
  <img src={telematicsImg2} alt='small computer designed in-house by our team'/>
</div>
      </div>
    </article>
  </section>
</main>

<style lang="scss">


</style>