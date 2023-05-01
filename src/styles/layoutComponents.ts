/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
import styled, { css } from "styled-components";

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  // tablet styling
  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

export const ResBar = styled.div`
  ${({ theme }) => css`
    border: solid ${theme.colour.borders.onLight.default} 1px;
  `}
  height: 45vh;

  @media (min-width: 950px) {
    height: 100%;
    min-width: 25rem;
  }
`;

export const MapArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: scroll;
`;

export const SeatGrid = styled.div`
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
};
export const Seat = styled.div.attrs(
  ({ column, row }: SeatProps): SeatProps => ({
    column,
    row,
  })
)`
  width: 100%;
  height: 100%;
  grid-column: ${(props) => props.column} / span 1;
  grid-row: ${(props) => props.row} / span 1;
`;
