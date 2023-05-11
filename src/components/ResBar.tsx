import { BookingForm } from "~/components/SeatForm";
import { signOut } from "next-auth/react";
// @ts-ignore
import { Button } from "@marco-polo/button";
// @ts-ignore
import { Building as BuildingIcon } from "@marco-polo/icons";
import styled, { css } from "styled-components";

export const ResBar = () => {
  return (
    <Wrapper>
      <Header>
        <BuildingIcon height={40} width={40} />
        <h1>Seat Booking</h1>
      </Header>
      <BookingForm />
      <SignOut onClick={() => void signOut()} variant={"tertiary"}>
        Sign out
      </SignOut>
    </Wrapper>
  );
};

/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => css`
    padding: ${theme.spacing.md};
  `};
`;

export const Header = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacing.md};
    border-bottom: solid ${theme.colour.borders.onLight.default} 0.5px;
    padding: ${theme.spacing.xs} 0;

    svg,
    path,
    circle,
    rect {
      fill: ${theme.colour.icons.onLight.highlight};
    }
  `}
  display: flex;
  align-items: center;
`;

export const SignOut = styled(Button)`
  align-self: flex-end;
`;
