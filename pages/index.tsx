/* eslint-disable react/no-unescaped-entities */
import HomeSection from "@/components/sections/homeSection/homeSection";
import Head from "next/head";
import AboutmeSection from "../components/sections/aboutmeSection/aboutmeSection";
import ContactSection from "../components/sections/contactSection/contactSection";
import WorkSection from "./works";
import AnimatedCursor from "react-animated-cursor";
import { useAppContext } from "@/context/appContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [cursorTextPosition, setCursorTextPosition] = useState({ x: 0, y: 0 });
  const { textColor, cursorText, outerScale } = useAppContext();

  const handleMouseMove = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;

    // Ustaw nową pozycję tekstu kursora
    setCursorTextPosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    // Wyczyszczenie nasłuchiwania po odmontowaniu komponentu
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <Head>
        <title>SzymborskiDev | Frontend Developer</title>
        <meta
          property="og:title"
          content="SzymborskiDev"
          key="FrontendDeveloper"
        />
      </Head>
      <main>
        <HomeSection />
        <AboutmeSection />
        <WorkSection />
        <ContactSection />
        <AnimatedCursor
          innerSize={12}
          outerSize={12}
          color="0, 0, 0"
          outerAlpha={0.5}
          innerScale={0.4}
          outerScale={outerScale}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            "p",
            "lets-talk",
          ]}
        />
        {cursorText && (
          <div
            style={{
              position: "fixed",
              top: cursorTextPosition.y,
              left: cursorTextPosition.x,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 1000,
              color: textColor,
            }}
          >
            {cursorText}
          </div>
        )}
      </main>
    </>
  );
}
