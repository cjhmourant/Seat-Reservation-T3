import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";

type DateSelection = {
  selectedDate: Date;
  setSelectedDate: (newSeatNumber: Date) => void;
};

type DateContextProps = {
  initialSelectedDate?: Date;
  children: ReactNode;
};

export const DateContext = createContext<DateSelection>({
  selectedDate: new Date(),
  setSelectedDate: () => undefined,
});

export const useDateContext = (): DateSelection => {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw new Error(`useDateContext must be used within a DateContextProvider`);
  }
  return context;
};

export const DateContextProvider = ({
  children,
  initialSelectedDate = new Date(),
}: DateContextProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(initialSelectedDate);
  const value = useMemo(
    () => ({ selectedDate, setSelectedDate }),
    [selectedDate]
  );
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};
