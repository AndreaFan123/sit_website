<script>
  const coOwnerList = [
    {
      displayName:"Servet Şit",
      title: "Finance & Operations"
    },
    {
      displayName:"Mehmet Şit",
      title: "Founder & GM"
    },
    {
      displayName:"René Galle",
      title: "Platform & Technology"
    }
  ]
  const coProductOwnerList = [
    {
      displayName:"Salhi Heythem",
      title: "Embedded & Technology"
    },
    {
      displayName:"Yi Cheng Lu",
      title: "Data & Technology"
    },
    {
      displayName:"Andrea Fan",
      title: "Platform & Technology"
    }
  ]
</script>

<main>
  <div class="team-container">
    <ul>
      <h2>Co-Owner</h2>
      <div>
      {#each coOwnerList
       as {displayName, title}}
        <li>
          <h3>{displayName}</h3>
          <span>{title}</span>
        </li>
      {/each}
      </div>
    </ul>
    <ul>
      <h2>Co-Product Owner</h2>
              <div>
      {#each coProductOwnerList as {displayName, title}}

        <li>
          <h3>{displayName}</h3>
          <span>{title}</span>
        </li>
      {/each}
      </div>
    </ul>
  </div>
</main>

<style lang="scss">
  main {
    width: 100%;

    h1 {
      font-size: 3rem;
      text-transform: capitalize;
      color: var(--brand-primary-red);
      text-align: center;
    }
    .team-container {
      max-width: 1200px;
      margin: 0 auto;
      color: white;
      padding: 1.5rem;

      ul {
        text-align: center;
        margin-top: 2.5rem;
        margin-bottom: 4rem;

        h2 {
          margin: 1rem 0;
          font-size: 2.3rem;
          color: var(--brand-primary-red);
        }

        div {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9rem;

          h3 {
            /* color: var(--brand-primary-light);  */
            font-size: 2.2rem;
          }

          span {
            font-size: 1.5rem;
            background: -webkit-linear-gradient(#eee, #b7b6b6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
  }
</style>