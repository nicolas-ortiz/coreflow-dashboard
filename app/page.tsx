import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function SelectBusinessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-zinc-900">Bienvenido</h1>
        <p className="text-zinc-500">Seleccione el negocio para comenzar</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Tarjeta de Infomac */}
        <Link href="/dashboard/infomac">
          <Card className="group w-64 cursor-pointer border-none bg-white transition-all hover:ring-2 hover:ring-blue-500 shadow-sm">
            <CardContent className="flex flex-col items-center justify-center p-10">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <span className="text-xl font-bold">I</span>
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Infomac</h2>
              <p className="mt-2 text-sm text-zinc-400">Gestión de tickets</p>
            </CardContent>
          </Card>
        </Link>

        {/* Espacio para futuros negocios */}
        <div className="flex w-64 items-center justify-center rounded-xl border-2 border-dashed border-zinc-200 p-10 text-zinc-300">
          <p className="text-sm font-medium italic">Próximamente...</p>
        </div>
      </div>
    </div>
  );
}