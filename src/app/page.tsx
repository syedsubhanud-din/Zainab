'use client'
import React from 'react'
import Sidebar from '../Components/sidebar'
import Table from '../Components/checktable'
import Linechart from '../Components/linechart'
import Navigation from '../Components/navigation'
import Barchart from '../Components/barchart'
import Piechart from '../Components/piechart'
import Card from '../Components/card'
import Calender from '../Components/calendar'
import Box from '@mui/material/Box';

function Home() {
  return (
    <>
      <Box sx = {{
        display :'flex',
        flexWrap: 'wrap',
      }}>
        <Sidebar />
        <Navigation />
        <Card />
        <Table />
        <Barchart />
        <Piechart />
        <Linechart />
        <Calender/>
      </Box>
    </>
  )
}

export default Home
