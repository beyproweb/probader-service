export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Kopfzeile */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <div>
            <h1 className="text-lg font-bold tracking-tight sm:text-2xl">
              Probäder Service
            </h1>
            <p className="text-xs text-slate-500 sm:text-sm">
              Professioneller Rettungsschwimmer-Service
            </p>
          </div>

          <a
            href="#kontakt"
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Startbereich */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
            Sicherheit · Qualität · Vertrauen
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Professioneller Rettungsschwimmer-Service für sichere Bäder.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Probäder Service bietet zuverlässiges und professionelles
            Rettungsschwimmer-Personal für Schwimmbäder, Hotels und
            Freizeiteinrichtungen.
          </p>

          {/* Die zwei Hauptbereiche */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="/baeder"
              className="w-full rounded-xl bg-slate-900 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-slate-700 sm:w-auto sm:px-8 sm:py-4"
            >
              🏊 Für Bäder & Einrichtungen
            </a>

            <a
              href="/bewerbung"
              className="w-full rounded-xl border-2 border-slate-900 px-6 py-3.5 text-center font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto sm:px-8 sm:py-4"
            >
              🛟 Rettungsschwimmer werden
            </a>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section
        id="baeder"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20"
      >
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Unsere Leistungen</h2>

          <p className="mt-2 text-sm text-slate-600 sm:mt-3 sm:text-base">
            Professionelle Lösungen für den sicheren Betrieb Ihrer Einrichtung.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">🛟</span>
              <h3 className="text-lg font-bold sm:text-xl">
                Qualifizierte Rettungsschwimmer
              </h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Zuverlässiges und geschultes Personal für Ihre Schwimmbadanlage.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">🏊</span>
              <h3 className="text-lg font-bold sm:text-xl">
                Für Bäder & Hotels
              </h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Flexible Personallösungen für Schwimmbäder, Hotels, Resorts und
              Freizeiteinrichtungen.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">✓</span>
              <h3 className="text-lg font-bold sm:text-xl">
                Sicherheit an erster Stelle
              </h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Unser Fokus liegt auf Sicherheit, Zuverlässigkeit und
              professionellem Service.
            </p>
          </div>
        </div>
      </section>

      {/* Bewerbung */}
      <section id="bewerbung" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold leading-tight sm:text-4xl">
            Du möchtest Rettungsschwimmer werden?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-base">
            Werde Teil von Probäder Service und informiere dich über unsere
            aktuellen Möglichkeiten.
          </p>

          <a
            href="/bewerbung"
            className="mt-6 inline-block w-full rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-200 sm:mt-8 sm:w-auto sm:px-8 sm:py-4"
          >
            Jetzt bewerben →
          </a>
        </div>
      </section>

      {/* Kontakt */}
      <section
        id="kontakt"
        className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-20"
      >
        <h2 className="text-2xl font-bold sm:text-3xl">Kontakt</h2>

        <p className="mt-2 text-sm text-slate-600 sm:mt-3 sm:text-base">
          Sie möchten mehr über unseren Service erfahren?
        </p>

        <p className="mt-4 text-base font-semibold sm:mt-6">Probäder Service</p>
      </section>

      {/* Fußzeile */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 sm:py-8 sm:text-sm">
        © 2026 Probäder Service · Alle Rechte vorbehalten
      </footer>
    </main>
  );
}
