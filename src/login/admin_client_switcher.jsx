import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import {CLIENT_ROLE , ADMIN_ROLE} from "../store/action"
import {useDispatch } from "react-redux"

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const [role, setRole] = React.useState("");

  const dispatch = useDispatch()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          icon={<ManageAccountsTwoToneIcon />}
          label="je suis un admin"
          sx={{ flexDirection: 'row', gap: 1 }}
          onClick={() => { setRole("admin"); dispatch(ADMIN_ROLE())}}
        />
        <Tab
          icon={<AccountCircleTwoToneIcon />}
          label="je suis un client"
          sx={{ flexDirection: 'row', gap: 1 }}
          onClick={() => { setRole("client"); dispatch(CLIENT_ROLE())}}
        />
      </Tabs>
    </Box>
  );
}
