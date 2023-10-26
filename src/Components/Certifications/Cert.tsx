import "./Cert.scss"
import React from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import hsimg from "../../assets/hubspot.png";
import jsimg from "../../assets/jscert.png"
import certImg from "../../assets/certificate.png"
import awsCert from "../../assets/aws.png"
import OpenInNewIcon from "@mui/icons-material/OpenInNew";




const Certifications = () => {
  return (
    <section id="cert">
      <h2 className='cert-title'>Accomplishments <img alt="img" src={certImg}/></h2>
      <div className='cert'>
          <div>
            <a href="https://app-eu1.hubspot.com/academy/achievements/0fp51zm9/en/1/bui-quan/hubspot-cms-for-developers">
                    HubSpot CMS for Developers  <OpenInNewIcon className='badge-icon' style={{fontSize: "14px"}}/>
            </a> <br></br>
            <img src={hsimg} alt="" />
          </div>
          <div>
            <a href="https://aws.amazon.com/verification">
                    Certified AWS Cloud Practitioner <OpenInNewIcon className='badge-icon' style={{fontSize: "14px"}}/>
            </a>
            <img src={awsCert} alt="" />
          </div>
          <div>
            <a href="https://freecodecamp.org/certification/fcce950a9cb-8660-4f84-8ac9-af1083d1512e/javascript-algorithms-and-data-structures">
                    JavaScript Algorithms & Data Structures <OpenInNewIcon className='badge-icon' style={{fontSize: "14px"}}/>
            </a>
            <img src={jsimg} alt="" />
          </div>
         

        </div>
    </section>
  )
}

export default Certifications