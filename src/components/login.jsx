import React from 'react';
import '../static/css/login.css';
import {Redirect} from 'react-router-dom';
import Terminal from 'terminal-in-react';
import loginImage from '../static/assets/figlet_daemon.PNG'
function Login(){
    const Login = (username,password) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST',"http://daemon.abbhutto.com/api/user/login",true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.responseType = 'json';
        xhr.addEventListener('load',() => {
            if(xhr.status === 200){
                if(xhr.response.token){
                    sessionStorage.setItem('user_token', JSON.stringify(xhr.response.token));
                    window.location.reload();
                }else{
                    window.alert(xhr.response.message);
                }
            }
        })
        xhr.send(`username=${username}&password=${password}`);
        return;
    }
    const AddUser = (user,upass,admin,apass) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST',"http://daemon.abbhutto.com/api/user/add",true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.responseType = 'json';
        xhr.addEventListener('load',() => {
            if(xhr.status === 200){
                window.alert(xhr.response.message);
            }
        })
        xhr.send(`username=${user}&upassword=${upass}&admin=${admin}&apassword=${apass}`);
        return;
    }
    return(
        <React.Fragment>
            {sessionStorage.getItem('user_token') && <Redirect to="/" />}
            <div className="login-header">
                <img src={loginImage} alt="login-header" />
            </div>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width : "80vw",
                margin : "auto"
                }}
            >
                <Terminal
                color='red'
                backgroundColor='transparent'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1.15em" }}
                commands={{
                    'open-google': () => window.open('https://www.google.com/', '_blank'),
                    popup: () => alert('Terminal in React'),
                    "daemon-add": {
                        method : (args) => {
                            AddUser(args._[0],args._[1],args._[2],args._[3]);
                        }
                    },
                    "daemon-login": {
                        method : (args) => {
                            Login(args._[0],args._[1]);
                        }
                    }
                }}
                descriptions={{
                    'open-google': 'opens google.com',
                    showmsg: 'shows a message',
                    alert: 'alert', popup: 'alert'
                }}
                msg=""
                />
            </div>
        </React.Fragment>
    );
}

export default Login;
