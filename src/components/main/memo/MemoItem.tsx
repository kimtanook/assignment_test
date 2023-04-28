import { useRecoilState } from "recoil";
import styled from "styled-components";
import { memoType } from "../../../types/types";
import { memoState } from "../../../util/atom";

function MemoItem({ item }: { item: memoType }) {
  const [memoData, setMemoData] = useRecoilState(memoState);

  // 메모 삭제
  const deleteMemo = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const deleteMemoData = memoData?.filter(
        (memo: memoType) => memo.id !== item.id
      );
      setMemoData(deleteMemoData);
    }
  };
  return (
    <Wrap>
      <Memo>{item.memo}</Memo>
      <DeleteBtn onClick={deleteMemo}>삭제</DeleteBtn>
    </Wrap>
  );
}

export default MemoItem;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  border: 1px solid black;
  margin: 4px;
`;
const Memo = styled.div`
  font-size: 24px;
  width: 480px;
  padding-left: 12px;
`;
const DeleteBtn = styled.button`
  width: 60px;
`;
