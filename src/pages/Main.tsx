import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import CarouselSlide from "../components/main/ads/CarouselSlide";
import Memo from "../components/main/memo/Memo";
import SearchBody from "../components/main/search/SearchBody";
import UserBody from "../components/main/users/UserBody";
import { getUserData } from "../util/api";
import { selectDateState } from "../util/atom";

function Main() {
  const [userDate, setUserDate] = useRecoilState(selectDateState);

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
        <UserBody
          userData={userData}
          userDate={userDate}
          setUserDate={setUserDate}
        />
      </UserWrap>
      <SearchWrap>
        <SearchBody userData={userData} />
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
