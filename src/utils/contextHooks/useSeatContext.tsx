import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";

type SeatSelection = {
  selectedSeatNumber: number;
  setSelectedSeatNumber: (newSeatNumber: number) => void;
};

type SeatContextProps = {
  initialSelectedSeat?: number;
  children: ReactNode;
};

export const SeatContext = createContext<SeatSelection>({
  selectedSeatNumber: 0,
  setSelectedSeatNumber: () => undefined,
});

export const useSeatContext = (): SeatSelection => {
  const context = useContext(SeatContext);
  if (context === undefined) {
    throw new Error(`useSeatContext must be used within a SeatContextProvider`);
  }
  return context;
};

export const SeatContextProvider = ({
  children,
  initialSelectedSeat = 0,
}: SeatContextProps) => {
  const [selectedSeatNumber, setSelectedSeatNumber] =
    useState<number>(initialSelectedSeat);
  const value = useMemo(
    () => ({ selectedSeatNumber, setSelectedSeatNumber }),
    [selectedSeatNumber]
  );
  return <SeatContext.Provider value={value}>{children}</SeatContext.Provider>;
};
