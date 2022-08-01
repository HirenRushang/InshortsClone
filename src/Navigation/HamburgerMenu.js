import React from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import categories from '../Data/Categories';
import MenuIcon from '@mui/icons-material/Menu';
import { CategoryContext } from '../Context/Context';
import { useContext } from 'react';




export default function HamburgerMenu() {
  const{setcategory} = useContext(CategoryContext)

    const [state, setState] = React.useState({
  
      left: false,
   
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <h1>Categories</h1>
          {categories.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={()=> setcategory(text)}>
                
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
       
      </Box>
    );
  
    return (
      <div>
     
          <React.Fragment key={"left"}>
            <Button onClick={toggleDrawer("left", true)}><MenuIcon /></Button>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </React.Fragment>
      
      </div>
    );
  }