import styled, { css } from "styled-components";
import { signIn } from "next-auth/react";
// @ts-ignore
import { Button } from "@marco-polo/button";
// @ts-ignore
import { Building as BuildingIcon } from "@marco-polo/icons";

export const SignIn = () => {
  return (
    <SignInPage>
      <SignInBox>
        <h1>Go Seaty</h1>
        <BuildingIcon width={50} height={50} />
        <Button onClick={() => void signIn()}>Sign In To Continue</Button>
      </SignInBox>
    </SignInPage>
  );
};

/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
export const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.spacing.xxl};
    border-radius: ${theme.border.radius.lg};
    border: solid ${theme.colour.borders.onLight.default} 1px;
  `}
`;

export const SignInPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
