import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userType } from "../../../types/types";
import { selectDateState } from "../../../util/atom";
import UserItem from "../users/UserItem";

function SearchList({
  userData,
  optionValue,
  searchValue,
}: {
  userData: userType[];
  optionValue: string;
  searchValue: string;
}) {
  const userDate = useRecoilValue(selectDateState);

  // 검색어 옵션에 따른 검색 필터
  const searchData = userData?.filter((item: userType) => {
    if (optionValue === "name") {
      return item?.name === searchValue;
    } else if (optionValue === "phone") {
      return item?.phone === searchValue;
    } else {
      return item?.patDob?.slice(0, 6) === searchValue;
    }
  });
  return (
    <Wrap>
      {searchData?.map((item: userType) => (
        <UserItem data={item} userDate={userDate} searchValue={searchValue} />
      ))}
    </Wrap>
  );
}

export default SearchList;
const Wrap = styled.div``;
