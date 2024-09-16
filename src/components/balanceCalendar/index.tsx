import { type ReactElement, useState } from 'react';
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  setMonth,
  setYear,
} from 'date-fns';
import { financialActivities } from './constant';
import {
  Container,
  CalendarGrid,
  DayBox,
  Toolbar,
  NavButton,
  SelectContainer,
  IconButton,
  Select,
  MenuItem,
  MonthFormControl,
  YearFormControl,
  DayText,
  AmountText,
} from './styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const months = Array.from({ length: 12 }, (_, i) =>
  format(setMonth(new Date(), i), 'MMMM'),
);
const years = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() - 5 + i,
);

function BalanceCalendar(): ReactElement {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleMonthChange = (event: { target: { value: unknown } }) => {
    setCurrentDate(setMonth(currentDate, Number(event.target.value)));
  };

  const handleYearChange = (event: { target: { value: unknown } }) => {
    setCurrentDate(setYear(currentDate, Number(event.target.value)));
  };

  const handleThisMonth = () => {
    setCurrentDate(new Date());
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const renderDayBox = (day: Date) => {
    const activity = financialActivities.find(
      (activity) =>
        format(new Date(activity.date), 'yyyy-MM-dd') ===
        format(day, 'yyyy-MM-dd'),
    );

    return (
      <DayBox key={day.toString()}>
        <DayText variant="h6">{format(day, 'd')}</DayText>
        {activity && (
          <AmountText variant="h2" $positive={Boolean(activity.amount > 0)}>
            {activity.amount > 0 ? `+${activity.amount}` : activity.amount}
          </AmountText>
        )}
      </DayBox>
    );
  };

  return (
    <Container>
      <Toolbar>
        <IconButton onClick={handlePreviousMonth}>
          <ChevronLeft />
        </IconButton>
        <SelectContainer>
          <MonthFormControl size="small">
            <Select value={currentDate.getMonth()} onChange={handleMonthChange}>
              {months.map((month, index) => (
                <MenuItem key={month} value={index}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </MonthFormControl>

          <YearFormControl size="small">
            <Select
              value={currentDate.getFullYear()}
              onChange={handleYearChange}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </YearFormControl>

          <NavButton onClick={handleThisMonth}>This Month</NavButton>
        </SelectContainer>
        <IconButton onClick={handleNextMonth}>
          <ChevronRight />
        </IconButton>
      </Toolbar>
      <CalendarGrid>{daysInMonth.map((day) => renderDayBox(day))}</CalendarGrid>
    </Container>
  );
}

export default BalanceCalendar;
