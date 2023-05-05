<script>
   import sit_logo from '$lib/assets/sit_logo.png';
   import ig from "$lib/assets/icons/instagram-icon.png";
   import linkedin from "$lib/assets/icons/linkedin-icon.png";
   import yt from "$lib/assets/icons/youtube-icon.png";
   
</script>

<footer>
  <!-- Left -->
  <div class="footer-logo">
    <div>
      <img src={sit_logo} alt="logo"/>
    </div>
    <div>
      <span>喜德科技有限公司</span>
      <span>S.I.T Technology</span>
    </div>
  </div>

  <!-- Middle -->
  <div class="footer-list">
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/product">Product</a>
    </li>
    <li>
      <a href="/news">News</a>
    </li>
    <li>
      <a href="/team">Team</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
  </ul>
    <ul>
    <li>
      <a href="#" target="_blank">
        <img src={ig} alt="SIT instagram"/>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/company/sit-technology" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="SIT Linkedin"/>
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/@SitTechnology" target="_blank" rel="noreferrer">
        <img src={yt} alt="SIT Youtube"/>
      </a>
    </li>
  </ul>
  </div>
  <!-- Right -->
  <div class="footer-contact">
    <a href="/contact">Contact</a>
  </div>
</footer>

<style lang="scss">
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid var(--brand-primary-red);
    padding: 1rem 4rem;
    color: white;

    .footer-logo {
      display: flex;
      gap: 1.5rem;
      div {
        display: flex;
        flex-direction: column;
      }
    }

    .footer-list {
      display: flex;
      gap: 5rem;
      ul {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        a {
          padding: 5px 10px;  
        &:hover {
          transition: all .3s ease-in-out;
          color: var(--brand-primary-red);
        }
        &:focus {
        outline: none;
        box-shadow: 0 0 0 3px var(--brand-primary-red);
      }
       }
      }
    }
    .footer-contact {
      a {
          padding: 5px 10px;
          font-weight: 800;
          border: 3px solid var(--brand-primary-red) ; 
          padding: 1rem 1.5rem; 
        &:hover {
          transition: all .3s ease-in-out;
          color: var(--brand-primary-red);
        }
        &:focus {
        outline: none;
        box-shadow: 0 0 0 3px var(--brand-primary-red);
        }
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
      padding: 2rem 0;

      .footer-logo {
        align-items: center;
      }
      .footer-list {
        flex-direction: column;
        gap: 2rem;
        ul {
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>
