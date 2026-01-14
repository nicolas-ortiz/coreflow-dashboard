const dashboardCards = [
  {
    title: "Ingresos del mes",
    value: "$48.920",
    note: "+12.4% vs mes anterior",
  },
  {
    title: "Tickets abiertos",
    value: "27",
    note: "8 críticos · 19 en progreso",
  },
  {
    title: "Pagos conciliados",
    value: "92%",
    note: "Última actualización: hace 2h",
  },
  {
    title: "Clientes activos",
    value: "143",
    note: "Retención 90 días: 96%",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-2xl bg-zinc-900" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                CoreFlow
              </p>
              <h1 className="text-xl font-semibold">Dashboard Central</h1>
            </div>
          </div>
          <div className="rounded-full border border-zinc-200 px-4 py-2 text-xs text-zinc-500">
            Actualizado 2026
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-12 px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">
              Inicio profesional
            </p>
            <h2 className="text-4xl font-semibold leading-tight">
              Gestiona todos tus emprendimientos desde un solo lugar.
            </h2>
            <p className="text-lg text-zinc-600">
              CoreFlow organiza el acceso por perfiles, permite elegir el
              dashboard correcto y concentra la operación diaria con métricas en
              tiempo real.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white">
                CoreFlow · InfoMac
              </span>
              <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600">
                Neutral UI · 2026-ready
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-500">Menu de login</p>
                <h3 className="text-2xl font-semibold">Ingresar a CoreFlow</h3>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm text-zinc-500">
                  usuario@empresa.com
                </div>
                <div className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm text-zinc-500">
                  ••••••••••••••
                </div>
              </div>
              <button className="w-full rounded-2xl bg-zinc-900 py-3 text-sm font-medium text-white">
                Continuar
              </button>
              <p className="text-xs text-zinc-400">
                Acceso seguro con autenticación adaptativa.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-500">Menu de selección</p>
                <h3 className="text-2xl font-semibold">
                  Selecciona el dashboard
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "InfoMac · Operaciones",
                  "CoreFlow Studio · Próximamente",
                  "Nuevos negocios · Configuración",
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700"
                  >
                    <span>{label}</span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500">
                      Ver
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full rounded-2xl border border-zinc-900 py-3 text-sm font-medium text-zinc-900">
                Abrir dashboard
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500">
                  Dashboard activo · InfoMac
                </p>
                <h3 className="text-3xl font-semibold">
                  Operación centralizada
                </h3>
              </div>
              <div className="rounded-full bg-zinc-900 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
                Live
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {dashboardCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-zinc-200 bg-white p-5"
                >
                  <p className="text-sm text-zinc-500">{card.title}</p>
                  <p className="text-2xl font-semibold text-zinc-900">
                    {card.value}
                  </p>
                  <p className="text-xs text-zinc-400">{card.note}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-100/60 p-6 text-sm text-zinc-600">
              Próximo paso: integrar tickets, pagos y clientes con exportación a
              Excel por rango de fechas.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
