import React, {useEffect} from "react";
import NavBar from "../components/Content/NavBar/NavBar";
import './projects.scss';
import Cards from "../components/Cards/Cards";
import {octokit} from "../security/token";
import {useState} from "react";
import Footer from "../components/FooterContainer/Footer";
import Line from "../Line/Line";
import axios from "axios";
const Projects = (props) => {

  const [data, setData] = useState([]);

  const username = "tejaskulkarni28";
  const url = `https://api.github.com/users/${username}/repos`;

  // useEffect(() => {
  //   octokit
  //     .request(url)
  //     .then((response) => {
  //       setData(response.data)
  //       console.log(response.data)
  //     })
  // }, [])

  useEffect(()=>{
    axios.request(url).then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
  },[])

  return (
    <div>
      <div className="projects-container">
        <NavBar/>
        <div className="projects-responsive-container">
        {data.map((value) => {
          
                  return (
                    <div className="projects-responsive-content1"><Cards className="card"
        id={value.id}
        title={value.name}
        html_url={value.html_url}
        description={value.description}/></div>)
    })
          
}
        </div>
        <Line/>
        <Footer/>
      </div>
    </div>
  )
}

export default Projects;

{/* <div className="projects-content">
<div className="projects-content-card-layout">
  <div className="inner-layout">
    {data.map((value) => {
      return (<Cards
        id={value.id}
        title={value.name}
        html_url={value.html_url}
        description={value.description}/>)
    })
}
  </div>
</div>
</div> */}