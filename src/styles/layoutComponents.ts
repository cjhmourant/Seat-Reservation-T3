import styled from "styled-components";

export const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 750px) {
  }
`;

export const ResBar = styled.div`
  @media (min-width: 750px) {
    // Need this align-self so the sidebar remains sticky inside the flexbox
    align-self: flex-start;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 20rem;
  }
`;

export const SeatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, var(--mobile-seat-width));
  grid-template-rows: repeat(10, var(--mobile-seat-height));
  overflow: scroll;
  @media (min-width: 750px) {
    // Set the columns and rows to fixed sizes for different viewports so scroll behaviour is activated
    grid-template-columns: repeat(10, var(--desktop-seat-width));
    grid-template-rows: repeat(13, var(--desktop-seat-width));
    width: 60rem;
    height: 80rem;
    overflow: scroll;
  }
`;

export const SeatOne = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / span 1;
  grid-row: 10 / span 1;
`;
export const SeatTwo = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / span 1;
  grid-row: 9 / span 1;
`;

export const SeatTwentyFive = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 13 / span 1;
  grid-row: 10 / span 1;
`;
