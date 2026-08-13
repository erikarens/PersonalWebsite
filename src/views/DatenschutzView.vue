<script lang="ts" setup>
import LegalLayout from "@/components/LegalLayout.vue";
</script>

<template>
  <LegalLayout
    title="Datenschutzerklärung"
    eyebrow="Informationen nach Art. 13 DSGVO"
  >
    <p class="mono note muted">Stand: August 2026</p>

    <section class="block">
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <p>
        Erik Arens<br />
        Friedrich-Karl-Straße 103<br />
        50735 Köln<br />
        Deutschland<br /><br />
        E-Mail:
        <a href="mailto:erik.arens@netzhero.de">erik.arens@netzhero.de</a>
      </p>
      <p>
        Ein Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen
        Voraussetzungen hierfür nicht vorliegen.
      </p>
    </section>

    <section class="block">
      <h2>2. Grundsätzliches zu dieser Website</h2>
      <p>
        Diese Website ist eine rein informatorische Internetpräsenz. Sie setzt
        <strong>keine Cookies</strong>, verwendet
        <strong>keine Analyse-, Tracking- oder Werbedienste</strong>, bindet
        <strong>keine Inhalte von Drittanbietern</strong> ein und speichert
        keine Daten in Ihrem Browser (kein Local Storage, kein Session Storage).
        Es findet kein Zugriff auf Endgeräteinformationen im Sinne des § 25
        TDDDG statt; eine Einwilligung ist daher nicht erforderlich.
      </p>
      <p>
        Verwendete Schriftarten werden ausschließlich vom eigenen Server
        ausgeliefert. Eine Verbindung zu externen Font-Diensten (z.&nbsp;B.
        Google Fonts) findet nicht statt.
      </p>
    </section>

    <section class="block">
      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        3.1 Diese Website wird gehostet bei der Hetzner Online GmbH,
        Industriestr. 25, 91710 Gunzenhausen, Deutschland. Die Verarbeitung
        erfolgt auf Servern innerhalb der Europäischen Union. Mit dem Hoster
        wurde ein Vertrag über die Auftragsverarbeitung gemäß Art. 28 DSGVO
        geschlossen.
      </p>
      <p>
        3.2 Bei jedem Aufruf dieser Website werden durch den Hoster automatisch
        Daten in Server-Logfiles erfasst, die Ihr Browser technisch bedingt
        übermittelt:
      </p>
      <p>
        – IP-Adresse des anfragenden Endgeräts<br />
        – Datum und Uhrzeit des Zugriffs<br />
        – Name und URL der abgerufenen Datei<br />
        – übertragene Datenmenge und Meldung über den Abrufstatus<br />
        – verwendeter Browsertyp und dessen Version<br />
        – Betriebssystem des Endgeräts<br />
        – zuvor besuchte Seite (Referrer-URL)
      </p>
      <p>
        3.3 Diese Verarbeitung ist technisch zwingend erforderlich, um die
        Website auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        Das berechtigte Interesse liegt im stabilen, funktionsfähigen und
        sicheren Betrieb der Website sowie in der Aufklärung und Abwehr von
        Angriffen. Eine Zusammenführung dieser Daten mit anderen Datenquellen
        oder eine Auswertung zu Marketing- oder Profilbildungszwecken findet
        nicht statt.
      </p>
      <!-- TODO vor Deploy: tatsächliche Löschfrist der Logfiles in der Hetzner-Konfiguration
           bzw. im AV-Vertrag verifizieren und den folgenden Zeitraum daran anpassen. -->
      <p>
        3.4 Die Logfiles werden spätestens nach 30 Tagen gelöscht. Eine längere
        Speicherung erfolgt nur, soweit dies zur Aufklärung eines konkreten
        Sicherheitsvorfalls erforderlich ist; die betroffenen Daten werden in
        diesem Fall bis zur abschließenden Klärung von der Löschung ausgenommen.
      </p>
    </section>

    <section class="block">
      <h2>4. Kontaktaufnahme per E-Mail</h2>
      <p>
        4.1 Diese Website enthält kein Kontaktformular. Nehmen Sie per E-Mail
        Kontakt auf, werden die von Ihnen übermittelten Daten (insbesondere Ihre
        E-Mail-Adresse, Ihr Name sowie der Inhalt Ihrer Nachricht) zur
        Bearbeitung Ihres Anliegens verarbeitet.
      </p>
      <p>
        4.2 Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
        auf den Abschluss oder die Durchführung eines Vertrags gerichtet ist, im
        Übrigen Art. 6 Abs. 1 lit. f DSGVO aufgrund des berechtigten Interesses
        an der Beantwortung von Anfragen.
      </p>
      <p>
        4.3 Ihre Daten werden gelöscht, sobald Ihr Anliegen abschließend
        bearbeitet ist und der Löschung keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen. Für geschäftliche Korrespondenz
        gelten insbesondere die handels- und steuerrechtlichen
        Aufbewahrungsfristen nach § 257 HGB und § 147 AO.
      </p>
      <p>
        4.4 Bitte beachten Sie, dass der Versand unverschlüsselter E-Mails
        Sicherheitslücken aufweisen kann. Für vertrauliche Informationen
        empfiehlt sich ein anderer Übertragungsweg.
      </p>
    </section>

    <section class="block">
      <h2>5. Links zu externen Diensten</h2>
      <p>
        Diese Website verlinkt auf externe Profile (u.&nbsp;a. YouTube,
        LinkedIn, GitHub, X). Es handelt sich um einfache Textlinks; Inhalte
        dieser Anbieter werden nicht eingebettet und es werden beim bloßen
        Aufruf dieser Website keine Daten an die Anbieter übertragen. Erst wenn
        Sie einen solchen Link aktiv anklicken, gelangen Sie auf die Seite des
        jeweiligen Anbieters, auf dessen Datenverarbeitung wir keinen Einfluss
        haben und für die dessen eigene Datenschutzbestimmungen gelten.
      </p>
    </section>

    <section class="block">
      <h2>6. Verschlüsselung</h2>
      <p>
        Diese Website nutzt zum Schutz der Übertragung eine TLS-Verschlüsselung.
        Eine verschlüsselte Verbindung erkennen Sie an der Zeichenfolge
        „https://“ in der Adresszeile Ihres Browsers.
      </p>
    </section>

    <section class="block">
      <h2>7. Keine automatisierte Entscheidungsfindung</h2>
      <p>
        Eine automatisierte Entscheidungsfindung einschließlich Profiling im
        Sinne des Art. 22 DSGVO findet nicht statt.
      </p>
    </section>

    <section class="block">
      <h2>8. Ihre Rechte als betroffene Person</h2>
      <p>
        Sie haben uns gegenüber die folgenden Rechte hinsichtlich der Sie
        betreffenden personenbezogenen Daten:
      </p>
      <p>
        – Recht auf Auskunft (Art. 15 DSGVO)<br />
        – Recht auf Berichtigung (Art. 16 DSGVO)<br />
        – Recht auf Löschung (Art. 17 DSGVO)<br />
        – Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)<br />
        – Recht auf Datenübertragbarkeit (Art. 20 DSGVO)<br />
        – Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
      </p>
      <p>
        Zur Ausübung dieser Rechte genügt eine formlose Nachricht an die oben
        genannte E-Mail-Adresse.
      </p>
    </section>

    <section class="block">
      <h2>9. Widerspruchsrecht nach Art. 21 DSGVO</h2>
      <p>
        Soweit wir personenbezogene Daten auf Grundlage berechtigter Interessen
        gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeiten, haben Sie das Recht, aus
        Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
        Widerspruch gegen diese Verarbeitung einzulegen. Wir verarbeiten die
        betroffenen Daten dann nicht mehr, es sei denn, wir können zwingende
        schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
        Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung
        dient der Geltendmachung, Ausübung oder Verteidigung von
        Rechtsansprüchen.
      </p>
    </section>

    <section class="block">
      <h2>10. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Unbeschadet anderweitiger Rechtsbehelfe steht Ihnen nach Art. 77 DSGVO
        ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Die für
        uns zuständige Behörde ist:
      </p>
      <p>
        Landesbeauftragte für Datenschutz und Informationsfreiheit
        Nordrhein-Westfalen<br />
        Kavalleriestraße 2–4<br />
        40213 Düsseldorf<br />
        <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener"
          >www.ldi.nrw.de</a
        >
      </p>
    </section>

    <section class="block">
      <h2>11. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir passen diese Datenschutzerklärung an, sobald Änderungen der von uns
        eingesetzten Technik oder der Rechtslage dies erforderlich machen. Es
        gilt jeweils die auf dieser Seite abrufbare Fassung.
      </p>
    </section>
  </LegalLayout>
</template>

<style scoped>
.note {
  font-size: 13px;
  margin-bottom: 32px;
}

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

.block strong {
  font-weight: 600;
  color: var(--text);
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
