## 실행 방법
1. 프로젝트 파일 오픈
2. `npm install`
3. `npm start`

## 컴포넌트 구조 설명

페이지를 먼저 구성하고, 각 페이지에 대한 구성 요소들로 컴포넌트를 구성했습니다.

React Query가 state의 변경이 있을 때마다 캐시 데이터를 확인하고 서버에 데이터를 요청하므로
가장 상위의 컴포넌트에서 props로 내려주는 게 편리하다고 판단되어 Main 페이지 컴포넌트에서 하위 컴포넌트들로 props를 내려주었습니다.
바로 하위 컴포넌트는 list를 구성하는 컴포넌트인데, 상위 컴포넌트에서 내려받은 props를 item 컴포넌트로 랜더링 하도록 하였습니다.
item 컴포넌트를 따로 만들어서 랜더링 하는게, 가독성과 유지보수 측면에서 유용할 것 같아서 따로 만들었습니다.

ads는 비교적 간단한 기능이기 때문에 하나의 컴포넌트로 구성하였고, memo도 단순 CRD 기능이기 때문에 list컴포넌트를 만들지 않고 구성하였습니다.

서버 통신 관련 로직은 api.tsx에 작성하였고, recoil관련 state는 atom.tsx에 작성하였습니다. type 또한 types 폴더의 types.d.tsx에 작성하였습니다. declare를 사용하면 간혹 인식을 하지 못하는 경우가 생기는데, 이럴 경우 어떤 부분에서 타입에러가 생기는지 찾기 어렵기 때문에 export를 붙여서 interface를 만들었습니다.

- ads
  - CarouselSlide.tsx `라이브러리를 사용하지 않고, transform의 translate을 이용하여 구현했습니다.`
- memo
  - Memo.tsx `input과 submit 버튼, 메모의 리스트로 구성되어있습니다.`
  - MemoItem.tsx `list에 들어가는, 메모의 내용과 삭제버튼으로 이루어진 item 컴포넌트 입니다.`
- search
  - SearchHeader.tsx `검색 옵션과 input으로 구성된 컴포넌트입니다.`
  - SearchList. tsx `데이터를 검색된 값으로 필터링하여 리스트로 보여주며, UserItem 컴포넌트를 랜더링합니다.`
- users
  - CalendarModal.tsx `캘린더 라이브러리를 쓰지 않고, date를 편하게 변환해주는 data-fns를 사용하여 구현한 모달입니다.`
  - UserHeader.tsx `날짜의 표시와 캘린더 모달을 띄우는 버튼, 캘린더 모달이 랜더링 되는 컴포넌트 입니다.`
  - UserItem.tsx `UserList, SearchList에서 랜더링되는 컴포넌트 입니다. patDob값을 가지고 성별, 만 나이를 계산합니다.`
  - UserList.tsx `item 컴포넌트를 랜더링합니다.`
- pages
  - Datail.tsx `UserItem 컴포넌트의 상세보기 페이지입니다.`
  - Main.tsx `전체 페이지 입니다. 각 구성요소의 컴포넌트를 모아서 보여줍니다.`
  - Router.tsx `route 기능이 구현되어 있습니다.`
  
![main](https://user-images.githubusercontent.com/117064282/235209908-864fc7f0-40dd-4b5b-855b-d50a44952a93.png)
