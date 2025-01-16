import { useEffect, useState } from "react";
import Message from "./Message";
import "./style.css";

import mail from "../../assets/icons/Mail.svg";
import money from "../../assets/icons/money.svg";

// Define the type for a single news item
type NewsItem = {
  type: "Message" | "Notification"; // Type of item
  id: number;
  subjectOrType: string; // Subject for messages, type for notifications
  date: string; // ISO format date
  isRead: boolean; // Read status
};

function News() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]); // Store the latest 4 items

  // Fetch data from the backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the JWT token
        const response = await fetch("http://localhost:5289/api/Users/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add the JWT token
          },
        });

        if (response.ok) {
          const data: NewsItem[] = await response.json(); // Explicitly type the response
          setNewsData(data); // Store the fetched data in state
        } else {
          console.error("Failed to fetch dashboard data.");
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);
  // Render the latest messages and notifications
  return (
    <div className="News">
      {newsData.map((item) => (
        <Message
          icon={item.type === "Message" ? mail : money} // Use the appropriate icon
          msg={item.subjectOrType} // Subject for messages, type for notifications
          date={new Date(item.date).toLocaleDateString()} // Format the date
        />
      ))}
    </div>
  );
}

export default News;