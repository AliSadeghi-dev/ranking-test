"use client";
import Body from "@/components/layout/body/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
// import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";
export default function Home() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div className="home-layout">
      <div className="home-response">
        <Body />
      </div>
    </div>
  );
}
