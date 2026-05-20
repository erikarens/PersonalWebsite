<script lang="ts" setup>
import { RouterLink } from "vue-router";

defineProps<{
  title: string;
  eyebrow?: string;
}>();
</script>

<template>
  <main class="legal">
    <header class="top">
      <RouterLink to="/" class="mark mono">arens.</RouterLink>
      <RouterLink to="/" class="back mono muted">← zurück</RouterLink>
    </header>

    <article class="content fade-up d1">
      <p v-if="eyebrow" class="eyebrow mono muted">{{ eyebrow }}</p>
      <h1 class="title">{{ title }}</h1>
      <hr class="hairline" />
      <slot />
    </article>

    <footer class="bottom mono muted">
      <span>© Erik Arens</span>
      <span class="sep">·</span>
      <RouterLink to="/impressum">impressum</RouterLink>
      <span class="sep">·</span>
      <RouterLink to="/agb">agb</RouterLink>
    </footer>
  </main>
</template>

<style scoped>
.legal {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 32px clamp(20px, 5vw, 64px);
  max-width: 820px;
  margin: 0 auto;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 64px;
}

.mark {
  color: var(--accent);
  letter-spacing: 0.04em;
}

.back:hover {
  color: var(--accent);
}

.content {
  padding-bottom: 64px;
}

.eyebrow {
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: lowercase;
  margin-bottom: 12px;
}

.title {
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin-bottom: 28px;
}

.hairline {
  margin: 0 0 40px;
}

.bottom {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  padding-top: 32px;
  border-top: 1px solid var(--hairline);
}

.bottom a:hover {
  color: var(--accent);
}

.sep {
  opacity: 0.6;
}

@media (max-width: 600px) {
  .legal {
    padding: 24px 20px;
  }

  .top {
    margin-bottom: 40px;
  }
}
</style>
