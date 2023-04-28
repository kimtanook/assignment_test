import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchOptionState, searchValueState } from "../../../util/atom";

function SearchHeader({
  setOptionValue,
  setSearchValue,
}: {
  setOptionValue: Dispatch<SetStateAction<string>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
}) {
  const searchOption = useRecoilValue(searchOptionState);
  const searchValue = useRecoilValue(searchValueState);
  const [onChangeValue, serOnChangeValue] = useState(searchValue);
  const searchOptionRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

  // 검색
  const onSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOptionValue(searchOptionRef.current.value);
    setSearchValue(onChangeValue);
  };
  return (
    <Wrap>
      손님 검색 필터
      <Form onSubmit={onSubmitSearch}>
        <select ref={searchOptionRef} defaultValue={searchOption}>
          <option value="name">이름</option>
          <option value="phone">전화번호</option>
          <option value="patDob">생년월일</option>
        </select>
        <input
          value={onChangeValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            serOnChangeValue(e.target.value)
          }
          placeholder="검색어 입력 후 엔터"
        />
      </Form>
    </Wrap>
  );
}

export default SearchHeader;
const Wrap = styled.div`
  margin: 12px;
`;
const Form = styled.form`
  margin-top: 12px;
`;
