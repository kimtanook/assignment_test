import { Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import calendarImg from "../../../image/calendar.png";
import { calendarState, todayState } from "../../../util/atom";
import CalendarModal from "./CalendarModal";

function UserHeader({
  setUserDate,
  userLength,
}: {
  setUserDate: Dispatch<SetStateAction<string>>;
  userLength: number;
}) {
  const [calendarValue, setCalendarValue] = useRecoilState(calendarState);
  const [today, setToday] = useRecoilState(todayState);

  return (
    <Wrap>
      <GuestCount>손님 {userLength}명</GuestCount>
      <CalendarBox>
        <DateBox>{today}</DateBox>
        <div onClick={() => setCalendarValue(!calendarValue)}>
          <CalendarImg src={calendarImg} />
        </div>
        {calendarValue ? (
          <CalendarModal setUserDate={setUserDate} setToday={setToday} />
        ) : null}
      </CalendarBox>
    </Wrap>
  );
}

export default UserHeader;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 36px 0 36px;
`;
const GuestCount = styled.div`
  width: 100px;
`;
const CalendarBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 420px;
  height: 28px;
`;
const DateBox = styled.div`
  margin-right: 12px;
`;
const CalendarImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
