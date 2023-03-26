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
  <div class="news-wrapper">
    <div class="news-title">
      <h1>NEWS Update</h1>
    </div>
    <ul class="news-image-container">
      {#each newsList as {title, imageUrl, logo, location, description}}
        <li id={title}>
          <div class="imge-container">
            <img src={imageUrl} alt={title}/>
          </div>
          <div class="image-description-container">
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div class="image-text-container">
              <div class="logo-container">
                <img src={logo} alt='sit logo'/>
              </div>
              <span class="image-location">{location}</span>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</main>

<style lang="scss">
  .main {
    width: 100%;
  }

  .news-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;

    .news-title {
      text-align: center;
      font-size: 1.5rem;
      color: var(--brand-primary-red);
      padding: 2rem 0;
    }
  }

  .news-image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0 1rem;

    li {
      width: 50%;
      display: flex;
      gap: 2rem;

    }
  }

  .imge-container {
    width: 400px;


    img {
      max-width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
    }
  }

  .image-description-container {
    color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .image-text-container{
      display: flex;
      align-items: center;
      gap: 1rem;

      .logo-container {
        width: 30px;
        
        img {
          width: 100%;
        }
      }
    }
  }

</style>