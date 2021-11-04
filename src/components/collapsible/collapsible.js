import React from "react";
import { Collapse, Fade } from "@mui/material";
import { Box } from "@mui/system";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./collapsible.scss";

const default_class = "collapsible";

export default function Collapsible({
  children = <div />,
  open,
  header,
  onToggle,
  className,
  width
}) {
  return (
    <Box
      sx={{ boxShadow: 3 },{ borderRadius: 1 }} 
      className={`${default_class} ${className}`}
    >
      <Box className={`${default_class}-header`}>
        <React.Fragment>{header}</React.Fragment>
        <Box
          onClick={() => onToggle()}
          className={`${default_class}-header-indicator`}
        >
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Box>
      </Box>
      <Box className={`${default_class}-body`}>
        <Collapse orientation="vertical" in={open}>
          {children}
        </Collapse>
      </Box>
    </Box>
  );
}
