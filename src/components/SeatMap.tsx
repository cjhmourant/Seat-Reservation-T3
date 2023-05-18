import styled from "styled-components";
import { useSeatContext } from "~/utils/contextHooks/useSeatContext";
import React from "react";
import { useDateContext } from "~/utils/contextHooks/useDateContext";
import { api } from "~/utils/api";

const seatNumberToCoordinateMapping = {
  "1": { number: 1, column: 1, row: 10 },
  "2": { number: 2, column: 1, row: 9 },
  "3": { number: 3, column: 1, row: 8 },
  "4": { number: 4, column: 1, row: 7 },
  "5": { number: 5, column: 2, row: 7 },
  "6": { number: 6, column: 2, row: 8 },
  "7": { number: 7, column: 2, row: 9 },
  "8": { number: 8, column: 2, row: 10 },
  "9": { number: 9, column: 4, row: 10 },
  "10": { number: 10, column: 4, row: 9 },
  "11": { number: 11, column: 4, row: 8 },
  "12": { number: 12, column: 4, row: 7 },
  "13": { number: 13, column: 5, row: 7 },
  "14": { number: 14, column: 5, row: 8 },
  "15": { number: 15, column: 5, row: 9 },
  "16": { number: 16, column: 5, row: 10 },
  "17": { number: 17, column: 7, row: 10 },
  "18": { number: 18, column: 7, row: 9 },
  "19": { number: 19, column: 7, row: 8 },
  "20": { number: 20, column: 7, row: 7 },
  "21": { number: 21, column: 8, row: 7 },
  "22": { number: 22, column: 8, row: 8 },
  "23": { number: 23, column: 8, row: 9 },
  "24": { number: 24, column: 8, row: 10 },
  "25": { number: 25, column: 13, row: 10 },
  "26": { number: 26, column: 12, row: 10 },
  "27": { number: 27, column: 11, row: 10 },
  "28": { number: 28, column: 10, row: 10 },
  "29": { number: 29, column: 10, row: 9 },
  "30": { number: 30, column: 11, row: 9 },
  "31": { number: 31, column: 12, row: 9 },
  "32": { number: 32, column: 13, row: 9 },
  "33": { number: 33, column: 13, row: 7 },
  "34": { number: 34, column: 12, row: 7 },
  "35": { number: 35, column: 11, row: 7 },
  "36": { number: 36, column: 10, row: 7 },
  "37": { number: 37, column: 10, row: 6 },
  "38": { number: 38, column: 11, row: 6 },
  "39": { number: 39, column: 12, row: 6 },
  "40": { number: 40, column: 13, row: 6 },
  "41": { number: 41, column: 13, row: 1 },
  "42": { number: 42, column: 13, row: 2 },
  "43": { number: 43, column: 13, row: 3 },
  "44": { number: 44, column: 13, row: 4 },
  "45": { number: 45, column: 12, row: 4 },
  "46": { number: 46, column: 12, row: 3 },
  "47": { number: 47, column: 12, row: 2 },
  "48": { number: 48, column: 12, row: 1 },
  "49": { number: 49, column: 10, row: 1 },
  "50": { number: 50, column: 10, row: 2 },
  "51": { number: 51, column: 10, row: 3 },
  "52": { number: 52, column: 10, row: 4 },
  "53": { number: 53, column: 9, row: 4 },
  "54": { number: 54, column: 9, row: 3 },
  "55": { number: 55, column: 9, row: 2 },
  "56": { number: 56, column: 9, row: 1 },
};

// Stop a user booking multiple seats on the same day

export const SeatMap = () => {
  const { selectedSeatNumber, setSelectedSeatNumber } = useSeatContext();
  const { selectedDate } = useDateContext();
  const { isSuccess: hasBookedSeats, data: bookedSeats } =
    api.seatBooking.getNumbersOfSeatsBookedOnDate.useQuery(selectedDate);

  return (
    <SeatGrid>
      {Object.entries(seatNumberToCoordinateMapping).map(([seat, seatInfo]) => (
        <Seat
          column={seatInfo.column}
          row={seatInfo.row}
          selected={seatInfo.number === selectedSeatNumber}
          key={seat}
          onClick={() => setSelectedSeatNumber(seatInfo.number)}
          disabled={hasBookedSeats && bookedSeats.includes(seatInfo.number)}
        >
          {seatInfo.number}
        </Seat>
      ))}
    </SeatGrid>
  );
};

const SeatGrid = styled.div`
  width: auto;
  overflow: scroll;
  --grid-column-width: var(--mobile-seat-width);
  display: grid;
  align-self: center;
  grid-template-columns: repeat(13, var(--grid-column-width));
  grid-template-rows: repeat(10, var(--grid-column-width));
  padding: 2rem;

  @media (min-width: 460px) {
    --grid-column-width: var(--tablet-seat-width);
  }

  @media (min-width: 950px) {
    --grid-column-width: var(--desktop-seat-width);
  }
`;

type SeatProps = {
  column: number;
  row: number;
  selected: boolean;
};

/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const Seat = styled.button.attrs<SeatProps>((attrs) => ({
  column: attrs.column,
  row: attrs.row,
  selected: attrs.selected,
  theme: attrs.theme,
}))<SeatProps>`
  width: 100%;
  height: 100%;
  grid-column: ${({ column }) => column} / span 1;
  grid-row: ${({ row }) => row} / span 1;
  transition: background-color 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    outline 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  border: solid ${({ selected }) => (selected ? "7px" : "5px")}
    ${({ selected, theme }) =>
      selected
        ? theme.colour.surface.light.brandHighlight
        : theme.colour.interaction.button.secondary.onLight.default.border};
  border-radius: ${({ theme }) => theme.border.radius.md};

  :hover {
    border: solid 10px
      ${({ selected, theme }) =>
        selected
          ? theme.colour.surface.light.brandHighlightAlt
          : theme.colour.interaction.button.secondary.onLight.hover.border};
  }

  :disabled {
    color: white;
    border: solid 3px
      ${({ theme }) =>
        theme.colour.interaction.button.secondary.onLight.disabled.border};
    background-color: ${({ theme }) =>
      theme.colour.interaction.button.secondary.onLight.disabled.text};
  }
`;
