import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Navbar from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";
import { uiOpenModal } from "../../actions/ui";
import { useDispatch, useSelector } from "react-redux";
import { eventSetActive } from "../../actions/events";
import AddNewFab from "../ui/AddNewFab";

moment.locale("es");

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const CalendarScreen = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.calendar);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView" || "month")
  );

  const onDoubleClick = (e) => {
    // console.log(e);
    console.log("Abrir modal");
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const eventStyleGeter = (event, start, end, idSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return { style };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGeter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{ event: CalendarEvent }}
      />
      <AddNewFab />
      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
