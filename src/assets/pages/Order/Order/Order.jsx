import { useState } from "react";
import coverImge from "../../../image/06.png"
import Cover from "../../Sheared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../../hooks/useMenu";

import OrderTabs from "./OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const categories = ["salad", "pizza", "dessert", "soup", "drinks"]
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    
    const [menu] = useMenu()
    
    

    const desserts = menu.filter(item => item.category === "dessert");
    const soups = menu.filter(item => item.category === "soup");
    const salads = menu.filter(item => item.category === "salad");
    const pizzas = menu.filter(item => item.category === "pizza");
    const drinks = menu.filter(item => item.category === "drinks");
    
    
    

    return (
        <div>

            <Helmet>
                <title> Blackpepper | Order Food</title>
            </Helmet>
            <Cover img={coverImge} title="order Food"></Cover> 
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
    </TabList>
            <TabPanel>
                    <OrderTabs items={salads}></OrderTabs>
           </TabPanel>
                <TabPanel>
                <OrderTabs items={pizzas}></OrderTabs>  
      </TabPanel>
      <TabPanel><OrderTabs items={soups}></OrderTabs></TabPanel>
      <TabPanel><OrderTabs items={desserts}></OrderTabs></TabPanel>
      <TabPanel><OrderTabs items={drinks}></OrderTabs></TabPanel>
    </Tabs>
                    
        </div>
    );
};

export default Order;