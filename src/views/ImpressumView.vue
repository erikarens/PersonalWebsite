<script lang="ts" setup>
import LegalLayout from "@/components/LegalLayout.vue";
</script>

<template>
  <LegalLayout title="Impressum" eyebrow="Angaben gemäß § 5 TMG">
    <section class="block">
      <h2>Anbieter</h2>
      <p>
        Erik Arens<br />
        Inhaber: Erik Arens<br />
        Friedrich-Karl-Straße 103<br />
        50735 Köln<br />
        Deutschland
      </p>
    </section>

    <section class="block">
      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:erikarens@netzhero.de">erik.arens@netzhero.de</a>
      </p>
    </section>

    <!-- TODO: Neue USt-IdNr. vom Finanzamt eintragen, sobald erteilt (§5 Abs. 1 Nr. 6 TMG). Alte DE327223984 ist inaktiv. -->
    <!-- <section class="block">
      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>DE...</p>
    </section> -->

    <section class="block">
      <h2>Verantwortlich gemäß § 55 Abs. 2 RStV</h2>
      <p>
        Erik Arens<br />
        Friedrich-Karl-Straße 103<br />
        50735 Köln<br />
      </p>
    </section>

    <section class="block">
      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>.
      </p>
      <p>
        Wir sind bereit, an einem außergerichtlichen Schlichtungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        Zuständig ist die Allgemeine Verbraucherschlichtungsstelle des Zentrums für Schlichtung e.V.,
        Straßburger Straße 8, 77694 Kehl am Rhein,
        <a href="https://www.verbraucher-schlichter.de" target="_blank" rel="noopener">www.verbraucher-schlichter.de</a>.
      </p>
    </section>
  </LegalLayout>
</template>

<style scoped>
.block {
  margin-bottom: 32px;
  max-width: 65ch;
}

.block h2 {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.005em;
  margin-bottom: 10px;
  color: var(--text);
}

.block p {
  font-size: 15px;
  line-height: 1.65;
  margin-bottom: 12px;
}

.block a {
  color: var(--accent);
  border-bottom: 1px solid var(--hairline);
  word-break: break-word;
}

.block a:hover {
  border-bottom-color: var(--accent);
}
</style>
