import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { getUserData } from "../../../util/api";
import { selectDateState } from "../../../util/atom";
import UserHeader from "./UserHeader";
import UserList from "./UserList";

function UserBody() {
  const [userDate, setUserDate] = useRecoilState(selectDateState);

  const { data: userData } = useQuery(["userDate", userDate], getUserData, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  return (
    <div>
      <UserHeader userLength={userData?.length} setUserDate={setUserDate} />
      <UserList userData={userData} userDate={userDate} />
    </div>
  );
}

export default UserBody;
