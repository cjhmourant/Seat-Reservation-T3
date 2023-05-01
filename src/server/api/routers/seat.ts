import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const seatRouter = createTRPCRouter({
  getAllSeats: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.seat.findMany();
  }),
});
