import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import CarouselSlide from "../components/main/ads/CarouselSlide";
import Memo from "../components/main/memo/Memo";
import SearchHeader from "../components/main/search/SearchHeader";
import SearchList from "../components/main/search/SearchList";
import UserHeader from "../components/main/users/UserHeader";
import UserList from "../components/main/users/UserList";
import { getUserData } from "../util/api";
import {
  searchOptionState,
  searchValueState,
  selectDateState,
} from "../util/atom";

function Main() {
  const [userDate, setUserDate] = useRecoilState(selectDateState);
  const [optionValue, setOptionValue] = useRecoilState(searchOptionState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  const { data: userData } = useQuery(["userDate", userDate], getUserData, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  return (
    <Wrap>
      <AdsWrap>
        <CarouselSlide />
        <Memo />
      </AdsWrap>
      <UserWrap>
        <UserHeader userLength={userData?.length} setUserDate={setUserDate} />
        <UserList userData={userData} userDate={userDate} />
      </UserWrap>
      <SearchWrap>
        <SearchHeader
          setOptionValue={setOptionValue}
          setSearchValue={setSearchValue}
        />
        <SearchList
          userData={userData}
          optionValue={optionValue}
          searchValue={searchValue}
        />
      </SearchWrap>
    </Wrap>
  );
}

export default Main;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 1920px;
  height: 1080px;
  margin: auto;
`;
const AdsWrap = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid gray;
`;
const UserWrap = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border-right: 1px solid gray;
`;
const SearchWrap = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
`;
