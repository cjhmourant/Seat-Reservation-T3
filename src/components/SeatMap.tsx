import * as Layout from "../styles/layoutComponents";
import { SeatButton } from "~/components/SeatButton";

export const SeatMap = () => (
  <Layout.SeatGrid>
    <Layout.SeatOne>
      <SeatButton />
    </Layout.SeatOne>
    <Layout.SeatTwo>
      <SeatButton />
    </Layout.SeatTwo>
    <Layout.SeatTwentyFive>
      <SeatButton />
    </Layout.SeatTwentyFive>
  </Layout.SeatGrid>
);
