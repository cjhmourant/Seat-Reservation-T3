import { prisma } from "~/server/db";
import * as process from "process";

async function main() {
  const seats = [
    { id: "cl9ebqhxk00003b600tymydho", seatNumber: "1" },
    {
      id: "cl9ebqhxk00003b600tymyddo",
      seatNumber: "2",
    },
  ] as const;
  await prisma.seat.upsert({
    where: {
      id: seats[0].id,
    },
    create: {
      id: seats[0].id,
      seatNumber: seats[0].seatNumber,
    },
    update: {},
  });
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
