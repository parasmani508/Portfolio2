import {
  FaHtml5,
  FaCss3,
  FaGithubAlt,
  FaGit,
  FaBootstrap,
  FaPhoneAlt,
  FaGithub,
  FaTwitter,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {TbBrandVscode} from "react-icons/tb";
import {DiJava} from "react-icons/di"
import {SiSublimetext} from 'react-icons/si'
import * as Unicons from '@iconscout/react-unicons';
import {TbBrandMysql} from "react-icons/tb"
import {AiFillApi} from "react-icons/ai"
// import { SiTypescript } from "react-icons/si";
//  import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import work7 from "./assets/work7.png";
import work8 from './assets/work8.png';

// import work5 from "./assets/work5.png";
// import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <a href="https://github.com/parasmani508">
    <FaGithub />
  </a>,
  <a href="https://www.linkedin.com/in/paras-kumar-1b3070216/">
    <FaLinkedin />
  </a>,
  < a href="https://www.instagram.com/parasmani10/">
    <FaInstagram />
  </a>,
  <a href="https://twitter.com/Parasma70943769">
    <FaTwitter />
  </a>

]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Paras"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+91 9119030508"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "parasmani508@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />,<Unicons.UilReact/>,<DiJava/>,<TbBrandMysql/>,<AiFillApi/>
, <FaBootstrap />]



export const certificates = [
 <TbBrandVscode/>,<SiSublimetext/>,<FaGithubAlt />, <FaGit />
]

export const workImages = [
  
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "app",
    link:"https://github.com/parasmani508/Netflix-Clone",
    
  
  },
  
  
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "design",
    link:"https://github.com/parasmani508/Coffee-shop-landing-page"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "app",
    link:"https://friendly-griffin-c2c7d9.netlify.app/"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
    link:"https://github.com/parasmani508/Crypto-App"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",link:"https://github.com/parasmani508/Weather-project"
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    link:"https://github.com/parasmani508/Starbucks-landing-page"
  },
  {
    id: 7,
    img: work7,
    name: "project 7",
    category: "design",
    link:"https://github.com/parasmani508/Projects"
  },
  {
    id: 8,
    img: work8,
    name: "project 8",
    category: "design",
    link:"https://github.com/parasmani508/Portfolio1",
  },
  
]


export const workNavs = [
  "All", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Roorkee, Uttrakhand"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    // infoText: "parasmani508@gmail.com"
    infoText: "parasmani508@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    // infoText: "+91 9119030508"
    infoText: "+91 9119030508"
  }
]
