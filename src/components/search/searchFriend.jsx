import { Spin } from "antd";
import { useEffect, useState, useCallback } from "react";
import userAction from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import IsMenu from "../menu/menuContainer";
import SearchInput from "../../common/containers/input/searchInput";
import "./serchFriend.scss";
import { MenuIcon } from "../../assets/svg";
import useClickOutside from "../../common/hooks/useClickOutSide";
import debounce from "lodash.debounce";

const { getInfo } = userAction;

function SearchFriend({ listFriend, setFilteredFriends }) {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const { userInfo: info, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const menuRef = useClickOutside(() => setShow(false));

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      const filtered = listFriend.filter((friend) =>
        (friend.FullName || "").toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFriends(filtered);
    }, 300),
    [listFriend, setFilteredFriends]
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <>
      <div className="search-container">
        <div
          style={{
            margin: "12.5px 5px 0px 0px",
          }}
          onClick={() => {
            setShow(!show);
          }}
        >
          <MenuIcon />
        </div>
        {loading ? (
          <Spin />
        ) : error ? (
          <p>{error}</p>
        ) : (
          show && (
            <div ref={menuRef}>
              <IsMenu info={info} />
            </div>
          )
        )}
        <SearchInput handleSearch={handleSearch} search={search} />
      </div>
    </>
  );
}

export default SearchFriend;
