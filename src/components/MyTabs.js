import React from "react";
import { useState } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";

import MenuList from "./MenuList";

export default function MyTabs({ data }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  return (
    <div>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          {data[0]?.table_menu_list.map((dish, index) => {
            return (
              <Tab
                label={dish.menu_category}
                id={`tabpanel-${index}`}
                aria-controls={`tab-${index}`}
              />
            );
          })}
        </Tabs>
      </AppBar>

      {data[0]?.table_menu_list.map((dish, index) => {
        return (
          <TabPanel value={selectedTab} index={index}>
            <MenuList data={dish.category_dishes} />
          </TabPanel>
        );
      })}
    </div>
  );
}
