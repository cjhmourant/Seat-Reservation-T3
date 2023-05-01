import { useSeatContext } from "~/utils/contextHooks/useSeatContext";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { CalendarDatePicker } from "~/components/DatePicker";
import { api } from "~/utils/api";

type FormData = {
  date: Date;
};

export const SeatForm = () => {
  const { selectedSeatNumber } = useSeatContext();
  const { handleSubmit, control } = useForm<FormData>();
  const { isSuccess: areSeats, data: seats } = api.seat.getAllSeats.useQuery();
  const createSeatBooking = api.seatBooking.createSeatBooking.useMutation();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!seats) {
      throw new Error("TRPC seats data unavailable");
    }

    const seatId = seats.find(
      (seat) => seat.seatNumber === selectedSeatNumber
    )?.id;

    if (seatId) {
      createSeatBooking.mutate({ bookedForDate: data.date, seatId });
    }

    return;
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      The selected seat is: {selectedSeatNumber}
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <CalendarDatePicker
            selected={value}
            onChange={onChange}
            title="select date"
            label="select date"
            minDate={new Date()}
            id="date"
          />
        )}
      />
      {areSeats && <button type="submit">Submit</button>}
    </form>
  );
};
