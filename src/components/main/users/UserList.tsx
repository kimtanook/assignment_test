import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userType } from "../../../types/types";
import { searchValueState } from "../../../util/atom";
import UserItem from "./UserItem";

function UserList({
  userData,
  userDate,
}: {
  userData: userType[];
  userDate: string;
}) {
  const searchValue = useRecoilValue(searchValueState);
  return (
    <Wrap>
      {userData?.map((data: userType) => (
        <UserItem data={data} userDate={userDate} searchValue={searchValue} />
      ))}
    </Wrap>
  );
}

export default UserList;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
