// // NotificationDetails.js
// import React from "react";
// import { Card, CardContent, Typography, Button } from "@mui/material";

// const NotificationDetails = ({ notification, onClose }) => {
//   return (
//     <Card sx={{ maxWidth: 400, margin: "16px auto" }}>
//       <CardContent>
//         <Typography variant="h6" component="div">
//           {notification.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {notification.message}
//         </Typography>
//         <Typography variant="caption" color="text.secondary">
//           {new Date(notification.timestamp).toLocaleString()}
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 2 }}
//           onClick={onClose}
//         >
//           Close
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default NotificationDetails;
// NotificationDetails.js
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const NotificationDetails = ({ notification, onClose }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "16px auto" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {notification.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {notification.message}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {new Date(notification.timestamp).toLocaleString()}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={onClose}
        >
          Close
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotificationDetails;
