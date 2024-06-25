import Swal from "sweetalert2";
import "./App.css"
import { useState } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");
    const [ user, setUser ] = useState({...emptyUser});
    const [ inputData, setInputData ] = useState({...emptyUser});



    const emptyUser = {
        username: "",
        email: ""
    }

    
    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleOkClick = () =>{
        setUser(inputData);
    }

    const handleImgClick = () => {
        Swal.fire({
            title: "프로핑 이미지 변경",
            text: "프로필 이미지를 변경하시겠습니까?",
            showCancelButton: "true",
            confirmButtonText: "예",
            cancelButtonText: "아니오"
        }).then(result => {
            if(result.isConfirmed) {
                const fileElement = document.createElement("input");
                fileElement.setAttribute("type", "file");
                fileElement.click();

                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();
                    fileReader.onload = (e) => {
                        setImgSrc(e.target.result);
                    }
                    fileReader.readAsDataURL(file)
                
                }
            }
        })
        
    }
    return (
        <>
            <div className="container">
                <div className="profile-box">
                    <div className="profile">
                        <h1>프로필</h1>
                    </div>
                    <div className="img-frame" onClick={handleImgClick}>
                        <img src={imgSrc} alt=""/>
                    </div>
                    <div className="input-container">
                        <div className="input-box">
                            <span>이름</span>
                            <input type="text" name="username" onChange={handleInputChange} value={inputData.username}/>
                        </div>
                        <div className="input-box">
                            <span>이메일</span>
                            <input type="text" name="email" onChange={handleInputChange} value={inputData.email}/>
                        </div>
                    </div>
                    
                    <button onClick={handleOkClick}>저장</button>
                </div>
            </div>
            
        </>
    )
}

export default App;