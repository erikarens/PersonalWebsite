<script lang="ts">
export default {};
</script>

<template>
  <div class="sidenav">
    <a
      href="https://github.com/erikarens"
      target="_blank"
      class="sidenav-icons"
    >
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
      class="sidenav-icons"
    >
      <img
        src="../assets/images/linkedin.png"
        alt="LinkedIn Profil Erik Arens"
        width="40"
      />
    </a>
    <a href="https://x.com/erikarens" target="_blank" class="sidenav-icons">
      <img
        src="../assets/images/x.jpg"
        alt="Twitter/X Profile Erik Arens"
        width="40"
        class="x-logo"
      />
    </a>
  </div>
</template>

<style>
.sidenav {
  width: 75px;
  position: fixed;
  z-index: 1;
  top: 45vh;
  left: 10px;
  overflow-x: hidden;
  padding: 8px 0;
  background: rgba(238, 238, 238, 0.048);
  border-radius: 10px;
  z-index: 3;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  display: block;
}

.sidenav-icons {
  transition: all 0.4s;
}
.sidenav-icons:hover {
  transition: all 0.3s ease-out;
  transform: scale(1.1);
}

.x-logo {
  border-radius: 5px;
}

@media screen and (max-width: 600px) {
  .sidenav {
    display: none;
  }
}

.github {
  filter: invert(99%) sepia(99%) saturate(0%) hue-rotate(6deg) brightness(112%)
    contrast(100%);
}
</style>
