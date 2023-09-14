"use client";

import SideNav from "@/components/SideNav";
import styles from "../styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import List from "@/components/List";
import BussinesList from "@/components/BussinesList";
import GlobalApi from "@/services/GlobalApi";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getNearByPlace();
  }, []);

  const getNearByPlace = () => {
    GlobalApi.getNearByPlace("restaurant", "-33.8587323", "151.2100055").then(
      (resp) => {
        console.log(resp);
      }
    );
  };

  return (
    <div className="flex">
      <SideNav></SideNav>
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10">
        <div>
          <SearchBar></SearchBar>
          <List></List>
          <BussinesList></BussinesList>
        </div>
        <div>GoogleMap</div>
      </div>
    </div>
  );
}
