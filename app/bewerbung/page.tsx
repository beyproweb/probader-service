"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Bewerbung() {
  const [submitError, setSubmitError] = useState("");
  const envLifeguardFormId =
    process.env.NEXT_PUBLIC_FORMSPREE_LIFEGUARD_FORM_ID || "";
  const hasPlaceholderFormId = envLifeguardFormId.includes(
    "your_lifeguard_form_id",
  );
  const formKey =
    !envLifeguardFormId || hasPlaceholderFormId
      ? "xaewjwlr"
      : envLifeguardFormId;
  const [state, handleSubmit] = useForm(formKey);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const formElement = event.currentTarget;
    const payload = new FormData(formElement);

    console.info("[Bewerbung] Submit started", {
      formKey,
      usedFallbackFormId: hasPlaceholderFormId || !envLifeguardFormId,
    });

    if (hasPlaceholderFormId) {
      console.warn(
        "[Bewerbung] Placeholder Formspree ID detected. Set NEXT_PUBLIC_FORMSPREE_LIFEGUARD_FORM_ID to your real ID in Vercel.",
      );
    }

    try {
      console.info("[Bewerbung] Sending payload to Formspree", {
        hasInterviewRequest: Boolean(payload.get("Interview_Termin")),
      });
      await handleSubmit(payload);
      console.info("[Bewerbung] Formspree submit completed", {
        succeeded: true,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte nicht gesendet werden. Bitte pruefe deine Verbindung und versuche es erneut.";
      console.error("[Bewerbung] Submit failed", {
        message,
      });
      setSubmitError(message);
    } finally {
      console.info("[Bewerbung] Submit finished");
    }
  };

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <div className="text-5xl">✅</div>

          <h1 className="mt-6 text-3xl font-bold">
            Vielen Dank für deine Bewerbung!
          </h1>

          <p className="mt-4 text-slate-600">
            Wir haben deine Angaben erhalten und werden deine Bewerbung
            sorgfältig prüfen.
          </p>

          <a
            href="/"
            className="mt-8 inline-block rounded-xl bg-slate-900 px-7 py-3 font-semibold text-white"
          >
            Zur Startseite
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center">
            <img
              src="/ChatGPT%20Image%20Aug%2014,%202026,%2004_15_31%20PM.png"
              alt="Probäder Service logo"
              className="h-12 w-auto object-contain sm:h-14"
            />
          </a>

          <a
            href="/"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            ← Zur Startseite
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-5xl">🛟</div>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Werde Teil von Probäder Service
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Du bist Rettungsschwimmer und möchtest Teil unseres Teams werden?
            Dann freuen wir uns auf deine Bewerbung.
          </p>
        </div>
      </section>

      {/* Application */}
      <form onSubmit={onSubmit} className="mx-auto max-w-4xl px-6 py-12">
        {/* 01 Persönliche Daten */}
        <section className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold text-slate-400">01</span>
            <h2 className="mt-1 text-2xl font-bold">Persönliche Daten</h2>
            <p className="mt-2 text-slate-500">
              Erzähle uns kurz, wer du bist.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="font-semibold">Vorname *</label>
              <input
                required
                type="text"
                name="Vorname"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                placeholder="Max"
              />
            </div>

            <div>
              <label className="font-semibold">Nachname *</label>
              <input
                required
                type="text"
                name="Nachname"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                placeholder="Mustermann"
              />
            </div>

            <div>
              <label className="font-semibold">E-Mail *</label>
              <input
                required
                type="email"
                name="E-Mail"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                placeholder="max@beispiel.de"
              />
            </div>

            <div>
              <label className="font-semibold">Telefonnummer *</label>
              <input
                required
                type="tel"
                name="Telefonnummer"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                placeholder="+49 ..."
              />
            </div>

            <div>
              <label className="font-semibold">Wohnort *</label>
              <input
                required
                type="text"
                name="Wohnort"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                placeholder="Berlin"
              />
            </div>

            <div>
              <label className="font-semibold">Alter *</label>
              <input
                required
                type="number"
                min="18"
                name="Alter"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
                placeholder="18"
              />
            </div>
          </div>
        </section>

        {/* 02 Qualifikationen */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold text-slate-400">02</span>
            <h2 className="mt-1 text-2xl font-bold">
              Erfahrung & Qualifikationen
            </h2>
            <p className="mt-2 text-slate-500">
              Erzähle uns von deiner bisherigen Erfahrung.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="font-semibold">
                Hast du bereits als Rettungsschwimmer gearbeitet? *
              </label>

              <select
                required
                name="Rettungsschwimmer_Erfahrung"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              >
                <option value="">Bitte auswählen</option>
                <option>Ja</option>
                <option>Nein</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">
                Wie lange hast du Erfahrung als Rettungsschwimmer?
              </label>

              <select
                name="Erfahrungsdauer"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              >
                <option value="">Bitte auswählen</option>
                <option>Noch keine Erfahrung</option>
                <option>Weniger als 1 Jahr</option>
                <option>1–2 Jahre</option>
                <option>3–5 Jahre</option>
                <option>Mehr als 5 Jahre</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">
                Welche Qualifikationen besitzt du?
              </label>

              <textarea
                rows={4}
                name="Qualifikationen"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="z. B. Rettungsschwimmer-Abzeichen, Erste Hilfe, weitere Qualifikationen..."
              />
            </div>

            <div>
              <label className="font-semibold">
                Welche Sprachen sprichst du?
              </label>

              <input
                type="text"
                name="Sprachen"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Deutsch, Englisch, ..."
              />
            </div>
          </div>
        </section>

        {/* 03 Verfügbarkeit */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold text-slate-400">03</span>
            <h2 className="mt-1 text-2xl font-bold">Verfügbarkeit</h2>
            <p className="mt-2 text-slate-500">
              Wann und wie möchtest du arbeiten?
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="font-semibold">
                Ab wann kannst du anfangen? *
              </label>

              <input
                required
                type="date"
                name="Startdatum"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="font-semibold">
                Welche Art von Beschäftigung suchst du? *
              </label>

              <select
                required
                name="Beschaeftigungsart"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              >
                <option value="">Bitte auswählen</option>
                <option>Vollzeit</option>
                <option>Teilzeit</option>
                <option>Saisonarbeit</option>
                <option>Minijob</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">
                Bist du bereit, an verschiedenen Standorten zu arbeiten?
              </label>

              <select
                name="Standortflexibilitaet"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              >
                <option value="">Bitte auswählen</option>
                <option>Ja</option>
                <option>Nein</option>
                <option>Je nach Entfernung</option>
              </select>
            </div>
          </div>
        </section>

        {/* 04 Situationsfragen */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold text-slate-400">04</span>
            <h2 className="mt-1 text-2xl font-bold">Situationsfragen</h2>

            <p className="mt-2 text-slate-500">
              Uns interessiert, wie du in verschiedenen Situationen handelst.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <label className="font-semibold">
                Was würdest du tun, wenn ein Badegast die Sicherheitsregeln
                nicht beachtet? *
              </label>

              <textarea
                required
                rows={4}
                name="Situationsfrage_Regeln"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Deine Antwort..."
              />
            </div>

            <div>
              <label className="font-semibold">
                Wie würdest du reagieren, wenn mehrere Personen gleichzeitig
                deine Aufmerksamkeit benötigen? *
              </label>

              <textarea
                required
                rows={4}
                name="Situationsfrage_Mehrere_Personen"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Deine Antwort..."
              />
            </div>

            <div>
              <label className="font-semibold">
                Was ist für dich die wichtigste Aufgabe eines
                Rettungsschwimmers? *
              </label>

              <textarea
                required
                rows={4}
                name="Situationsfrage_Wichtigste_Aufgabe"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Deine Antwort..."
              />
            </div>
          </div>
        </section>

        {/* 05 Video-Interview */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold text-slate-400">05</span>

            <h2 className="mt-1 text-2xl font-bold">
              Vorstellungsgespraech vereinbaren
            </h2>

            <p className="mt-3 text-slate-600">
              Wenn du in die engere Auswahl kommst, bestaetigen wir dir einen
              Video-Interview-Termin per E-Mail.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="font-semibold">
                Bevorzugter Zeitraum fuer das Video-Interview
              </label>
              <input
                type="text"
                name="Interview_Termin"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="z. B. naechste Woche, werktags ab 17 Uhr"
              />
            </div>

            <div>
              <label className="font-semibold">
                Wie sollen wir den Termin abstimmen?
              </label>
              <select
                name="Interview_Kontaktart"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              >
                <option value="">Bitte auswaehlen</option>
                <option>Per E-Mail</option>
                <option>Per Telefon und E-Mail-Bestaetigung</option>
              </select>
            </div>

            <p className="text-xs text-slate-500">
              Nach Eingang deiner Bewerbung melden wir uns per E-Mail zur
              Terminbestaetigung.
            </p>
          </div>
        </section>

        {/* 06 Absenden */}
        <section className="mt-8 rounded-3xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
          <span className="text-sm font-bold text-slate-400">06</span>

          <h2 className="mt-1 text-2xl font-bold">Bewerbung absenden</h2>

          <p className="mt-3 text-slate-300">
            Überprüfe deine Angaben und sende anschließend deine Bewerbung ab.
          </p>

          <label className="mt-8 flex gap-3 text-sm text-slate-300">
            <input
              required
              type="checkbox"
              name="Datenschutz_Bestaetigung"
              value="Ja"
              className="mt-1"
            />

            <span>
              Ich bestätige, dass meine Angaben korrekt sind und stimme der
              Verarbeitung meiner Daten zum Zweck der Bewerbung zu. *
            </span>
          </label>

          <ValidationError
            errors={state.errors}
            className="mt-4 text-sm text-red-300"
          />

          {submitError && (
            <p className="mt-4 text-sm text-red-300">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={state.submitting}
            className="mt-8 w-full rounded-xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-200"
          >
            {state.submitting ? "Sende..." : "Bewerbung absenden →"}
          </button>
        </section>
      </form>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        © 2026 Probäder Service · Alle Rechte vorbehalten
      </footer>
    </main>
  );
}
