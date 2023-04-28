import styled from "styled-components";
import CarouselSlide from "../components/main/ads/CarouselSlide";
import Memo from "../components/main/memo/Memo";
import SearchBody from "../components/main/search/SearchBody";
import UserBody from "../components/main/users/UserBody";

function Main() {
  return (
    <Wrap>
      <AdsWrap>
        <CarouselSlide />
        <Memo />
      </AdsWrap>
      <UserWrap>
        <UserBody />
      </UserWrap>
      <SearchWrap>
        <SearchBody />
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
