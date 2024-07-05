'use client'
import React from "react";
import {Calendar} from "@nextui-org/react";
import type {DateValue} from "@react-types/calendar";
import {parseDate} from "@internationalized/date";
import Box from '@mui/material/Box';


export default function App() {
  let [value, setValue] = React.useState<DateValue>(parseDate("2024-03-07"));

  return (
    <Box sx={{margin: 10, fontSize: 20}}>
        <Calendar
      aria-label="Date (Controlled)" 
      value={value} 
      onChange={setValue} 
    />
    </Box>
  );
}
