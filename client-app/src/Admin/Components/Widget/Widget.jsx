import "./Widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';



const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;

  switch (type) {
    case "candidates":
      data = {
        title: "CANDIDATES",
        isMoney: false,
        link: "See all Candidates",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "recruiters":
      data = {
        title: "RECRUITERS",
        isMoney: false,
        link: "View all recruiters",
        icon: (
          <HailOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "jobs":
      data = {
        title: "JOBS",

        link: "",
        icon: (
          <BusinessCenterOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "applications":
      data = {
        title: "APPLICATIONS",

        link: "See details applications ",
        icon: (
          <PendingActionsOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter" >
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
