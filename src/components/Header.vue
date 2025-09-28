<script lang="ts">
export default {};
</script>

<template>
  <div class="content-container header">
    <p class="lh-n primary primary-r f15">Hi, my name is</p>
    <h1 class="lh-n normal primary-b f60">Erik Arens</h1>
    <h2 class="lh-n accent primary-b f60">Software Developer & Founder</h2>
    <p class="primary-l accent f20">
      I build software solutions and run my own businesses. Specialized in .NET,
      Angular, and React Native. Passionate about solving real-world problems
      through technology and entrepreneurship.
    </p>
    <div class="cta-container">
      <a
        href="https://github.com/erikarens"
        class="secondary-l accent f20 cta-spacing profile-cta"
        target="_blank"
        >GitHub</a
      >
      <a
        href="https://www.linkedin.com/in/erik-arens-a48865195/"
        class="secondary-l accent f20 cta-spacing profile-cta"
        target="_blank"
        >LinkedIn</a
      >
      <a
        href="https://x.com/erikarens"
        class="secondary-l accent f20 cta-spacing profile-cta"
        target="_blank"
        >X / Twitter</a
      >
    </div>
  </div>
</template>

<style>
.cta-container {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-spacing {
  margin: 0;
}

.profile-cta {
  color: #c6c8cd;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid transparent;
}

.profile-cta:hover {
  color: #ffb800;
  border-color: #ffb80040;
  background-color: #ffb80010;
  transition: all 0.3s ease;
}

@media screen and (max-width: 600px) {
  .header {
    margin-top: 160px;
  }

  .cta-container {
    justify-content: center;
    gap: 15px;
  }

  .profile-cta {
    margin: 0;
    text-align: center;
  }
}
</style>
