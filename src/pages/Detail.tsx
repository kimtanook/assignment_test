import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const location = useLocation();
  const date = location.state.userDate;
  const data = location.state.data;
  const age = location.state.age;
  const gender = location.state.gender;

  const year = date.slice(2, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6);

  return (
    <Wrap>
      <DateBox>
        {year}년 {month}월 {day}일
      </DateBox>
      <DataBox>이름 : {data.name}</DataBox>
      <DataBox>성별 : {gender}</DataBox>
      <DataBox>나이 : {age}</DataBox>
      <DataBox>주민번호 : {data.patDob}</DataBox>
      <DataBox>전화번호 : {data.phone}</DataBox>
      <DataBox>메모 : {data.memo}</DataBox>
    </Wrap>
  );
}

export default Detail;

const Wrap = styled.div`
  margin: 12px;
`;
const DateBox = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
`;
const DataBox = styled.div`
  margin-bottom: 12px;
`;
