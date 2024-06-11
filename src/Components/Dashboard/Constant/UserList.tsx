// import React from 'react'

// const UserData:React.FC = () => {
//   return (
//     <div>UserData</div>
//   )
// }

// export default UserData
import React from 'react';
import { Avatar, Box, Typography,  } from '@mui/material';

interface User {
  name: string;
  role: string;
  signInTime: string;
  avatarUrl: string;
  online: boolean;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        User
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {users.map((user, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <Avatar src={user.avatarUrl} sx={{ width: 56, height: 56, mr: 2 }} />
            <Box sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                {user.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {user.role}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sign in - {user.signInTime}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
              <Typography variant="body2" color={user.online ? 'green' : 'gray'}>
                {user.online ? 'Online' : 'Offline'}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UserList;

