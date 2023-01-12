import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
 
export const navData = [
  {
    id: 0,
    icon: <HomeIcon/>,
    text: "Home",
    link: "/"
  },
  {
    id: 1,
    icon: <PersonIcon/>,
    text: "Clients",
    link: "clients"
  },
  {
      id: 2,
      icon: <PersonAddIcon/>,
      text: "Add Client",
      link: "addclient"
    },
  {
    id: 3,
    icon: <BarChartIcon/>,
    text: "Dashboard",
    link: "dashboard"
  },
]