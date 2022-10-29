import picture from './picture.svg';
import slack from './slack.svg';
import github from './github.svg';
import back from './back.svg';
import mobileIcon from './mobile_icon.svg';
import ingressive from './ingressive.svg';
import zuriLogo from './zuri_logo.svg';

import './App.css';

function Links(props){
  return (
<button id={props.id} className="Link-body">
  <a className="button-link " href={props.url}>{props.name}</a>
 {props.subText ? <p className="d-block subText">{props.subText}</p>:null} 
</button>
  )
}

function App() {
  const twitterUserName = 'OmowunmiEkun1';

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
       return <Links key={profileLink.id} id={profileLink.id} name={profileLink.name} 
        url={profileLink.url} subText={profileLink.subText} />
      })}
      <div className="social-icons">
        <img className="small-margin" id="slack_icon" src={slack} alt="slack"/>
        <img className="small-margin" id="github_icon" src={github} alt="git"/>
      </div>
      <div className="footer">
      <img className="small-margin footer-image" id="zuri_icon" src={zuriLogo} alt="slack"/>
      <p className="footer-text">HNG Internship 9 Frontend Task</p>
        <img className="small-margin footer-image" id="ingressive_icon" src={ingressive} alt="git"/>
      </div>
    </div>
  );
}

export default App;
