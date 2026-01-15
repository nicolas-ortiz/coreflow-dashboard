"use server"
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

export async function updateConfig(formData: FormData) {
  try {
    const ticketValue = parseInt(formData.get("ticketValue") as string) || 0;
    const kmValue = parseInt(formData.get("kmValue") as string) || 0;

    console.log("Intentando guardar:", { ticketValue, kmValue });

    await prisma.config.upsert({
      where: { id: 1 },
      update: { ticketValue, kmValue },
      create: { id: 1, ticketValue, kmValue },
    });

    revalidatePath("/dashboard/infomac/config");
    console.log("¡Guardado con éxito!");
  } catch (error) {
    console.error("Error al guardar en la base de datos:", error);
  }
}

export async function createTicket(formData: FormData) {
  const config = await prisma.config.findUnique({ where: { id: 1 } });
  if (!config) return;

  const ticketId = formData.get("ticketId") as string;
  const title = formData.get("title") as string;
  const fechaServicio = new Date(formData.get("fechaServicio") as string);
  const horaInicio = formData.get("horaInicio") as string; // Ej: "09:30"
  const horaFin = formData.get("horaFin") as string;    // Ej: "11:00"
  const km = parseInt(formData.get("km") as string) || 0;
  const aplicaViatico = formData.get("applyViatico") === "on";

  // 1. Calcular Duración y Cantidad de Tickets (Metodología Infomac)
  const [hI, mI] = horaInicio.split(':').map(Number);
  const [hF, mF] = horaFin.split(':').map(Number);
  const totalMinutos = (hF * 60 + mF) - (hI * 60 + mI);
  const horas = totalMinutos / 60;
  
  // Si dura más de 1.5 horas, cuenta como 1.5 tickets (ajusta según tu regla exacta)
  const numTickets = horas > 1.5 ? 1.5 : 1;

  // 2. Calcular Próximo Viernes de Pago
  const fechaPago = new Date(fechaServicio);
  fechaPago.setDate(fechaServicio.getDate() + (5 + 7 - fechaServicio.getDay()) % 7);
  if (fechaServicio.getDay() === 5) fechaPago.setDate(fechaPago.getDate() + 7);

  // 3. Cálculos Económicos
  const amountViatico = aplicaViatico ? km * config.kmValue : 0;
  const totalAmount = (config.ticketValue * numTickets) + amountViatico;

  await prisma.ticket.create({
    data: {
      ticketId,
      title,
      createdAt: fechaServicio,
      numTickets,
      km,
      applyViatico: aplicaViatico,
      amountTicket: config.ticketValue,
      amountViatico,
      totalAmount,
      status: "Pendiente",
      fechaPago: fechaPago.toISOString().split('T')[0]
    },
  });

  revalidatePath("/dashboard/infomac/tickets");
}