import { updateConfig } from "@/lib/actions";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function ConfigPage() {
  // Obtenemos los valores actuales de la base de datos
  const config = await prisma.config.findUnique({ where: { id: 1 } });

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Configuración</h1>
        <p className="text-zinc-500 text-sm">Define los valores base para tus cálculos.</p>
      </div>

      {/* Formulario de Ajustes */}
      <Card className="border-none shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Valores Unitarios</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={updateConfig} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-zinc-400">Precio por Ticket ($)</label>
                <Input name="ticketValue" type="number" defaultValue={config?.ticketValue || 0} placeholder="Ej: 5000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-zinc-400">Precio por KM ($)</label>
                <Input name="kmValue" type="number" defaultValue={config?.kmValue || 0} placeholder="Ej: 300" />
              </div>
            </div>
            <Button type="submit" className="w-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
              Guardar Cambios
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Cuadro de Metodología */}
      <Card className="border-none shadow-sm bg-blue-50/50 border border-blue-100">
        <CardHeader>
          <CardTitle className="text-sm font-bold text-blue-900 uppercase tracking-widest">
            Metodología Infomac
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-blue-800 leading-relaxed space-y-2">
          <p>
            La gestión de tickets se basa en la recepción de órdenes de servicio técnico en la localidad. 
            Cada ticket representa una intervención individual.
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Cálculo de Viáticos:</strong> Se multiplica la distancia recorrida por el valor del KM configurado arriba.</li>
            <li><strong>Honorarios:</strong> Se suma el valor unitario por ticket realizado con éxito.</li>
            <li><strong>Cierre de Mes:</strong> Los tickets deben marcarse como cerrados para entrar en el reporte de pagos mensual.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}