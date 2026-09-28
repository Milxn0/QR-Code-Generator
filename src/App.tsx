import { useEffect, useState } from 'react'

type ApiStatus = {
  status: 'ok'
  database: 'connected' | 'disconnected'
}

export default function App() {
  const [apiStatus, setApiStatus] = useState<ApiStatus | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) throw new Error('API unavailable')
        return response.json() as Promise<ApiStatus>
      })
      .then(setApiStatus)
      .catch(() => setApiStatus(null))
  }, [])

  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col">
        <header className="flex items-center justify-between border-b border-stone-300 pb-5">
          <a className="font-semibold tracking-tight text-stone-900" href="/">
            QR Code Generator
          </a>
          <span className="font-mono text-xs uppercase tracking-widest text-stone-500">
            PromptPay
          </span>
        </header>

        <section className="grid flex-1 content-center gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-5 font-mono text-sm text-emerald-800">YOUR NEXT IDEA STARTS HERE</p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[1.04] tracking-tight text-stone-950 sm:text-7xl">
              Build something <span className="text-emerald-800">small.</span>
              <br />
              Make it real.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-stone-600">
              React, TypeScript, Tailwind CSS, Express and PostgreSQL are ready to go.
            </p>
          </div>

          <aside className="border-l-2 border-emerald-700 py-2 pl-6">
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500">System check</p>
            <h2 className="mt-4 text-2xl font-semibold text-stone-900">Connection status</h2>
            <dl className="mt-7 space-y-4 text-sm">
              <div className="flex items-center justify-between gap-6 border-b border-stone-300 pb-3">
                <dt className="text-stone-600">API server</dt>
                <dd className="font-medium text-stone-900">{apiStatus ? 'Online' : 'Not connected'}</dd>
              </div>
              <div className="flex items-center justify-between gap-6 border-b border-stone-300 pb-3">
                <dt className="text-stone-600">PostgreSQL</dt>
                <dd className="font-medium text-stone-900">
                  {apiStatus?.database === 'connected' ? 'Connected' : 'Waiting for database'}
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-6 text-stone-500">
              Start the API and database to see both services come online.
            </p>
          </aside>
        </section>

        <footer className="flex justify-between border-t border-stone-300 pt-4 font-mono text-xs text-stone-500">
          <span>READY WHEN YOU ARE</span>
          <span>01 / STARTER</span>
        </footer>
      </div>
    </main>
  )
}