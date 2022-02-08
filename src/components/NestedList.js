import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { AccordionDetails } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import TrainIcon from "@mui/icons-material/Train";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { BusAlert } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function NestedList(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 660, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Переезды и перелеты
        </ListSubheader>
      }
    >
      {props.data.map((transfer) => {
        let destination = ` ${transfer.date} ${transfer.location["departure_point"]} --> ${transfer.location["arrival_point"]}`;
        let additional_info = `отправление: ${transfer.time.departure} прибытие: ${transfer.time.arrival} прочее: ${transfer.additional_info}`;

        return (
          <>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                {transfer.vehicle === "plane" ? (
                  <FlightIcon />
                ) : transfer.vehicle === "bus" ? (
                  <AirportShuttleIcon />
                ) : (
                  <TrainIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={destination} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={additional_info} />
                </ListItemButton>
              </List>
            </Collapse>
          </>
        );
      })}
    </List>
  );
}
