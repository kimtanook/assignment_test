import { Link } from "react-router-dom";
import styled from "styled-components";
import { userType } from "../../../types/types";

function UserItem({
  data,
  userDate,
  searchValue,
}: {
  data: userType;
  userDate: string;
  searchValue: string;
}) {
  const rrn = data.patDob;
  // 주민등록번호에서 생년월일 추출
  const backYear = rrn?.substring(7);
  const year = Number(backYear) >= 3 ? `2000` : `1900`;
  const birthYear = Number(rrn?.substring(0, 2));
  const birthMonth = Number(rrn?.substring(2, 4));
  const birthDay = Number(rrn?.substring(4, 6));

  // 주민등록번호에서 성별 추출
  const genderDigit = Number(rrn?.substring(7));

  // 생년월일로 현재 나이 계산 (만 나이)
  const now = new Date();
  let age = now.getFullYear() - (Number(year) + birthYear) + 1;
  if (
    // 생일 기준 나이 계산
    now.getMonth() + 1 < birthMonth ||
    (now.getMonth() + 1 === birthMonth && now.getDate() < birthDay)
  ) {
    age--;
  }

  // 성별
  const gender = genderDigit % 2 === 1 ? "남" : "여";
  return (
    <Wrap
      name={data.name}
      phone={data.phone}
      patDob={data.patDob}
      searchValue={searchValue}
    >
      <Link
        to={`/detail/${data?.userid}`}
        state={{ data, userDate, age, gender }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <UserInfo>
          <Name>{data.name}</Name>
          <GenderAge>
            {gender}/{age}
          </GenderAge>
          <PatDob>{rrn}</PatDob>
          <Phone> {data.phone}</Phone>
        </UserInfo>
        <UserMemo>{data.memo}</UserMemo>
      </Link>
    </Wrap>
  );
}

export default UserItem;
const Wrap = styled.div<{
  name: string | undefined;
  phone: string | undefined;
  patDob: string | undefined;
  searchValue: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;

  height: 60px;
  margin: 12px auto;
  padding: 8px;
  border: 2px solid black;
  background-color: ${({ name, phone, patDob, searchValue }) =>
    name === searchValue
      ? "aqua"
      : phone === searchValue
      ? "aqua"
      : patDob?.slice(0, 6) === searchValue
      ? "aqua "
      : "white"};
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Name = styled.div`
  width: 100px;
`;
const GenderAge = styled.div`
  width: 100px;
`;
const PatDob = styled.div`
  width: 100px;
`;
const Phone = styled.div`
  width: 120px;
`;
const UserMemo = styled.div`
  height: 32px;
  line-height: 32px;
`;
