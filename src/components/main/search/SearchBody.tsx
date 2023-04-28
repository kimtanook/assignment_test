import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { getUserData } from "../../../util/api";
import {
  searchOptionState,
  searchValueState,
  selectDateState,
} from "../../../util/atom";
import SearchHeader from "./SearchHeader";
import SearchList from "./SearchList";

function SearchBody() {
  const [optionValue, setOptionValue] = useRecoilState(searchOptionState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const [userDate, setUserDate] = useRecoilState(selectDateState);

  const { data: userData } = useQuery(["searchDate", userDate], getUserData, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  return (
    <div>
      <SearchHeader
        setOptionValue={setOptionValue}
        setSearchValue={setSearchValue}
      />
      <SearchList
        userData={userData}
        optionValue={optionValue}
        searchValue={searchValue}
      />
    </div>
  );
}

export default SearchBody;
