<%--
  Created by IntelliJ IDEA.
  User: mac
  Date: 2023/04/25
  Time: 4:11 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<head>
    <link rel="stylesheet" tpye="text/css" href="/style/css/login.css">
    <title>Join</title>
</head>
<body>
<c:import url="header.jsp"></c:import>
<section>
    <div>
        <div class="joinSelect">
            <div class="Lselected">
                <a href="join" id="selectA" class="Lselected"><h1 class="Lselected">사용자 회원가입</h1></a>
            </div>
            <div class="unselected">
                <a href="agentJoin" id="selectB" class="unselected"><h1 class="unselected">에이전트 회원가입</h1></a>
            </div>
        </div>
        <div class="joinForm">
            <form method="post" id="form" action="join">
                <div>
                    <h3>아이디</h3>
                    <input type="text" id="userId" name="userId" placeholder="아이디를 입력하세요.">
                </div>
                <div>
                    <h3>비밀번호</h3>
                    <input type="password" id="userPassword" name="userPassword" placeholder="비밀번호를 입력하세요.">
                </div>
                <div>
                    <h3>이름</h3>
                    <input type="text" id="userName" name="userName" placeholder="이름을 입력하세요.">
                </div>
                <div>
                    <h3>닉네임</h3>
                    <input type="text" id="userNickname" name="userNickname" placeholder="닉네임을 입력하세요.">
                </div>
                <div>
                    <h3>핸드폰번호</h3>
                    <input type="text" id="userPhone" name="userPhone" placeholder="핸드폰 번호를 입력하세요.">
                </div>
                <div>
                    <h3>성별</h3>
                    <select id="userGender" name="userGender">
                        <option value="">성별을 선택하세요</option>
                        <option value="여">여</option>
                        <option value="남">남</option>
                    </select>

                </div>
                <div>
                    <h3>나이</h3>
                    <input type="text" id="userAge" name="userAge" placeholder="나이를 입력하세요.">
                </div>

                <div>
                    <input id="final" type="button" value="회원가입"
                           onclick="checkValues()">
                </div>
            </form>
        </div>
    </div>
</section>
<c:import url="footer.jsp"></c:import>
</body>
<script src="/style/js/validation.js"></script>
</html>