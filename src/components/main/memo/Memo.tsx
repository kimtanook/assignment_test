import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { memoType } from "../../../types/types";
import { memoState } from "../../../util/atom";
import MemoItem from "./MemoItem";

function Memo() {
  const [memoData, setMemoData] = useRecoilState(memoState);
  const [memoValue, setMemoValue] = useState("");
  const memoListRef = useRef<HTMLDivElement>(null);

  // 메모 인풋 감지
  const onChangeMemoValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMemoValue(event.target.value);
  };

  // 메모 전송
  const onSubmitMemo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!memoValue) {
      return alert("메모를 입력해주세요!");
    }
    setMemoData([...memoData, { id: uuidv4(), memo: memoValue }]);
    setMemoValue("");

    // 메모 작성 후 메모 스크롤 아래로.
    setTimeout(() => {
      if (memoListRef.current) {
        memoListRef.current.scrollTop = memoListRef.current.scrollHeight + 24;
      }
    }, 100);
  };
  return (
    <Wrap>
      <MemoList ref={memoListRef}>
        {memoData?.map((item: memoType) => (
          <MemoItem key={uuidv4()} item={item} />
        ))}
      </MemoList>
      <BottomBox onSubmit={onSubmitMemo}>
        <MemoInput
          onChange={onChangeMemoValue}
          value={memoValue}
          maxLength={20}
        />
        <SubmitBtn>전송</SubmitBtn>
      </BottomBox>
    </Wrap>
  );
}

export default Memo;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 400px;
  border: 1px solid black;
  margin: 260px auto auto auto;
`;
const MemoList = styled.div`
  height: 360px;
  overflow-y: scroll;
  margin-bottom: 12px;
`;
const BottomBox = styled.form`
  display: flex;
  flex-direction: row;
`;
const MemoInput = styled.input`
  width: 460px;
  height: 40px;
  font-size: 20px;
`;
const SubmitBtn = styled.button`
  width: 80px;
  font-size: 20px;
`;
