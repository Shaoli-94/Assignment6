import { useContext } from "react";
import DataTable from "react-data-table-component";
import { UserTableColumns } from "./UserTableColumns";
import { ContextAPI } from "../ContextAPI";

function UserTable() {
  
  
  const { usersList, page, setPage, countPerPage } = useContext(ContextAPI);

  return (
    <DataTable
      columns={UserTableColumns}
      data={usersList.data}
      onChangePage={(page) => {
        setPage(page);
      }}
      pagination
      paginationServer
      paginationTotalRows={usersList.total}
      paginationPerPage={countPerPage}
      paginationComponentOptions={{
        noRowsPerPage: true
            }}
            />
            );
          }
export default UserTable;