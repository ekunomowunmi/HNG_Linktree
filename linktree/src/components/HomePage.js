import React from 'react';

import { Link} from "react-router-dom";
import picture from '../assets/picture.svg';
import back from '../assets/back.svg';
import mobileIcon from '../assets/mobile_icon.svg';
import Footer from './Footer';

function BookLinks(props){
    return (
  <button id={props.id} className="Link-body">
    <a className="button-link " href={props.url}>{props.name}</a>
   {props.subText ? <p className="d-block subText">{props.subText}</p>:null} 
  </button>
    )
  }

function LinkToPage(props){
  return (
    <Link className='button-link' to={props.url}>
       <button id={props.id} className="Link-body">
      <span className="bold">{props.name}</span>
     {props.subText ? <p className="d-block subText">{props.subText}</p>:null} 
    </button>
    </Link>
   
      )
}

export default function HomePage() {
  const twitterUserName = 'OmowunmiEkun1';
  let routerLinks = [
    {
      id:"contact",
      name:"Contact",
      url:"/contact",
      subText: "The design offered by this team will blow your mind, It is absolutely wonderful"
    }
  ]
  let profileLinks = [
    {
      id:"btn_twitter",
      name:"Twitter Link",
      url:"https://twitter.com/OmowunmiEkun1",
      subText:null
    },
    {
      id:"btn__zuri",
      name:"Zuri Team",
      url:"https://training.zuri.team/",
      subText:null
    },
    {
      id:"books",
      name:"Zuri Books",
      url:"https://books.zuri.team/",
      subText:"This is where you find books about design and coding"
    },
    {
      id:"book__python",
      name:"Python Books",
      url:`https://books.zuri.team/python-for-beginners?ref_id=${twitterUserName}`,
      subText:null
    },
    {
      id:"pitch",
      name:"Background Check for Coders",
      url:"https://background.zuri.team/",
      subText:"All Developers that go through our platform are properly checked, and tested stringently to give you the best support and functionality"
    },
    {
      id:"book__design",
      name:"Design Books",
      url:"https://books.zuri.team/design-rules",
      subText: "The design offered by this team will blow your mind, It is absolutely wonderful"
    }
  ]

  return (

     <div className="App">
      <div>
         <img id="profile_img" src={picture} alt="logo"/>
         <img id="back" className="back" src={back} alt="back"/>
         <img id="mobileIcon" className="mobile-back" src={mobileIcon} alt="icon"/>
      <p id="twitter" className="bold">{twitterUserName}</p>
      <p id="slack" className="no-visibility">Omowunmi ekun</p>
      </div>
     
      {profileLinks.map(profileLink => {
       return <BookLinks key={profileLink.id} id={profileLink.id} name={profileLink.name} 
        url={profileLink.url} subText={profileLink.subText} />
      })}
      {routerLinks.map(routerLink => {
        return <LinkToPage key={routerLink.id} id={routerLink.id} name={routerLink.name}
        url={routerLink.url} subText={routerLink.subText} />
      })}
      <Footer/>
    </div>

   );
}