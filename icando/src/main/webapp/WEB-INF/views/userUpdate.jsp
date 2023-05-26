<%--
  Created by IntelliJ IDEA.
  User: mac
  Date: 2023/05/04
  Time: 4:41 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" tpye="text/css" href="/style/css/mypage.css">
    <title>회원탈퇴</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section>
    <div>
        <div class="profileSelect">
            <div class="selected">
                <a href="userMypage?userId=${log.userId}">마이프로필</a>
            </div>
            <div class="unselected">
                <a href="request-details?userId=${log.userId}">의뢰내역</a>
            </div>
            <div class="unselected">
                <a href="moneyCharge?userId=${log.userId}">잔액충전</a>
            </div>
            <div class="unselected">
                <a href="userDelete?userId=${log.userId}">회원탈퇴</a>
            </div>
        </div>
        <div class="profileForm">
            <div>
                <div>
                    <h1>정보수정</h1>
                </div>
                <div>
                    <h4><a href="/">홈</a></h4>
                    <h4><a>></a></h4>
                    <h4><a onclick="window.history.back()">마이프로필</a></h4>
                    <h4><a>></a></h4>
                    <h4><a onclick="window.location.reload()">정보수정</a></h4>
                </div>
            </div>
            <div>
                <div>
                    <a><img src="/style/images/img1.jpeg" alt="Image1"></a>
                </div>
                <div>
                    <div id="delContent">
                        <div>
                            <div>
                                <h3>이름</h3>
                                <input type="text" id="userName" value="${log.userName}" readonly>
                            </div>
                            <div>
                                <h3>아이디</h3>
                                <input type="text" id="userId" value="${log.userId}" readonly>
                            </div>
                            <div>
                                <h3>비밀번호</h3>
                                <input type="text" id="userPassword" value="${log.userPassword}" required>
                            </div>
                            <div>
                                <h3>닉네임</h3>
                                <input type="text" id="userNickname" value="${log.userNickname}" required>
                            </div>
                            <div>
                                <h3>나이</h3>
                                <input type="text" id="userAge" value="${log.userAge}" required>
                            </div>
                            <div>
                                <h3>성별</h3>
                                <div>
                                    남<input type="radio" name="gender" value="남" ${log.agentGender == "남" ? 'checked' : ''}
                                            required>
                                    여<input type="radio" name="gender" value="여" ${log.agentGender == "여" ? 'checked' : ''}
                                            required>
                                </div>
                            </div>
                            <div>
                                <h3>핸드폰</h3>
                                <input type="text" id="userPhone" value="${log.userPhone}" required></td>
                            </div>
                            <div>
                                <input type="hidden" id="userCredit" value="${log.userCredit}">
                            </div>
                        </div>
                        <div>
                            <div>
                                <a type="button" id="delete-btn" onclick="getUserInfo()">수정하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
<script src="/style/js/userUpdate.js"></script>
<c:import url="footer.jsp"></c:import>
</html>
