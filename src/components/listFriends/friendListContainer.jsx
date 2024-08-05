import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../../redux/actions/userActions";
import FriendList from "./friendList";
import SearchFriend from "../search/searchFriend";

const { getListFriends } = userAction;
const FriendListContainer = ({ onSelectFriend }) => {
  const { friends, loading, error } = useSelector((state) => state.friends);
  const [filteredFriends, setFilteredFriends] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListFriends());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(friends) && friends.length > 0) {
      setFilteredFriends(friends);
    }
  }, [friends]);
  return (
    <div
      style={{
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <SearchFriend
        listFriend={friends}
        setFilteredFriends={setFilteredFriends}
      />
      <FriendList
        filteredFriends={filteredFriends}
        loading={loading}
        error={error}
        onSelectFriend={onSelectFriend}
      />
    </div>
  );
};

export default FriendListContainer;
