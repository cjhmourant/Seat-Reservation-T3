import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

const seatBookingShape = z.object({
  bookedForDate: z.date(),
  seatId: z.string().cuid(),
});
export const seatBookingRouter = createTRPCRouter({
  getAllSeatBookings: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.seatBooking.findMany();
  }),
  createSeatBooking: protectedProcedure
    .input(seatBookingShape)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.seatBooking.create({
        data: {
          bookedForDate: input.bookedForDate,
          userId: ctx.session.user.id,
          seatId: input.seatId,
        },
      });
    }),
});
