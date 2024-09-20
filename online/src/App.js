import { Button } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavBar2 from "./components/Navbar2";
import NotificationDetails from "./components/Notification";
import { useState } from "react";

function App() {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const notifications = [
    {
      id: 1,
      title: "Update Available",
      message: "A new version of the app is available. Please update.",
      timestamp: Date.now() - 3600000, // 1 hour ago
    },
    {
      id: 2,
      title: "Server Maintenance",
      message: "Scheduled maintenance will occur tonight at 12 AM.",
      timestamp: Date.now() - 7200000, // 2 hours ago
    },
  ];
  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleCloseDetails = () => {
    setSelectedNotification(null);
  };
  return (
    <div className="App">
      <Navbar />
      <NavBar2 />
      <Footer />
      <div style={{ padding: "16px" }}>
        <h1>Notification Center</h1>
        <div>
          {notifications.map((notification) => (
            <Button
              key={notification.id}
              variant="outlined"
              onClick={() => handleNotificationClick(notification)}
              sx={{ margin: "8px" }}
            >
              {notification.title}
            </Button>
          ))}
        </div>
        {selectedNotification && (
          <NotificationDetails
            notification={selectedNotification}
            onClose={handleCloseDetails}
          />
        )}
      </div>
    </div>
  );
}

export default App;
