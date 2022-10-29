import picture from './picture.svg';
import './App.css';

function Links(props){
  return (
<button id={props.id} className="Link-body">
  <a className="button-link" href={props.url}>{props.name}</a>
  <p className="d-block">{props.subText ? props.subText : null}</p>
</button>
  )
}

function App() {
  const twitterUserName = 'OmowunmiEkun1';

  let profileLinks = [
    {
      id:"btn_twitter",
      name:"Twitter",
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
      <img id="profile_img" src={picture} alt="logo"/>
      <p id="twitter" className="bold">{twitterUserName}</p>
      <p id="slack" className="no-visibility">Omowunmi ekun</p>
      {profileLinks.map(profileLink => {
       return <Links key={profileLink.id} id={profileLink.id} name={profileLink.name} 
        url={profileLink.url} subText={profileLink.subText} />
      })}
    </div>
  );
}

export default App;
