export const UserTableColumns = [
    {
      name: "Avatar",
      cell: (row) => (
        <img height="30px" width="30px" alt={row.first_name} src={row.avatar} />
      )
    },
    {
      name: "First Name",
      selector: "first_name"
    },
    {
      name: "Last Name",
      selector: "last_name"
    },
    {
      name: "Email",
      selector: "email"
    }
];
