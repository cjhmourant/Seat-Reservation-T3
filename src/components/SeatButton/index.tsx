import React from "react";
import * as Styled from "./styles";
import { useSeatContext } from "~/utils/contextHooks/useSeatContext";

type SeatButtonProps = {
  seatNumber: number;
};
export const SeatButton = ({ seatNumber }: SeatButtonProps) => {
  const { setSelectedSeatNumber } = useSeatContext();
  const handleClick = () => {
    setSelectedSeatNumber(seatNumber);
  };
  return (
    <Styled.SeatButton onClick={handleClick}>{seatNumber}</Styled.SeatButton>
  );
};
