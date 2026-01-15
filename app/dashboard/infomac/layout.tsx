import { LayoutDashboard, Ticket, Settings } from "lucide-react";
import Link from "next/link";

export default function InfomacLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white text-zinc-900">
      {/* Barra Lateral Izquierda */}
      <aside className="w-64 border-r border-zinc-100 flex flex-col p-6">
        <div className="font-bold text-lg mb-10 tracking-tighter">INFOMAC</div>
        
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard/infomac" className="flex items-center gap-3 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
            <LayoutDashboard size={18} /> Inicio
          </Link>
          <Link href="/dashboard/infomac/tickets" className="flex items-center gap-3 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
            <Ticket size={18} /> Tickets
          </Link>
          <Link href="/dashboard/infomac/config" className="flex items-center gap-3 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
            <Settings size={18} /> Configuración
          </Link>
        </nav>
      </aside>

      {/* Contenido a la derecha */}
      <main className="flex-1 p-10 overflow-y-auto bg-zinc-50/30">
        {children}
      </main>
    </div>
  );
}