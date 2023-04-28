import { useRecoilState } from "recoil";
import { userType } from "../../../types/types";
import { searchOptionState, searchValueState } from "../../../util/atom";
import SearchHeader from "./SearchHeader";
import SearchList from "./SearchList";

function SearchBody({ userData }: { userData: userType[] }) {
  const [optionValue, setOptionValue] = useRecoilState(searchOptionState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

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
