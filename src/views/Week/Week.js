import React from "react";
import Collapsible from "../../components/collapsible/collapsible";
import Day from "../Day/Day";
import "./Week.scss";

const default_class = "week-container";

export default function Week(props) {
  const { sx, ...other } = props;
  const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  const renderHeader = () => {
    return (
      <div className={`${default_class}-collaps`}>
        <div className={`title`} onClick={handleChange}>
          Week title
        </div>
        <div className={`action`}>Remove</div>
      </div>
    );
  };

  return (
    <div className={default_class}>
      <Collapsible
        open={open}
        onToggle={handleChange}
        showIndicator
        header={renderHeader()}
        className={`${default_class}-days`}
      >
        <Day/>
        <Day/>
      </Collapsible>
    </div>
  );
}
