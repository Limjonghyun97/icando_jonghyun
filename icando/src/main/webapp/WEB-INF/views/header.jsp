<%@ page import="com.example.demo.domain.user.User" %>
<%@ page import="com.example.demo.domain.agent.Agent" %><%--
  Created by IntelliJ IDEA.
  User: mac
  Date: 2023/04/25
  Time: 4:10 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<%
    User user = null;
    Agent agent = null;
    String tempName = "";
    String tempId = "";

    String userId = "";
    String userName = "";
    if (session.getAttribute("category") == "user") {
        if (session.getAttribute("log") != null) {
            user = (User) session.getAttribute("log");
            userId = user.getUserId();
            userName = user.getUserName();
            tempName = "?userName=";
            tempId = "&userId=";
        } else {
            userId = "";
            userName = "";
        }
        System.out.println("userId : " + userId);
    } else {
        if (session.getAttribute("log") != null) {
            agent = (Agent) session.getAttribute("log");
            userId = agent.getAgentId();
            userName = agent.getAgentName();
            tempName = "?agentName=";
            tempId = "&agentId=";
        } else {
            userId = "";
            userName = "";
        }
        System.out.println("userId : " + userId);
    }


%>
<head>
    <link rel="stylesheet" tpye="text/css" href="/style/css/header.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Header</title>
</head>
<body>
<header>
    <div id="header-form">
        <div id="header-top">
            <div id="logo">
                <a id="logoA" href="/<%=tempName%><%=userName%><%=tempId%><%=userId%>"><img id="logoImg" src="/style/images/logo.png"></a>
            </div>
            <div id="header-menu">
                <input type="hidden" id="logInfo" value='<%= session.getAttribute("category") %>'>
                <input type="hidden" id="loginId" name="loginId" value="">
                <div><a type="button" id="join" href="join">회원가입</a></div>
                <div><a type="button" id="login" href="login">로그인</a></div>
                <div><a type="button" id="logout" onclick="logout()" href="/">로그아웃</a></div>
                <div><a type="button" href="/FnA?<%=tempId%><%=userName%><%=tempId%><%=userId%>">자주 묻는 질문</a></div>
            </div>
        </div>
        <div id="header-nav">
            <div>
                <div id="search-form">

                </div>
            </div>
            <div>
                <div>
                    <div id="my-form">
                        <div>

                            <a class="mypageAlarm" type="button" onclick="mypageLoginCheck('<%=userId%>')"><img id="myImg" ></a>
                        </div>
                        <div>
                            <a class="mypageAlarm" type="button" onclick="mypageLoginCheck('<%=userId%>')">마이페이지<p id="changeAlram"></p></a>

                        </div>
                    </div>
                </div>
                <div>
                    <div id="category-form">
                        <div>
                            <a type="button" href="/category?<%=tempName%><%=userName%><%=tempId%><%=userId%>"><img id="categoryImg" src="/style/images/categoryImg.png"></a>
                        </div>
                        <div>
                            <a type="button" href="/category?<%=tempName%><%=userName%><%=tempId%><%=userId%>" id="categoryBtn">카테고리</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<script src="/style/js/logout.js"></script>
<script src="/style/js/mypage.js"></script>
</body>
</html>