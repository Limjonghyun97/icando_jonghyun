<%@ page import="com.example.demo.domain.user.User" %><%--
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
    <link rel="stylesheet" tpye="text/css" href="/style/css/main.css">
    <title>Main</title>
</head>

<%-- 로그인 세션이 있는 경우에만 로그인 사용자 정보를 HTML 데이터 속성으로 설정 --%>

<body>
<c:import url="header.jsp"></c:import>
<section>
    <h1 style="margin-top: 90px;">아이디: ${log.userId}</h1>
    <form id="icCategory">
        <input type="radio" name="icCategory" value="0" checked="checked" />전체
    </form>

    <form id="rcCategory">
        <input type="radio" name="rcCategory" value="0" checked="checked" />전체
    </form>

    <table id="eventBoardList"></table>

    <!-- 로그인 세션 으로 로그아웃버튼 보여주기(처리는 logout.js 파일에서)-->
    <input type="hidden" id="logInfo" value='<%= session.getAttribute("log") %>'>

    <div>sdsd</div>
    <br><br><br><br><br>
    <a href="reviewBoard">활동 후기</a>

    <input class="joinForm" id="logout" type="button" value="로그아웃" onclick="logout()">

</section>
<c:import url="footer.jsp"></c:import>
<script src="/style/js/logout.js"></script>
<script src="/style/js/eventBoard.js"></script>
</body>

</html>
