import { useState, useEffect, createContext } from "react";
import UserAPI from "./UserAPI";

export const ContextAPI = createContext()

function ContextProvider(props) {

  const [usersList, setUsersList] = useState({ data: [], total: 0 });
  const [page, setPage] = useState(1);
  const countPerPage = 5;
  const API = new UserAPI(process.env.REACT_APP_USERS_API_BASE_URL);

  useEffect(() => {
    fetchUserData();
  }, [page]);
  async function fetchUserData() {
    let params = {
      page: page,
      per_page: countPerPage
    };
    const response = await API.getUserList(params);
    setUsersList({ data: response.data, total: response.total });
  }

    const value = { usersList, page, setPage, countPerPage};
    return (
        <ContextAPI.Provider value={value}>
            {props.children}
        </ContextAPI.Provider>
    )
}
export default ContextProvider;