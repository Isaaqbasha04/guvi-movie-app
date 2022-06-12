import logo from './logo.svg';
import './App.css';

function App() {

  const names= ["Mayuri", "Abhay", "Netravathi"];

  const students=[
    { 
      name:"Mayuri" ,
      pic:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodmorningimagess.online%2F2021%2F09%2Fbest-profile-pic-for-boys.html&psig=AOvVaw3CXBfw89YxUAjtrwwzGAHq&ust=1654150092121000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCImLfLi_gCFQAAAAAdAAAAABAP" 
  },
      
       {
         name:"Abhay",
       pic:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fbestprofilepictures.com%2Fwp-content%2Fuploads%2F2021%2F04%2FCool-Profile-Picture.jpg&imgrefurl=https%3A%2F%2Fbestprofilepictures.com%2Fcool-profile-pictures%2F&tbnid=faHSK7I5b8FzcM&vet=10CAcQxiAoB2oXChMIsIiYt8uL-AIVAAAAAB0AAAAAEAc..i&docid=OWLpuC57Oa3GDM&w=1080&h=1122&itg=1&q=profile%20picture&ved=0CAcQxiAoB2oXChMIsIiYt8uL-AIVAAAAAB0AAAAAEAc"
},
      
       {
         name:"Netravati",
       pic:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494790108377-be9c29b29330%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&tbnid=-H_ExttvR7ahYM&vet=12ahUKEwjKh7i2y4v4AhW6i9gFHf14B2wQMygIegUIARDtAQ..i&docid=b5C9ViMmmhpq-M&w=1000&h=1500&q=profile%20picture&ved=2ahUKEwjKh7i2y4v4AhW6i9gFHf14B2wQMygIegUIARDtAQ"
},
    
  ];

  return (
    <div className="App">

      {/* <Message name="Mayuri" 
      pic="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodmorningimagess.online%2F2021%2F09%2Fbest-profile-pic-for-boys.html&psig=AOvVaw3CXBfw89YxUAjtrwwzGAHq&ust=1654150092121000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCImLfLi_gCFQAAAAAdAAAAABAP" />
      
      <Message name="Abhay"
       pic="https://www.google.com/imgres?imgurl=https%3A%2F%2Fbestprofilepictures.com%2Fwp-content%2Fuploads%2F2021%2F04%2FCool-Profile-Picture.jpg&imgrefurl=https%3A%2F%2Fbestprofilepictures.com%2Fcool-profile-pictures%2F&tbnid=faHSK7I5b8FzcM&vet=10CAcQxiAoB2oXChMIsIiYt8uL-AIVAAAAAB0AAAAAEAc..i&docid=OWLpuC57Oa3GDM&w=1080&h=1122&itg=1&q=profile%20picture&ved=0CAcQxiAoB2oXChMIsIiYt8uL-AIVAAAAAB0AAAAAEAc" />
      
      <Message name="Netravati"
       pic="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494790108377-be9c29b29330%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&tbnid=-H_ExttvR7ahYM&vet=12ahUKEwjKh7i2y4v4AhW6i9gFHf14B2wQMygIegUIARDtAQ..i&docid=b5C9ViMmmhpq-M&w=1000&h=1500&q=profile%20picture&ved=2ahUKEwjKh7i2y4v4AhW6i9gFHf14B2wQMygIegUIARDtAQ" />
    </div> */}

    {students.map((student)=> (
    
    <Message name={student.name} pic={student.pic} />
    ))}

    </div>

  //   {names.map((nm)=> (    
  //   <welcome name={nm} />
  // ))}

   );
}

export default App;

function welcome(props){
  console.log(props);

  return(
    <div>
      <h1>Hello, {props.name} </h1>
    </div>
  )
}


function Message(props) {
  

  // console.log(props);

  return (
    <div>
      <img className="profile-pic"
        src={props.pic} alt={props.name} />
      <h1>Hello, {props.name} 🎉🎉😎 </h1>

      <counter />
    </div>
  );


}

function counter(){

  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);


  return (

    <div className="counters-container">
      <button className="like-button" onclick={() => setLike(like+1)}>
        👍{like}
      </button>
      <button className="dislike-button" onclick={() => setLike(dislike+1)}>
      👎 {dislike}
      </button>
    </div>
  )
}
