export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Kopfzeile */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Probäder Service
            </h1>
            <p className="text-sm text-slate-500">
              Professioneller Rettungsschwimmer-Service
            </p>
          </div>

          <a
            href="#kontakt"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Startbereich */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Sicherheit · Qualität · Vertrauen
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Professioneller Rettungsschwimmer-Service für sichere Bäder.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Probäder Service bietet zuverlässiges und professionelles
            Rettungsschwimmer-Personal für Schwimmbäder, Hotels und
            Freizeiteinrichtungen.
          </p>

          {/* Die zwei Hauptbereiche */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/baeder"
              className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-700"
            >
              🏊 Für Bäder & Einrichtungen
            </a>

            <a
              href="/bewerbung"
              className="rounded-xl border-2 border-slate-900 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              🛟 Rettungsschwimmer werden
            </a>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="baeder" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Unsere Leistungen</h2>

          <p className="mt-3 text-slate-600">
            Professionelle Lösungen für den sicheren Betrieb Ihrer Einrichtung.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="text-3xl">🛟</div>

            <h3 className="mt-5 text-xl font-bold">
              Qualifizierte Rettungsschwimmer
            </h3>

            <p className="mt-3 text-slate-600">
              Zuverlässiges und geschultes Personal für Ihre Schwimmbadanlage.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="text-3xl">🏊</div>

            <h3 className="mt-5 text-xl font-bold">Für Bäder & Hotels</h3>

            <p className="mt-3 text-slate-600">
              Flexible Personallösungen für Schwimmbäder, Hotels, Resorts und
              Freizeiteinrichtungen.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="text-3xl">✓</div>

            <h3 className="mt-5 text-xl font-bold">
              Sicherheit an erster Stelle
            </h3>

            <p className="mt-3 text-slate-600">
              Unser Fokus liegt auf Sicherheit, Zuverlässigkeit und
              professionellem Service.
            </p>
          </div>
        </div>
      </section>

      {/* Bewerbung */}
      <section id="bewerbung" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Du möchtest Rettungsschwimmer werden?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Werde Teil von Probäder Service und informiere dich über unsere
            aktuellen Möglichkeiten.
          </p>

          <a
            href="/bewerbung"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Jetzt bewerben →
          </a>
        </div>
      </section>

      {/* Kontakt */}
      <section
        id="kontakt"
        className="mx-auto max-w-6xl px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold">Kontakt</h2>

        <p className="mt-3 text-slate-600">
          Sie möchten mehr über unseren Service erfahren?
        </p>

        <p className="mt-6 font-semibold">Probäder Service</p>
      </section>

      {/* Fußzeile */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © 2026 Probäder Service · Alle Rechte vorbehalten
      </footer>
    </main>
  );
}
