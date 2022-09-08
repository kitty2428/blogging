import { useState } from "react";
import "./sidebar.css";
import { Users } from "./users";

export default function Sidebar() {
  const [query, setQuery] = useState("");

  // console.log(Users.filter(user=>user.category.toLowerCase().includes("te")));
  return (
    <>
      <div className="sidebar">
        <div className="sidebaritem">
          <div className="sidebartitle">Explore Posts</div>
          <i className="searchicon fa-solid fa-magnifying-glass">
            <input
              type="text"
              placeholder="Start searching...."
              className="serach"
              onChange={(e) => setQuery(e.target.value)}
            />
          </i>
        </div>
        <div className="sidebaritem">
          <div className="sidebartitle">Categories </div>
          <ul className="sidebarlist">
            {Users.filter(user => user.category.toLowerCase().includes(query)).map((user) => (
              // || user.sub_category1.toLowerCase().includes(query) || user.sub_category2.toLowerCase().includes(query) || user.sub_category3.toLowerCase().includes(query)
              <li key={user.id} className="sidebarlistitem">{user.category}</li>
            
            ))}
          </ul>
        </div>
        <div className="sidebaritem">
          <div className="sidebartitle">Follow Us</div>
          <div className="sidebarsocial">
            <i className="sidebaricon fa-brands fa-facebook"></i>
            <i className="sidebaricon fa-brands fa-square-twitter"></i>
            <i className="sidebaricon fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}
