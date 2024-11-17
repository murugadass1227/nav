import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Rightbar from './Rightbar'
import Add from './Add'
import { Stack } from '@mui/material'

function Home() {
  return (
    <>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
          <Feed />
          <Rightbar />
        </Stack>
    <Add/>
    </>
  
  
  
  )
}

export default Home