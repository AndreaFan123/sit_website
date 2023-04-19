<script>
  // import contact_map from '../../lib/assets/contact/contact_map.png';
</script>
<main>
  <section class="contact-container">
    <div class="contact-bg"></div>
    <article>
      <h1>Let's Connect!</h1>
      <div>
        <h2>HQ Taiwan </h2>
        <p>S.I.T. Technologies Co., Ltd.</p>
      <p>喜德科技有限公司</p>
      </div>
      <div>
        <h2>Location</h2>
        <p>9F,3-2,YuanQu Street, Nankang District, 
Taipei, 11503,Taiwan, R.O.C</p>
<p>台北市南港區園區街3-2號9樓</p>
      </div>
      <div>
        <!-- <Icon icon="ic:outline-email" color="#fe1359" /> -->
      <h2>Email</h2>
      <a href = "mailto: info@sit-technology.com">info@sit-technology.com</a>
      </div>
    </article>
  </section>
</main>

<style lang="scss">
  .contact-container {
    width: 100%;
    position: relative;

    .contact-bg {
      background-image: url("../../lib/assets/contact/contact_map.png");
      min-height: 90vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: brightness(80%);
    }

    article {
      background-color: #000;
      border-radius: 5px;
      color: #fafafa;
      position: absolute;
      top: 20%;
      left: 5%;
      z-index: 100;
      padding: 2rem;
      text-align: center;
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      h1 {
        font-size: 3rem;
        color: var(--brand-primary-red);
      }

      @media screen and (max-width: 950px) {
        top: 10%;
        width: 60%;
      }

      @media screen and (max-width: 530px) {
        width: 80%;
        padding: 1.5rem;
      }

      @media screen and (max-width: 390px) {
        width: 80%;
        padding: 1rem;

        h1 {
          font-size: 2.5rem;
        }
      }
    }
  }
</style>