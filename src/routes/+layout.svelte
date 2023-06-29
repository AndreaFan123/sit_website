<script>
  import '../app.scss';
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Nav />
<div class="site-container">
  <slot />
</div>
<Footer />

<style>
  .site-container {
    padding-top: 80px;
  }
</style>
