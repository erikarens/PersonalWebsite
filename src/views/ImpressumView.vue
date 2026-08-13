<script lang="ts" setup>
import LegalLayout from "@/components/LegalLayout.vue";
</script>

<template>
  <LegalLayout title="Impressum" eyebrow="Angaben gemäß § 5 DDG">
    <section class="block">
      <h2>Anbieter</h2>
      <p>
        Erik Arens<br />
        handelnd unter der Geschäftsbezeichnung „Netzhero“<br />
        Friedrich-Karl-Straße 103<br />
        50735 Köln<br />
        Deutschland
      </p>
    </section>

    <section class="block">
      <h2>Kontakt</h2>
      <p>
        E-Mail:
        <a href="mailto:erik.arens@netzhero.de">erik.arens@netzhero.de</a>
      </p>
    </section>

    <section class="block">
      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
        DE327223984
      </p>
    </section>

    <section class="block">
      <h2>Verantwortlich gemäß § 18 Abs. 2 MStV</h2>
      <p>
        Erik Arens<br />
        Friedrich-Karl-Straße 103<br />
        50735 Köln<br />
      </p>
    </section>

    <section class="block">
      <h2>Streitschlichtung</h2>
      <p>
        Wir sind nicht verpflichtet und nicht bereit, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen (§ 36 Abs. 1 Nr. 1 VSBG).
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
