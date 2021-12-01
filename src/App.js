import "./App.css";
import MyProfile from './Profile/component/MyProfile';
import myPhoto from './imagee.jpg';
function App() {
    const handleName =()=>{alert("Samira Aloui")};
    const styleObject={color: "white", textAlign:'center'}
    return (
        <div className="App" style={styleObject}>
   
           <MyProfile  
                FullName = "  Samira Aloui"  
                Age ="27/06/01"
                profisson="  GoMyCode-Student"
                bio = " 💫 Full-Stack Javascript  💫 ">
            <img src={myPhoto} alt ="myPhoto" />
          
            </MyProfile>


            <boutton onClick={handleName} > Click   </boutton>
        </div>
    );
}

export default App
