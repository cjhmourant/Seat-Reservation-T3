import React from "react";
import * as Styled from "./styles";

type SeatButtonProps = {
  seatNumber: string;
};
export const SeatButton = ({ seatNumber }: SeatButtonProps) => {
  return <Styled.SeatButton>{seatNumber}</Styled.SeatButton>;
};
