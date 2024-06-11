// import { Box } from "@mui/material";
// import React from "react";
// import UserData from "./Constant/UserData";

// const User: React.FC = () => {
//   return <Box>
//     User
//     <UserData />
//   </Box>
// };

// export default User;

import React from 'react';
import { Box } from '@mui/material';
import UserList from './Constant/UserList';
import users from './Constant/user';


const User: React.FC = () => {
  return (
    <Box sx={{ p: "2vmin" , backgroundColor:"white", }}>
      <UserList users={users} />
    </Box>
  );
};

export default User;
