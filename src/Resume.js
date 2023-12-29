import React from 'react'
import './App.css'
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineFlight } from "react-icons/md";
import imagecv from './imagecv.jpg';

function Resume() {
  return (
    <div className='profile'>
      <div className='leftside'>
        <div className='start'>
        <img className='img' src={imagecv}  alt='ImageCv'/>
          <div>
            <h3>SMITH MATTHEW</h3>
            <p>Web developer</p>
          </div>
        </div>

        <div className='text'>
          <p> 
            <i>< CiLocationOn/></i>Bolivar Street # 123-Lima Peru
          </p>
          <p> 
            <i>< CgMail/></i>user@email.com
          </p>
          <p> 
            <i>< BsTelephone/></i>999-2222-444
          </p>
        </div>

        <div className='social'>
          <h4>SOCIAL</h4>
          <p> 
            <i className='i'><AiFillLinkedin/></i>@smithmat
          </p>
          <p> 
            <i><BiLogoFacebook/></i>@smithmat
          </p>
          <p>
            <i><AiOutlineInstagram /></i>@smithmat
          </p>
        </div>

        <div className='file'>
          <h4>PROFILE</h4>
          <p>I am a person, responsible with their work during working hours. 
            Finish various technical and higher studies at large universities. 
            I have several years of experience and achievements in the labor field.</p>
        </div>

        <div className='Education'>
          <h4>EDUCATION</h4>
          <div className='educon'>
            <div className='eduimg'>
              <span className='edubullet'></span>
              <span className='eduline'></span>
            </div>
            <div className='edude'>
              <h5>MASTER OF DESIGN</h5>
              <span className='eduname'>university of studies</span>
              <span className='eduyear'>2010-2015</span>
            </div>
          </div>

          <div className='educon'>
            <div className='eduimg'>
              <span className='edubullet'></span>
              <span className='eduline'></span>
            </div>
            <div className='edude'>
              <h5>WEB DEVELOPER</h5>
              <span className='eduname'>institute studies</span>
              <span className='eduyear'>2016-2019</span>
            </div>
          </div>
          
          <div className='educon'>
            <div className='eduimg'>
              <span className='edubullet'></span>
              {/* <span className='edline'></span> */}
            </div>
            <div className='edude'>
              <h5>MASTER IN UI/UX</h5>
              <span className='eduname'>institute studiess</span>
              <span className='eduyear'>2019-2021</span>
            </div>
          </div>
        </div>

        <div className='skill'>
          <h4>SKILLS</h4>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Sass</li>
            <li>Javascript</li>
            <li>Angular</li>
            <li>Firebase</li>
            <li>React</li>
          </ul>
        </div>
      </div>

      <div className='rightside'>
        <div className='experience'>
          <h4>EXPERIENCE</h4>
          <div className='educon'>
            <div className='eduimg'>
              <span className='edubullet'></span>
              <span className='eduline'></span>
            </div>
            <div className='edude'>
              <h5 >MASTER OF DESIGN</h5>
              <p className='para'>From 2013 to 2015 I Tech Soft
              <br/>
              Work in this company dedicating the best responsibility in the area that corresponds, 
              delivering the best results for the company and improving productivity.</p>
            </div>
          </div>

          <div className='educon'>
            <div className='eduimg'>
              <span className='edubullet'></span>
              <span className='eduline'></span>
            </div>
            <div className='edude'>
              <h5>UI / UX DESIGN AREA</h5>
              <p className='para'> From 2017 to 2019 |Adobe nc
              <br/>
              Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p>
            </div>
          </div>
          
          <div className='educon'>
            <div className='eduimg'>
              <span className='edubullet'></span>
              {/* <span className='edline'></span> */}
            </div>
            <div className='edude'>
              <h5>MOBILE PUBLICATION DEVELOPERN</h5>
              <p className='para'>
              From 2019 to 2021 | App Tech
              <br/>
             Work in this company dedicating the best responsibility in the area that corresponds, 
             delivering the best results for the company and improving productivity.</p>
            </div>
          </div>
        </div>
        
        <div className='certificates'>
          <h4>CERTIFICATES</h4>
          <h5>Certified for compliance in the work area (2012)</h5>
          <p>From 2013 to 2015 | Tech Soft
          <br/>
            Work in this company dedicating the best responsibility in the area that corresponds, 
            delivering the best results for the company and improving productivity.
          </p>
          
          <h5>Certificate of attendance on computer technology.</h5>
          <p>From 2017 to 2019 | Tech Soft
          <br/>
            Work in this company dedicating the best responsibility in the area that corresponds, 
            delivering the best results for the company and improving productivity.
          </p>
  
          <h5>Achievement medal for productivity excellence during the year (2019)</h5>
          <p>From 2019 to 2021 | Tech Soft
          <br/>
            Work in this company dedicating the best responsibility in the area that corresponds, 
            delivering the best results for the company and improving productivity.
          </p>
        </div>

        <div className='refer'>
          <h4>REFERENCES</h4>
          <ul>
            <li>Sr.Director</li>
            <li className='list1'>Mr.Clay Doe</li>
            <li>Phone:999-8888-444</li>
            <li>Email:user@gmail.com</li>
            
            <li>Sr.Director</li>
            <li className='list2'>Mr.Clay Doe</li>
            <li>Phone:999-8888-444</li>
            <li>Email:user@gmail.com</li>
          </ul>
        </div>
        
        <div className='langu'>
          <h4>LANGUAGES</h4>
          <ul>
            <li>Spanish</li>
            <li>Engilsh</li>
            <li>French</li>
          </ul>
        </div>

        <div className='inter'>
          <h4>INTERESTS</h4>
          <ul>
            <li><i className='ico1'><BiHeadphone/>
            <br/>
            </i>Music</li>

            <li><i className='ico2'><MdOutlineFlight/>
            <br/>
            </i>Travel</li>

            <li><i className='ico3'><FaBook/>
            <br/>
            </i>Read</li>

            <li><i className='ico4'><IoIosFitness/>
            <br/>
            </i>Fitness</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume