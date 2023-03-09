<script>
  import sit_logo from '$lib/assets/sit_logo.png';
</script>

<nav>
  <div>
    <a href="/">喜德科技有限公司 | S.I.T. Technology</a>
  </div>
  <div>
    <img src={sit_logo} alt="S.I.T Tech" />
  </div>
  <ul>
    <li><a href="/product">Product</a></li>
    <li><a href="/news">News</a></li>
    <li><a href="/team">Team</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<style lang="scss">
  nav {
    width: 100%;
    /* background-color: azure; */
    color: var(--bright1);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;

    ul {
      display: flex;
      justify-content: space-evenly;
      li {
        padding: 0 1.5rem;

        a {
          text-decoration: none;
          &:hover{
            transition: all 0.3s ease-in-out;
            color: var(--brand-primary-red);
            cursor: pointer;
          }
          &:focus {
            outline: 2px dashed var(--brand-primary-red);
            padding: .2rem;
          }
        }
      }
    }
  }
</style>
