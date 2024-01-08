import { useState, useRef } from "react";
import {
  NotificationSvg,
  CardSvg,
  NotSvg,
  TotalSvg,
  SettingSvg,
  HomeSvg,
  ScoreListSvg,
  UserSvg,
  TestSvg,
} from "../assets/Icon/icon.jsx";
import Navigate from "./PanelComponents/PanelNav";
import Header from "./PanelComponents/PanelHeader";
import QuestionList from "./PanelComponents/PanelQuestions.jsx";
import TestCard from "./PanelComponents/PanelTest";
import SkorList from "./PanelComponents/PanelSkor";
import User from "./PanelComponents/PanelUser";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

export default function ScoreLists() {
  const { params } = useParams();

  const [notifi, setNotifi] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="bg-gray-100 h-screen"
    >
      <Navigate
        notifi={notifi}
        setNotifi={setNotifi}
        NotificationSvg={NotificationSvg}
        NotSvg={NotSvg}
      />
      <Header
        HomeSvg={HomeSvg}
        ScoreListSvg={ScoreListSvg}
        UserSvg={UserSvg}
        TestSvg={TestSvg}
        SettingSvg={SettingSvg}
      />
      <header className="relative p-2  rounded-xl bg-white w-[1200px] h-full  translate-x-[25%] mr-20 top-[40px]">
        <h2 className="text-2xl font-semibold text-purple-500 mb-2">Sorular</h2>
        <QuestionList params={params} />
      </header>
    </motion.div>
  );
}
