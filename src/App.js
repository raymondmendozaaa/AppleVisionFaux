import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import InsertQues from "./pages/InsertQues";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

import "./style.css";

export default function App() {
  const ques = [
    { qid: 1000, qname: "Is the Apple Vision Pro AR or VR?" },
    { qid: 1001, qname: "Can I wear the Apple Vision Pro with glasses?" },
    { qid: 1002, qname: "How much does the Apple Vision Pro cost?" },
  ];
  const ans = [
    {
      aid: 1,
      aname:
        "The Apple Vision Pro is a mixed-reality headset that combines augmented reality (AR) and virtual reality (VR). Meaning that you can either completely immerse yourselff into the virtual reality world, or use the headset to add an augmented reality layer to your physical space. Meaning that with AR, you can run applications like Contacts, Messages, Music, etc. This headset was launched with 600 new apps including Zoom, Microsoft 365, and more!",
      qid: 1000,
    },
    {
      aid: 2,
      aname:
        "You shouldn't wear the Apple Vision Pro while wearing glasses, as the headset was not designed to accomodate glasses. Wearing both simultaneously could result in damaging your headset.",
      qid: 1001,
    },
    { aid: 3, aname: "The Apple Vision Pro has a whopping price of $3,499 for the 256GB base storage model.", qid: 1002 },
  ];
  const [questions, setQuestions] = useState(ques);
  const [answers, setAnswers] = useState(ans);
  const aidRef = useRef();
  const anameRef = useRef();
  const qidRef = useRef();
  const handleInsert = () => {
    let ans = {};
    ans.aid = Number(aidRef.current.value);
    ans.aname = anameRef.current.value;
    ans.qid = Number(qidRef.current.value);
    const tempAnswers = [...answers, ans];
    setAnswers(tempAnswers);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home questions={questions} answers={answers} />}
          />{" "}
          <Route
            path="insertques"
            element={
              <InsertQues
                aidRef={aidRef}
                anameRef={anameRef}
                qidRef={qidRef}
                handleInsert={handleInsert}
              />
            }
          />
          <Route path="/insert" element={<NoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
