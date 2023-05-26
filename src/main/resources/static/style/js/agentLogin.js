let agentToken = "";
$(document).ready(function() {

    $('#form').keypress(function(event) {
        if (event.which === 13) { // 엔터 키의 keyCode는 13입니다.
            event.preventDefault(); // 기본 동작인 폼 제출을 막습니다.
            loginCheck(); // 로그인 처리 함수 호출
        }
    });
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getMessaging , getToken } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoNY4E_o4KyetKdJBoABcQaEI6AmqW2QU",
    authDomain: "injoy-7c47b.firebaseapp.com",
    projectId: "injoy-7c47b",
    storageBucket: "injoy-7c47b.appspot.com",
    messagingSenderId: "2107167545",
    appId: "1:2107167545:web:1cdf64a8d31a710787cee8",
    measurementId: "G-S0PBZPXY36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function loginCheck() {
    console.log("유효성 검사 함수 출력됨"); // htmlForm이 제대로 넘어갔는지 확인 용도
    requestPermission().then(() => {
        let url = "/agentLogin";

        let check = true;

        const agentId = document.getElementById("agentId").value;
        const agentPassword = document.getElementById("agentPassword").value;
        console.log("심부름꾼아이디:"+agentId);
        if (agentId === "") {
            alert('아이디가 입력되지 않았습니다');
            check = false;
        } else if (agentPassword === "") {
            alert('비밀번호가 입력되지 않았습니다');
            check = false;
        }

        if (check === true) {
            $.ajax({
                url: url,
                method: "POST",
                timeout: 0,
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify({
                    agentId: agentId,
                    agentPassword: agentPassword,
                    agentAlramToken : agentToken
                }),
            }).done(function(response) {
                alert(response.agentId)
                alert(response.agentName)
                // 처리 로직
                if(response !== ''){
                    console.log("agent로그인성공:"+response.agentName);
                    alert("로그인성공")
                    location.href = `/?agentName=${response.agentName}&agentId=${response.agentId}`
                }else {
                    console.log("리스폰스: "+response);
                    alert("로그인실패")
                    location.href = "/agentLogin"
                }
            });
        }
    });
}

function requestPermission() {
    return new Promise((resolve, reject) => {
        Notification.requestPermission().then((permission) => {
            if(permission ==="granted") {
                console.log("ㅇㅇ");
                const app = initializeApp(firebaseConfig);

                const messaging = getMessaging(app);
                getToken(messaging, {
                    vapidKey:
                        "BK2OxctKvo1LHw2aTAY4PFluv2XZGn3oSZtfqxyXQPqZwSRByQE8a65y0XVMbjBXOahGW0sbX7gH2Em2wzHs3Ak",
                }).then((currentToken) => {
                    if(currentToken) {

                        agentToken = currentToken;
                        resolve();
                    } else {
                        console.log("ㅜㅜ");
                        reject();
                    }
                });
            } else {
                console.log("ㅠㅠ");
                reject();
            }
        });
    });
}