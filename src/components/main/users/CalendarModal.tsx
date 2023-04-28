import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import leftArrow from "../../../image/angle-left.png";
import rightArrow from "../../../image/angle-right.png";
import { selectDayState } from "../../../util/atom";

function CalendarModal({
  setUserDate,
  setToday,
}: {
  setUserDate: Dispatch<SetStateAction<string>>;
  setToday: Dispatch<SetStateAction<string>>;
}) {
  const [currentDate, setCurrentMonth] = useState(new Date());
  const [selectDate, setSelectDate] = useRecoilState(selectDayState);

  // 이전 달
  const beforeMonth = () => {
    setCurrentMonth(subMonths(currentDate, 1));
  };

  // 다음 달
  const afterMonth = () => {
    setCurrentMonth(addMonths(currentDate, 1));
  };

  // 날짜 선택
  const onClickDate = (day: Date) => {
    setSelectDate(day);
    setUserDate(`${format(day, "yyyyMMdd")}`);
    setToday(`${format(day, "yyyy / MM / dd")}`);
  };

  const monthStart = startOfMonth(currentDate); // 현재 달의 시작 일
  const monthEnd = endOfMonth(monthStart); // 현재 달의 마지막 일
  const startDate = startOfWeek(monthStart); // monthStart가 속한 week의 시작 일
  const endDate = endOfWeek(monthEnd); // monthStart가 속한 week의 마지막 일

  const rows: ReactNode[] = []; // 일주일로 묶인 days가 하나씩 들어가, 한 달이 된 배열
  let days: ReactNode[] = []; // day를 모아서 일주일로 만든 배열
  let day = startDate;
  let formatDate = "";
  let dayIndex = 0;
  console.log("day : ", addDays(day, 1));
  //
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formatDate = format(day, "d");
      const currentDay = day;
      days.push(
        <Day
          onClick={() => onClickDate(currentDay)}
          key={dayIndex}
          day={day}
          monthStart={monthStart}
          selectDate={selectDate}
        >
          {formatDate}
        </Day>
      );
      day = addDays(day, 1);
      dayIndex++;
    }
    rows.push(<Week key={`week-${dayIndex}`}>{days}</Week>);
    days = [];
  }
  return (
    <Wrap>
      <Header>
        <BeforeBtn src={leftArrow} onClick={beforeMonth} />
        <YearMonth>{format(currentDate, "MMMM yyyy")}</YearMonth>
        <AfterBtn src={rightArrow} onClick={afterMonth} />
      </Header>
      <DaysWrap>{rows}</DaysWrap>
    </Wrap>
  );
}
export default CalendarModal;
const Wrap = styled.div`
  width: 200px;
  height: 160px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 40%;
  left: -20px;
  transform: translate(-50%, 10%);
  border: 1px solid black;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;
const BeforeBtn = styled.img`
  width: 20px;
  height: 20px;
  margin: 4px;
  cursor: pointer;
  opacity: 0.4;
  :hover {
    opacity: 1;
  }
`;
const YearMonth = styled.div``;
const AfterBtn = styled.img`
  width: 20px;
  height: 20px;
  margin: 4px;
  cursor: pointer;
  opacity: 0.4;
  :hover {
    opacity: 1;
  }
`;
const Week = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const DaysWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
const Day = styled.div<{ day: Date; monthStart: Date; selectDate: Date }>`
  cursor: pointer;
  width: 20px;
  text-align: center;
  color: ${({ day, monthStart }) =>
    !isSameMonth(day, monthStart)
      ? "#d1d1d1"
      : format(day, "EEE") === "Sun" || format(day, "EEE") === "Sat"
      ? "red"
      : "black"};
  background-color: ${({ day, selectDate }) =>
    isSameDay(day, selectDate) ? "aqua" : "white"};
  border-radius: ${({ day, selectDate }) =>
    isSameDay(day, selectDate) ? "50%" : "none"};
`;
