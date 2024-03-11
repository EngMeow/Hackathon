/* eslint-disable react/prop-types */
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
export const SubDescription = ({ sub }) => {
  const paragraphs = sub.description.split("\n");

  return (
    <div className="wrapper" id="subdescription">
      <div className="description">
        <h3 className="fw-bold">Description</h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="details">
        <h4 className="fs-6 my-2 ">Hackathon</h4>
        <h3 className="fw-bold fs-3 my-2">{sub.hackathonName}</h3>
        <p>
          <CalendarTodayIcon className="me-2 my-2"/> {"  "}
          {`  ${new Date(sub.hackathonStartDate).getDate()} ${new Date(
            sub.hackathonStartDate
          ).toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}`}

          {" "}-{" "}
          
          {` ${new Date(sub.hackathonEndDate).getDate()} 
          ${new Date(sub.hackathonEndDate).toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}`}
        </p>
        <a href={sub.githubRepositoryLink} target="_blank">
          <GitHubIcon /> GitHub Repository
        </a>
        {sub.otherLinks && (
          <>
            <br />
            <a href={sub.otherLinks} target="_blank">
              <LaunchIcon /> Other Link
            </a>
          </>
        )}
      </div>
    </div>
  );
};
