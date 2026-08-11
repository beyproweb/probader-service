export default function BaederPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            Probäder Service
          </a>

          <a
            href="/"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            ← Startseite
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Für Bäder & Einrichtungen
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Zuverlässige Rettungsschwimmer für Ihre Einrichtung.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Probäder Service unterstützt Schwimmbäder, Hotels, Resorts und
            Freizeiteinrichtungen mit professionellem und zuverlässigem
            Rettungsschwimmer-Personal.
          </p>

          <a
            href="#anfrage"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-200"
          >
            Personal anfragen →
          </a>
        </div>
      </section>

      {/* Vorteile */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Warum Probäder Service?</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Wir helfen Ihnen dabei, Ihre Gäste sicher und professionell zu
            betreuen.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="text-4xl">🛟</div>

            <h3 className="mt-5 text-xl font-bold">Qualifiziertes Personal</h3>

            <p className="mt-3 text-slate-600">
              Professionelle Rettungsschwimmer für den sicheren Betrieb Ihrer
              Badeanlage.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="text-4xl">📅</div>

            <h3 className="mt-5 text-xl font-bold">Flexible Lösungen</h3>

            <p className="mt-3 text-slate-600">
              Unterstützung für einzelne Einsätze, Saisonzeiten oder
              langfristige Personalplanung.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="text-4xl">✓</div>

            <h3 className="mt-5 text-xl font-bold">Zuverlässiger Service</h3>

            <p className="mt-3 text-slate-600">
              Wir legen Wert auf zuverlässige Kommunikation und professionelles
              Auftreten.
            </p>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Unsere Einsatzbereiche
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Für verschiedene Einrichtungen
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Ob Hotelpool, öffentliches Schwimmbad oder Ferienanlage –
                Probäder Service bietet passende Personallösungen für
                unterschiedliche Anforderungen.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                🏨
                <h3 className="mt-3 font-bold">Hotels & Resorts</h3>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                🏊
                <h3 className="mt-3 font-bold">Schwimmbäder</h3>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                🌴
                <h3 className="mt-3 font-bold">Ferienanlagen</h3>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                🏢
                <h3 className="mt-3 font-bold">Freizeiteinrichtungen</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anfrage */}
      <section id="anfrage" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-8 text-white sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Sie benötigen Rettungsschwimmer?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Senden Sie uns Ihre Anfrage. Wir besprechen gemeinsam Ihren Bedarf
              und finden eine passende Lösung.
            </p>
          </div>

          <form className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="font-semibold">Ansprechpartner *</label>

              <input
                required
                type="text"
                placeholder="Vor- und Nachname"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-white px-4 py-3 text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold">Unternehmen *</label>

              <input
                required
                type="text"
                placeholder="Name des Unternehmens"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-white px-4 py-3 text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold">E-Mail *</label>

              <input
                required
                type="email"
                placeholder="ihre@email.de"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-white px-4 py-3 text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold">Telefonnummer</label>

              <input
                type="tel"
                placeholder="+49 ..."
                className="mt-2 w-full rounded-xl border border-slate-700 bg-white px-4 py-3 text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold">Standort *</label>

              <input
                required
                type="text"
                placeholder="Stadt / Standort"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-white px-4 py-3 text-slate-900"
              />
            </div>

            <div>
              <label className="font-semibold">
                Benötigte Rettungsschwimmer
              </label>

              <select className="mt-2 w-full rounded-xl border border-slate-700 bg-white px-4 py-3 text-slate-900">
                <option>Bitte auswählen</option>
                <option>1</option>
                <option>2</option>
                <option>3–5</option>
                <option>Mehr als 5</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="font-semibold">
                Wie können wir Sie unterstützen? *
              </label>

              <textarea
                required
                rows={5}
                placeholder="Erzählen Sie uns kurz von Ihrem Bedarf..."
                className="mt-2 w-full rounded-xl border border-slate-700 bg-white px-4 py-3 text-slate-900"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-200"
              >
                Anfrage senden →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © 2026 Probäder Service · Alle Rechte vorbehalten
      </footer>
    </main>
  );
}
