import { useRef, useState } from "react";
import "./App.css"
import Swal from "sweetalert2";

function App() {
    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const [ userList, setUserList ] = useState([]);
    const [ inputData, setInputData ] = useState({ ...emptyUser });

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { username, password, name } = inputRef;
            switch(e.target.name) {
                case "username":
                    password.current.focus();
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    username.current.focus();
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({ ...emptyUser });
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleDeleteClick =  (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 데이터를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [  ...userList.filter((user, index) => index !== parseInt(e.target.value)) ])
            }
        });

        // if(window.confirm("해당 사용자를 삭제하시겠습니까?")) {
        //     setUserList(userList => [  ...userList.filter((user, index) => index !== parseInt(e.target.value)) ])
        // }
    }

    return <>

        <input name="username" placeholder="사용자명"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={inputData.username}
            ref={inputRef.username} />
        <input name="password" placeholder="비밀번호"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={inputData.password}
            ref={inputRef.password} />
        <input name="name" placeholder="이름"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={inputData.name}
            ref={inputRef.name} />

        <thead>
            <tr>
                <th>index</th>
                <th>username</th>
                <th>password</th>
                <th>name</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            {
                userList.map(({ username, password, name }, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{username}</td>
                            <td>{password}</td>
                            <td>{name}</td>
                            <td>
                                <button onClick={handleDeleteClick} value={index}>delete</button>
                            </td>
                        </tr>
                    );
                })
            }
        </tbody>
    </>
}

export default App;