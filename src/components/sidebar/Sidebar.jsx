import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Fx_IT_admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>Courses</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>Times</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>Weak</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>Payment</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>Notification</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>System Health</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>Logs</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>Settings</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>Profile</span>
          </li>
          <li>
            {/* <PersonOutlineIcon className="icon" /> */}
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
