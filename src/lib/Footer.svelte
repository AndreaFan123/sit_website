<script>
  import sit_logo from '$lib/assets/sit_logo.png';
  import ig from '$lib/assets/icons/instagram-icon.png';
  import linkedin from '$lib/assets/icons/linkedin-icon.png';
  import yt from '$lib/assets/icons/youtube-icon.png';
</script>

<footer>
  <div class="footer-wrapper">
    <div class="footer-social-container">
      <ul>
        <li>
          <a
            href="#"
            target="_blank"
          >
            <img
              src={ig}
              alt="SIT instagram"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/s-i-t--industries/about/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="SIT Linkedin"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@SitTechnology"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={yt}
              alt="SIT Youtube"
            />
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-nav-container">
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
    </div>
    <div class="footer-logo-contact-container">
      <div class="footer-logo-container">
        <img
          src={sit_logo}
          alt="logo"
        />
        <div>
          <span>喜德科技有限公司 | S.I.T Technology</span>
        </div>
      </div>
      <div>
        <p>&copy; 2023 S.I.T Industry</p>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    width: 100%;
    border-top: 2px solid #fe1359;

    .footer-wrapper {
      max-width: 1100px;
      min-height: 300px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      /* gap: 2rem; */
      padding: 2rem;

      .footer-social-container {
        ul {
          display: flex;
          justify-content: center;
          align-items: baseline;
          gap: 1.5rem;

          li a {
            border: 1px solid #fafafa;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            transition: transform 750ms;
            will-change: transform;

            &:hover,
            &:focus {
              border: 1px solid transparent;
              background-color: #fe1359;
              transform: translateY(-10px);
            }
          }
        }
      }
    }

    .footer-nav-container {
      width: 100%;
      ul {
        display: flex;
        gap: 2rem;
        li a {
          transition: transform 750ms;
          will-change: transform;
          &:hover,
          &:focus {
            color: #fe1359;
            transform: translateY(-10px);
          }
        }
      }

    @media screen and (max-width: 400px) {
          ul {
            display: flex;
            gap: 0;
            justify-content: space-around;
          }
        }
    }

    .footer-logo-contact-container {
      color: #fafafa;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      .footer-logo-container {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    @media screen and (max-width: 400px)  {
      .footer-logo-contact-container {
        gap:1rem;
      }
      .footer-logo-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      }
    }
  }
</style>
