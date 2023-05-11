import { useSeatContext } from "~/utils/contextHooks/useSeatContext";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";
// @ts-ignore
import { Button } from "@marco-polo/button";
import styled, { css } from "styled-components";
import { CalendarDatePicker } from "~/components/DatePicker";
import { useDateContext } from "~/utils/contextHooks/useDateContext";

type FormData = {
  date: Date;
};

export const BookingForm = () => {
  const tRPCUtils = api.useContext();
  const { selectedSeatNumber } = useSeatContext();
  const { setSelectedDate, selectedDate } = useDateContext();

  const { isSuccess: areSeats, data: seats } = api.seat.getAllSeats.useQuery();
  const { data: doesUserHaveBooking } =
    api.seatBooking.doesUserHaveBookingOnDate.useQuery(selectedDate);

  const createSeatBooking = api.seatBooking.createSeatBooking.useMutation({
    onSuccess() {
      tRPCUtils.seatBooking
        .invalidate()
        .catch(() => console.log("Failed to invalidate seatBookings cache"));
    },
  });

  const { handleSubmit, control } = useForm<FormData>();
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
    <SeatForm onSubmit={handleSubmit(onSubmit)}>
      {doesUserHaveBooking ? (
        <h3>You already have a booking</h3>
      ) : (
        <h3>You are booking seat {selectedSeatNumber}</h3>
      )}
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <>
            <CalendarDatePicker
              selected={value}
              onChange={(value) => {
                if (value) {
                  onChange(value);
                  setSelectedDate(value);
                }
              }}
              title="select date"
              label="Select date for booking"
              minDate={new Date()}
              id="date"
            />
          </>
        )}
      />
      {areSeats && (
        <Button
          type="submit"
          variant="secondary"
          disabled={doesUserHaveBooking}
        >
          Submit
        </Button>
      )}
    </SeatForm>
  );
};

/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
export const SeatForm = styled.form`
  display: flex;
  flex-direction: column;
  ${({ theme }) =>
    css`
      gap: ${theme.spacing.md};
    `}
`;
