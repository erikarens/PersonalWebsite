<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    mobileMenu: function () {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>

<template>
  <nav>
    <RouterLink to="/">
      <span class="heading-dot">.</span
      ><span class="secondary-el normal f20">Home()</span>
    </RouterLink>
    <RouterLink to="/#milestones">
      <span class="heading-dot">.</span
      ><span class="secondary-el normal f20">Milestones()</span>
    </RouterLink>
  </nav>
  <div
    id="hamburger-icon"
    v-bind:class="{ open: isOpen }"
    @click="mobileMenu()"
  >
    <div class="icon bar1"></div>
    <div class="icon bar2"></div>
    <div class="icon bar3"></div>
    <div class="mobile-menu">
      <RouterLink to="/" class="mobile-link">
        <span class="heading-dot">.</span
        ><span class="secondary-el normal f40">Home()</span>
      </RouterLink>
      <RouterLink to="/#milestones" class="mobile-link">
        <span class="heading-dot">.</span
        ><span class="secondary-el normal f40">Milestones()</span>
      </RouterLink>
      <div class="social-container">
        <a href="https://github.com/erikarens" target="_blank" class="social">
          <img
            src="../assets/images/github-sign.png"
            alt="Github Profil Erik Arens"
            width="40"
            class="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/erik-arens-a48865195/"
          target="_blank"
          class="social"
        >
          <img
            src="../assets/images/linkedin.png"
            alt="LinkedIn Profil Erik Arens"
            width="40"
          />
        </a>
        <a href="https://x.com/erikarens" target="_blank" class="social">
          <img
            src="../assets/images/x.jpg"
            alt="Twitter/X Profile Erik Arens"
            width="40"
            class="x-logo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
}

nav span:hover {
  color: #ffb800;
}

.social-container {
  margin: 10px;
  margin-top: 30px;
}

.social {
  margin: 5px;
}

/* Mobile Menu Settings */
#hamburger-icon {
  margin: auto 0;
  display: none;
  cursor: pointer;
}

#hamburger-icon div.icon {
  width: 35px;
  height: 3px;
  background-color: #c6c8cd;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 10px;
}

.open .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 6px);
  transform: rotate(-45deg) translate(-6px, 6px);
}
.open .bar2 {
  opacity: 0;
}
.open .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px, 8px);
  transform: rotate(45deg) translate(-6px, -8px);
}

.open .mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: 0.4s;
}
.mobile-menu {
  display: none;
  /* position: absolute; */
  position: fixed;
  top: 75px;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: #121827;
  padding: 15% 0;
  z-index: 2;
}

.mobile-link {
  margin: 15px 0;
}

.x-logo {
  border-radius: 5px;
}

@media only screen and (max-width: 900px) {
  nav {
    display: none;
  }

  #hamburger-icon {
    display: block;
  }
}
</style>
