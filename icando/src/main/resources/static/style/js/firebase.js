// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
//
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// import { getMessaging , getToken } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging.js"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCoNY4E_o4KyetKdJBoABcQaEI6AmqW2QU",
//     authDomain: "injoy-7c47b.firebaseapp.com",
//     projectId: "injoy-7c47b",
//     storageBucket: "injoy-7c47b.appspot.com",
//     messagingSenderId: "2107167545",
//     appId: "1:2107167545:web:1cdf64a8d31a710787cee8",
//     measurementId: "G-S0PBZPXY36"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//
// function requestPermission() {
//     Notification.requestPermission().then((permission) => {
//         if(permission ==="granted") {
//             console.log("ㅇㅇ");
//             const app = initializeApp(firebaseConfig);
//
//             const messaging = getMessaging(app);
//             getToken(messaging, {
//                 vapidKey:
//                     "BK2OxctKvo1LHw2aTAY4PFluv2XZGn3oSZtfqxyXQPqZwSRByQE8a65y0XVMbjBXOahGW0sbX7gH2Em2wzHs3Ak",
//             }).then((currentToken) => {
//                 if(currentToken) {
//                     console.log(currentToken);
//                     sendTokenToServer(currentToken);
//
//                 } else {
//                     console.log("ㅜㅜ");
//                 }
//             });
//         } else {
//             console.log("ㅠㅠ");
//         }
//     });
// }
//
// function sendTokenToServer(currentToken) {
//     // Ajax 요청 생성
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '/login/token', true);
//     xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 console.log('토큰이 성공적으로 업데이트되었습니다.');
//             } else {
//                 console.error('서버와의 통신 중 오류가 발생하였습니다.');
//             }
//         }
//     };
//     // 요청 본문 생성
//     var data = {
//         token: currentToken
//     };
//     // 요청 전송
//     xhr.send(JSON.stringify(data));
// }
//
//
//
//
// requestPermission();
