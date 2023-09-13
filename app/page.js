"use client";

import SideNav from "@/components/SideNav";
import styles from "../styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import List from "@/components/List";
import BussinesList from "@/components/BussinesList";

export default function Home() {
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
