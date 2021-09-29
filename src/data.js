import image1 from "../public/images/image.png";
import image2 from "../public/images/imagen2.png";
import image3 from "../public/images/imagen3.png";

const data = [
  { title: "Languages", skills: ["JavaScript", "HTML", "CSS"], id: 1 },
  {
    title: "Tecnologies",
    skills: ["Nodejs", "Express", "MongoDB", "Sockets", "Git", "Linux"],
    id: 2,
  },
  { title: "Frameworks", skills: ["React js", "Next js"], id: 3 },
  {
    title: "Related Knowledge",
    skills: ["Calculus I & II", "Algebra & Geometry", "Ecommerce & Marketing"],
    id: 4,
  },
];

const dataProject01 = [
  {
    title: "FrontEnd",
    skills: ["React Js", "Librerias", "CSS"],
    id: 1,
    openItem: true,
  },
  {
    title: "BackEnd",
    skills: ["Nodejs", "Express", "MongoDB", "Librerias"],
    id: 2,
    openItem: true,
  },
];

const projects = [
  {
    title: "Project 1",
    number: "01.",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    image: image1,
    layoutId: "imageOne",
    data: dataProject01,
    link: "#",
  },
  {
    title: "Project 2",
    number: "02.",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    image: image2,
    layoutId: "imageTwo",
    data: dataProject01,
    link: "#",
  },
  {
    title: "Project 3",
    number: "03.",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    image: image3,
    layoutId: "imageThree",
    data: dataProject01,
    link: "#",
  },
];

module.exports = {
  data,
  dataProject01,
  projects,
};
