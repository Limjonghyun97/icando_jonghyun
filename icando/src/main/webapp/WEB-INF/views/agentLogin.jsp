<%--
  Created by IntelliJ IDEA.
  User: mac
  Date: 2023/04/25
  Time: 4:26 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<head>
    <link rel="stylesheet" tpye="text/css" href="/style/css/login.css">
    <title>Login</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section>
    <div>
        <div class="loginSelect">
            <div class="unselected">
                <a href="login" id="selectA" class="unselected"><h1 class="unselected">사용자 로그인</h1></a>
            </div>
            <div class="Rselected">
                <a href="agentLogin" id="selectB" class="Rselected"><h1 class="Rselected">에이전트 로그인</h1></a>
            </div>
        </div>
        <div class="loginForm">
            <form method="post" id="form" action="agentLogin">
                <div>
                    <h3>Id</h3>
                    <input type="text" id="agentId" name="agentId" placeholder="아이디를 입력하세요." autofocus>
                </div>
                <div>
                    <h3 >Password</h3>
                    <input type="password" id="agentPassword" name="agentPassword" placeholder="비밀번호를 입력하세요.">
                </div>
                <div>
                    <input id="final" type="button" value="로그인"
                           onclick="loginCheck()">
                </div>
            </form>
        </div>
    </div>
</section>
<script  type="module" src="/style/js/agentLogin.js"></script>
</body>
<c:import url="footer.jsp"></c:import>
</html>