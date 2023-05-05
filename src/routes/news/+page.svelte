<script>
  import sit_logo from '$lib/assets/sit_logo.png';
  import image_1 from '../../lib/assets/news/image-1.jpg';
  import image_2 from '../../lib/assets/news/image-2.jpg';
  import image_3 from '../../lib/assets/news/image-3.jpg';
  import image_4 from '../../lib/assets/news/image-4.jpg';
  import image_5 from '../../lib/assets/news/image-5.jpg';


  const newsList = [
    { 
      title: "Meet Taipei, Exhibition 2018.",
      imageUrl: image_4,
      logo: sit_logo,
      location: 'Taipei, Taiwan',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    { 
      title: "#1 APTG 5G  Accelerator Program.",
      imageUrl: image_5,
      logo: sit_logo,
      location: 'Taipei, Taiwan',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
      title: "Visit at Feng Chia University Laboratory.",
      imageUrl: image_3,
      logo: sit_logo,
      location: 'Nuremberg, Germany',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
      title: "Intro Video preparation at a Car Garage.",
      imageUrl: image_2,
      logo: sit_logo,
      location: 'Nuremberg, Germany',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
      title: "Visit IG Car Office.",
      imageUrl: image_1,
      logo: sit_logo,
      location: 'Taipei, Taiwan',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    }
  ]
</script>

<main>
 
    <ul class='news-wrapper'>
      <div class="news-title">
        <h1>NEWS Update</h1>
      </div>
      {#each newsList as {title, imageUrl, logo, location, description}}
        <li id={title} >
          <div class="news-imag-container">
            <img src={imageUrl} alt={title}/>
          </div>
          <div class="news-text-container">
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div class='news-logo-container'>
              <div >
                <img src={logo} alt='sit logo'/>
              </div>
              <span>{location}</span>
            </div>
          </div>
        </li>
      {/each}
      </ul>
</main>

<style lang="scss">
  main {
    width: 100%;

    .news-wrapper {
      position: relative;
      padding-top: 5rem;
    }

    .news-title {
      color: var(--brand-primary-red);
      font-size: 1.5rem;
      text-align: center;
      margin: 4rem 0;
    }

    li {
      display: flex;
      gap: 2rem;
      justify-content: center;
      padding-bottom: 3.5rem;
      @media screen and (max-width: 585px) {
        flex-direction: column;   
        align-items: center;
        gap: 1rem;
    }
  }
  .news-imag-container {
        width: 400px;
        img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 3px;
      }

      @media screen and (max-width: 585px) {
        width: 90%;
      }
    }
}



.news-text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;

  h2 {
    font-size: 1.5rem;
    color: var(--brand-primary-red);
  }
  p {
    font-size: 1.1rem;
    color: #fafafa;
  }

  @media screen and (max-width: 585px) {
    width: 90%;
    p {
      padding-bottom: 1.5rem;
    }
  }
}

.news-logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fafafa;

  img {
    width: 40px;
    max-width: 100%;
    height: auto;
  }
}
</style>