import { format } from "date-fns";
import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { memoType } from "../types/types";

// 메모 데이터 state
export const memoState = atom({
  key: `memoState${uuidv4()}`,
  default: [] as memoType[],
});

// 캘린터 모달 state
export const calendarState = atom({
  key: `calendarState${uuidv4()}`,
  default: false,
});

// 선택한 날짜의 yyyyMMdd 형식 state
export const selectDateState = atom({
  key: `currentDateState${uuidv4()}`,
  default: `${format(new Date(), "yyyyMMdd")}`,
});

// 오늘 날짜 state
export const todayState = atom({
  key: `todayState${uuidv4()}`,
  default: `${format(new Date(), "yyyy / MM / dd")}`,
});

// 선택한 일 state
export const selectDayState = atom({
  key: `todayState${uuidv4()}`,
  default: new Date(),
});

// 검색어 state
export const searchValueState = atom({
  key: `searchValueState${uuidv4()}`,
  default: "",
});

// 검색 옵션 state
export const searchOptionState = atom({
  key: `searchValueState${uuidv4()}`,
  default: "name",
});
