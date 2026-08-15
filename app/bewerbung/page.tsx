"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const MAX_VIDEO_SIZE_MB = 10;
const MAX_VIDEO_SIZE_BYTES = MAX_VIDEO_SIZE_MB * 1024 * 1024;

export default function Bewerbung() {
  const [videoName, setVideoName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isUploadingVideo, setIsUploadingVideo] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formKey =
    process.env.NEXT_PUBLIC_FORMSPREE_LIFEGUARD_FORM_ID || "xaewjwlr";
  const [state, handleSubmit] = useForm(formKey);

  const uploadVideoToServer = async (file: File) => {
    console.info("[Bewerbung] Starting secure Cloudinary upload", {
      fileName: file.name,
      fileSizeBytes: file.size,
      fileType: file.type,
    });

    const uploadFormData = new FormData();
    uploadFormData.append("file", file, file.name);

    const uploadResponse = await fetch("/api/cloudinary-upload", {
      method: "POST",
      body: uploadFormData,
    });

    const uploadJson = (await uploadResponse.json()) as {
      secure_url?: string;
      error?: string;
    };

    console.info("[Bewerbung] Server upload response", {
      status: uploadResponse.status,
      ok: uploadResponse.ok,
      hasSecureUrl: Boolean(uploadJson.secure_url),
      errorMessage: uploadJson.error || null,
    });

    if (!uploadResponse.ok || !uploadJson.secure_url) {
      throw new Error(
        uploadJson.error ||
          "Der Video-Upload konnte nicht verarbeitet werden. Bitte versuche es erneut.",
      );
    }

    return uploadJson.secure_url;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const formElement = event.currentTarget;
    const fileInput =
      formElement.querySelector<HTMLInputElement>("#vorstellungsvideo");
    const selectedFile = fileInput?.files?.[0];
    const payload = new FormData(formElement);

    console.info("[Bewerbung] Submit started", {
      hasVideo: Boolean(selectedFile),
      fileSizeBytes: selectedFile?.size || 0,
      formKey,
    });

    if (selectedFile && selectedFile.size > MAX_VIDEO_SIZE_BYTES) {
      console.warn("[Bewerbung] Submit blocked: video too large", {
        fileSizeBytes: selectedFile.size,
        maxSizeBytes: MAX_VIDEO_SIZE_BYTES,
      });
      setSubmitError(
        `Das Video ist zu groß. Bitte lade eine Datei unter ${MAX_VIDEO_SIZE_MB} MB hoch.`,
      );
      return;
    }

    try {
      if (selectedFile) {
        setIsUploadingVideo(true);
        const uploadedVideoUrl = await uploadVideoToServer(selectedFile);
        setVideoUrl(uploadedVideoUrl);
        payload.append("Vorstellungsvideo_URL", uploadedVideoUrl);
        payload.append("Vorstellungsvideo_Dateiname", selectedFile.name);
      } else {
        payload.append("Vorstellungsvideo_URL", "Nicht hochgeladen");
      }

      console.info("[Bewerbung] Sending payload to Formspree", {
        hasVideoUrlField: Boolean(payload.get("Vorstellungsvideo_URL")),
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
      setIsUploadingVideo(false);
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

        {/* 05 Video */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold text-slate-400">05</span>

            <h2 className="mt-1 text-2xl font-bold">
              Deine 60-Sekunden-Vorstellung 🎥
            </h2>

            <p className="mt-3 text-slate-600">
              Wir möchten dich gerne persönlich kennenlernen.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <div className="text-4xl">🎥</div>

            <h3 className="mt-4 font-bold">Stelle dich kurz vor</h3>

            <p className="mx-auto mt-2 max-w-lg text-sm text-slate-500">
              Erzähle uns in maximal 60 Sekunden, wer du bist, welche Erfahrung
              du hast und warum du bei Probäder Service arbeiten möchtest.
            </p>

            <label className="mt-6 inline-block cursor-pointer rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700">
              Video auswählen
              <input
                id="vorstellungsvideo"
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    setVideoName(file.name);
                  }
                }}
              />
            </label>

            {videoName && (
              <p className="mt-4 text-sm font-semibold text-green-700">
                ✓ {videoName}
              </p>
            )}

            {videoUrl && (
              <p className="mt-2 break-all text-xs text-green-700">
                Video-Link bereit: {videoUrl}
              </p>
            )}

            <p className="mt-4 text-xs text-slate-400">
              Maximale Länge: 60 Sekunden
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Empfohlen: Datei kleiner als {MAX_VIDEO_SIZE_MB} MB
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
            disabled={state.submitting || isUploadingVideo}
            className="mt-8 w-full rounded-xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-200"
          >
            {isUploadingVideo
              ? "Video wird hochgeladen..."
              : state.submitting
                ? "Sende..."
                : "Bewerbung absenden →"}
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
