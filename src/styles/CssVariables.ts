import { createGlobalStyle } from "styled-components";

export const CssVariables = createGlobalStyle`
  :root {
    // Seat Widths
    --mobile-seat-width: 33px;
    --tablet-seat-width: 45px;
    --desktop-seat-width: 60px;
    
    // Screen Widths
    --mobile-max-width: 360px;
    --tablet-max-width: 750px;
  }
`;
