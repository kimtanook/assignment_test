import { Dispatch, SetStateAction } from "react";
import { userType } from "../../../types/types";
import UserHeader from "./UserHeader";
import UserList from "./UserList";

function UserBody({
  userData,
  userDate,
  setUserDate,
}: {
  userData: userType[];
  userDate: string;
  setUserDate: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div>
      <UserHeader userLength={userData?.length} setUserDate={setUserDate} />
      <UserList userData={userData} userDate={userDate} />
    </div>
  );
}

export default UserBody;
