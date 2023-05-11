import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

const date = z.date();

const seatBookingShape = z.object({
  bookedForDate: date,
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

  getNumbersOfSeatsBookedOnDate: protectedProcedure
    .input(date)
    .query(async ({ ctx, input }) => {
      const bookingsWithSeats = await ctx.prisma.seatBooking.findMany({
        where: {
          bookedForDate: input,
        },
        include: {
          seat: true,
        },
      });
      return bookingsWithSeats.map(
        (seatBooking) => seatBooking.seat.seatNumber
      );
    }),

  doesUserHaveBookingOnDate: protectedProcedure
    .input(date)
    .query(async ({ ctx, input }) => {
      const seatBooking = await ctx.prisma.seatBooking.findFirst({
        where: {
          userId: ctx.session.user.id,
          bookedForDate: input,
        },
      });
      return !!seatBooking;
    }),
});
