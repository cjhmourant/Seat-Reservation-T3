import { prisma } from "~/server/db";
import * as process from "process";

async function main() {
  const seatNumbers = Array.from({ length: 56 }, (_, index) => index + 1);

  const seatPromises = seatNumbers.map(
    async (seatNumber) =>
      await prisma.seat.upsert({
        where: {
          seatNumber: seatNumber,
        },
        create: {
          seatNumber: seatNumber,
        },
        update: {},
      })
  );
  for (const seatPromise of seatPromises) {
    await seatPromise;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
