<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="home">
    <header class="top">
      <span class="mark mono fade-up d1">arens.</span>
      <nav class="topnav mono fade-up d1">
        <a
          href="https://www.youtube.com/@erikarensverified"
          target="_blank"
          rel="noopener"
          >yt</a
        >
        <a
          href="https://www.linkedin.com/in/erik-arens-a48865195/"
          target="_blank"
          rel="noopener"
          >in</a
        >
        <a href="https://github.com/erikarens" target="_blank" rel="noopener"
          >gh</a
        >
        <a href="https://x.com/erikarens" target="_blank" rel="noopener">x</a>
      </nav>
    </header>

    <section class="hero">
      <p class="eyebrow mono muted fade-up d2">Köln</p>

      <h1 class="name fade-up d3">Erik Arens</h1>

      <p class="role fade-up d4">
        Lead Dev. Gründer.<br />
        <span class="accent">AI Innovation Specialist.</span>
      </p>

      <p class="thesis fade-up d5">
        98 % der deutschen Unternehmen<br />
        nutzen KI noch nicht produktiv.<br />
        <span class="muted">Ich helfe das zu ändern.</span>
      </p>

      <div class="links mono fade-up d6">
        <a
          href="https://www.youtube.com/@erikarensverified"
          target="_blank"
          rel="noopener"
        >
          <span class="link-dot">·</span> youtube
        </a>
        <a
          href="https://www.linkedin.com/in/erik-arens-a48865195/"
          target="_blank"
          rel="noopener"
        >
          <span class="link-dot">·</span> linkedin
        </a>
        <a href="mailto:erik.arens@netzhero.de">
          <span class="link-dot">·</span> kontakt
        </a>
      </div>
    </section>

    <footer class="bottom mono muted fade-up d6">
      <span>© Erik Arens</span>
      <span class="sep">·</span>
      <RouterLink to="/impressum">impressum</RouterLink>
      <span class="sep">·</span>
      <RouterLink to="/datenschutz">datenschutz</RouterLink>
      <span class="sep">·</span>
      <RouterLink to="/agb">agb</RouterLink>
    </footer>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 32px clamp(20px, 5vw, 64px);
  max-width: 1200px;
  margin: 0 auto;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.mark {
  color: var(--accent);
  letter-spacing: 0.04em;
}

.topnav {
  display: flex;
  gap: 20px;
  color: var(--muted);
}

.topnav a {
  letter-spacing: 0.08em;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  padding: 6vh 0;
}

.eyebrow {
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: lowercase;
}

.name {
  font-size: clamp(56px, 11vw, 132px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--text);
}

.role {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.01em;
  max-width: 22ch;
}

.thesis {
  font-size: clamp(15px, 1.5vw, 18px);
  line-height: 1.55;
  max-width: 42ch;
  margin-top: 8px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 14px;
  margin-top: 16px;
  color: var(--muted);
}

.links a {
  position: relative;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
}

.links a:hover {
  border-bottom-color: var(--accent);
}

.link-dot {
  color: var(--accent);
  margin-right: 4px;
}

.bottom {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  padding-top: 32px;
}

.bottom a:hover {
  color: var(--accent);
}

.sep {
  opacity: 0.6;
}

@media (max-width: 600px) {
  .home {
    padding: 24px 20px;
  }

  .hero {
    gap: 24px;
    padding: 4vh 0;
  }

  .bottom {
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
