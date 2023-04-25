import * as Layout from "../styles/layoutComponents";
import { SeatButton } from "~/components/SeatButton";

const seatNumberToCoordinateMapping = {
  "1": { column: 1, row: 10 },
  "2": { column: 1, row: 9 },
  "3": { column: 1, row: 8 },
  "4": { column: 1, row: 7 },
  "5": { column: 2, row: 7 },
  "6": { column: 2, row: 8 },
  "7": { column: 2, row: 9 },
  "8": { column: 2, row: 10 },
  "9": { column: 4, row: 10 },
  "10": { column: 4, row: 9 },
  "11": { column: 4, row: 8 },
  "12": { column: 4, row: 7 },
  "13": { column: 5, row: 7 },
  "14": { column: 5, row: 8 },
  "15": { column: 5, row: 9 },
  "16": { column: 5, row: 10 },
  "17": { column: 7, row: 10 },
  "18": { column: 7, row: 9 },
  "19": { column: 7, row: 8 },
  "20": { column: 7, row: 7 },
  "21": { column: 8, row: 7 },
  "22": { column: 8, row: 8 },
  "23": { column: 8, row: 9 },
  "24": { column: 8, row: 10 },
  "25": { column: 13, row: 10 },
  "26": { column: 12, row: 10 },
  "27": { column: 11, row: 10 },
  "28": { column: 10, row: 10 },
  "29": { column: 10, row: 9 },
  "30": { column: 11, row: 9 },
  "31": { column: 12, row: 9 },
  "32": { column: 13, row: 9 },
  "33": { column: 13, row: 7 },
  "34": { column: 12, row: 7 },
  "35": { column: 11, row: 7 },
  "36": { column: 10, row: 7 },
  "37": { column: 10, row: 6 },
  "38": { column: 11, row: 6 },
  "39": { column: 12, row: 6 },
  "40": { column: 13, row: 6 },
  "41": { column: 13, row: 1 },
  "42": { column: 13, row: 2 },
  "43": { column: 13, row: 3 },
  "44": { column: 13, row: 4 },
  "45": { column: 12, row: 4 },
  "46": { column: 12, row: 3 },
  "47": { column: 12, row: 2 },
  "48": { column: 12, row: 1 },
  "49": { column: 10, row: 1 },
  "50": { column: 10, row: 2 },
  "51": { column: 10, row: 3 },
  "52": { column: 10, row: 4 },
  "53": { column: 9, row: 4 },
  "54": { column: 9, row: 3 },
  "55": { column: 9, row: 2 },
  "56": { column: 9, row: 1 },
};

export const SeatMap = () => (
  <Layout.SeatGrid>
    {Object.entries(seatNumberToCoordinateMapping).map(
      ([seatNumber, coordinates]) => (
        <Layout.Seat
          column={coordinates.column}
          row={coordinates.row}
          key={seatNumber}
        >
          <SeatButton seatNumber={seatNumber} />
        </Layout.Seat>
      )
    )}
  </Layout.SeatGrid>
);
