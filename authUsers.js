// authUsers.js - Development users (remove for production)
// TODO: Move user management to database
export default [
  { 
    username: 'admin', 
    passwordHash: '$2b$10$UJlWhn/sc355G5g6clSyd.s1DAFMtj85MLvRpDIZTEpjWCN8.Ztv6', 
    role: 'master' 
  },
  { 
    username: 'user', 
    passwordHash: '$2b$10$KLlbWq0KV5h11YP.z8vWGuTssNIAsUMzHbOam2UsyVip3/02Y7loK', 
    role: 'originator' 
  }
];
