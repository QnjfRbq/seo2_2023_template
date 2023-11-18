import { studentInfo } from "./studentInfo.js";

document.title = `${studentInfo.성명}`;

const title = document.querySelector("#title");
title.innerHTML = `MANGOSTAR PORTFOLIO`;
const subtitle = document.querySelector("#subtitle");
subtitle.innerHTML = `${studentInfo.성명}`;

const profBtns = document.querySelectorAll(".subject");
profBtns.forEach((eachProf, idx) => {
  const propName = `지도교수${idx + 1}`;
  eachProf.innerHTML = `${studentInfo[propName]}`;
});

const studentListBtn = document.querySelector("#studentList");
studentListBtn.href = "https://spctrm404.github.io/smcd_dsc_2023_1";
