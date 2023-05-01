import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "~/server/api/routers/user";
import { seatRouter } from "~/server/api/routers/seat";
import { seatBookingRouter } from "~/server/api/routers/seatBooking";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  seat: seatRouter,
  seatBooking: seatBookingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
