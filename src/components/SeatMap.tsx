import * as Layout from "../styles/layoutComponents";
import { SeatButton } from "~/components/SeatButton";

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

export const SeatMap = () => (
  <Layout.SeatGrid>
    {Object.entries(seatNumberToCoordinateMapping).map(([seat, seatInfo]) => (
      <Layout.Seat column={seatInfo.column} row={seatInfo.row} key={seat}>
        <SeatButton seatNumber={seatInfo.number} />
      </Layout.Seat>
    ))}
  </Layout.SeatGrid>
);
