import { prisma } from "@/lib/prisma";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import NuevoTicketModal from "@/components/NuevoTicketModal";

export default async function TicketsPage() {
  // Obtenemos los tickets de la DB
  const tickets = await prisma.ticket.findMany({ 
    orderBy: { createdAt: 'desc' } 
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end border-b border-zinc-100 pb-6">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-zinc-900 uppercase">Tickets</h1>
          <p className="text-zinc-500 text-sm font-medium">Registro histórico de servicios Infomac.</p>
        </div>
        <NuevoTicketModal />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50/50">
            <TableRow className="hover:bg-transparent border-zinc-100">
              <TableHead className="text-[10px] font-bold uppercase text-zinc-400 py-4 px-6">ID Ticket</TableHead>
              <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Fecha</TableHead>
              <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Descripción</TableHead>
              <TableHead className="text-[10px] font-bold uppercase text-zinc-400 text-center">TKS</TableHead>
              <TableHead className="text-[10px] font-bold uppercase text-zinc-400 text-right">Viático</TableHead>
              <TableHead className="text-[10px] font-bold uppercase text-blue-600 text-right">Total Cobrar</TableHead>
              <TableHead className="text-[10px] font-bold uppercase text-zinc-400 text-center">Viernes Pago</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center text-zinc-400 italic text-sm">
                  Aún no has registrado ningún servicio.
                </TableCell>
              </TableRow>
            ) : (
              tickets.map((t) => (
                <TableRow key={t.id} className="border-zinc-50 hover:bg-zinc-50/30 transition-colors">
                  <TableCell className="font-mono text-xs font-bold text-zinc-400 px-6">
                    {t.ticketId}
                  </TableCell>
                  <TableCell className="text-xs font-medium text-zinc-600">
                    {new Date(t.createdAt).toLocaleDateString('es-AR')}
                  </TableCell>
                  <TableCell className="text-sm font-semibold text-zinc-900">
                    {t.title}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className="bg-zinc-100 text-zinc-900 font-bold border-none text-[10px]">
                      {t.numTickets}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-xs font-medium text-zinc-400">
                    ${t.amountViatico.toLocaleString('es-AR')}
                  </TableCell>
                  <TableCell className="text-right font-black text-sm text-blue-700">
                    ${t.totalAmount.toLocaleString('es-AR')}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold border border-green-100">
                      <div className="w-1 h-1 rounded-full bg-green-500" />
                      {t.fechaPago ? new Date(t.fechaPago).toLocaleDateString('es-AR') : '---'}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}