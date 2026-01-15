"use client" // <--- Esto es vital para que el botón funcione

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { createTicket } from "@/lib/actions";

export default function NuevoTicketModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
          <PlusCircle size={18} /> Nuevo Ticket
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] border-none">
        <DialogHeader>
          <DialogTitle>Cargar Nuevo Servicio</DialogTitle>
        </DialogHeader>
        <form 
          action={async (formData) => {
            await createTicket(formData);
            setOpen(false); // <--- Esto cierra el modal automáticamente al guardar
          }} 
          className="space-y-4 pt-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase opacity-50">ID del Ticket</label>
              <Input name="ticketId" placeholder="814967-9" required />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase opacity-50">Fecha de Servicio</label>
              <Input name="fechaServicio" type="date" required />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase opacity-50">Descripción</label>
            <Input name="title" placeholder="Ej: Cambio de disco" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase opacity-50">Hora Inicio</label>
              <Input name="horaInicio" type="time" required />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase opacity-50">Hora Fin</label>
              <Input name="horaFin" type="time" required />
            </div>
          </div>

          <div className="p-4 bg-zinc-50 rounded-lg grid grid-cols-2 gap-4 items-center border border-zinc-100">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase opacity-50">KM Recorridos</label>
              <Input name="km" type="number" placeholder="0" />
            </div>
            <div className="flex items-center gap-3 pt-4">
              <input type="checkbox" name="applyViatico" id="viatico" className="h-5 w-5 accent-blue-600" />
              <label htmlFor="viatico" className="text-xs font-medium">Aplicar Viático</label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
            Guardar Ticket
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}