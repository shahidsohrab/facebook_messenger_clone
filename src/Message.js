// import { Card, CardContent, Typography } from "@mui/material";
// import React, { forwardRef } from "react";

// import "./Message.css";
// //here forwardref is styling using react flip move
// const Message = forwardRef(({ message, username }, ref) => {
//   const isUser = username === message.username;

//   return (
//     <div ref={ref} className={`message ${isUser && "message_user"}`}>
//       <Card className={isUser ? "message_userCard" : "message_guestCard"}>
//         {/* for every user below code will be will alll the styling and all but the cod user ${} states if the sender is user itsel then perform diffeerent action */}
//         <CardContent>
//           <Typography color="black" variant="h5" component="h2">
//             {!isUser && `${message.username}: `} {message.message}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// });

// export default Message;

///chat gtp corrected code
import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = message && username && username === message.username;

  if (!message) {
    return null; // return null if message is undefined
  }

  return (
    <div ref={ref} className={`message ${isUser ? "message_user" : ""}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography color="black" variant="h5" component="h2">
            {/* {`${message.username}: ${message.message}`} */}
            {!isUser && `${message.username || "Unknown User"}: `}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;