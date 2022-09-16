import { withAuth } from "@clerk/nextjs/api";

// export const config = {
//     runtime: 'experimental-edge',
//   }
  
  export default withAuth( async function handler (req,res) {
  const { userId, sessionId, getToken } = req.auth;
console.log(req.auth)
    return res.status(200).json({ userId: userId, sessionId: sessionId})
  })