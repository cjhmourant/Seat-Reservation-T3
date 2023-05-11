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
    border-top: solid ${theme.colour.borders.onLight.default} 2px;
    box-shadow: ${theme.elevation["24"].boxShadow};
  `}
  height: 45vh;

  @media (min-width: 950px) {
    height: 100%;
    min-width: 25rem;
    ${({ theme }) => css`
      border-top: none;
      border-right: solid ${theme.colour.borders.onLight.default} 2px;
    `}
  }
`;

export const MapArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: scroll;
`;
