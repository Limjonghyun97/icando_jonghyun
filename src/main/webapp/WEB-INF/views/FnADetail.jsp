<%--
  Created by IntelliJ IDEA.
  User: mac
  Date: 2023/05/03
  Time: 10:14 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" tpye="text/css" href="/style/css/login.css">
    <title>FnA 상세보기</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section>
    <div>
        <div id="topic">
            <div>
                <h1>FnA 상세보기</h1>
            </div>
            <div class="moveBtn">
                <h4><a href="/">홈</a></h4>
                <h4><a>></a></h4>
                <h4><a onclick="window.history.back()">FnA</a></h4>
                <h4><a>></a></h4>
                <h4><a onclick="window.location.reload()">FnA 상세보기</a></h4>
            </div>
        </div>
        <div id="fna-div">
                <textarea id="fnaContents" name="fnaContents" required readonly></textarea>
        </div>
    </div>
</section>
</body>
<c:import url="footer.jsp"></c:import>
<script src="/style/js/fnaDetail.js"></script>
</html>