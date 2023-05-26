<%--
  Created by IntelliJ IDEA.
  User: EZEN
  Date: 2023-05-04
  Time: 오후 12:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Title</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" tpye="text/css" href="/style/css/agent.css">
</head>
<body>
<c:import url="header.jsp"></c:import>
<section id="doThis">
    <div>
        <div id="location">
            <h3><a href="/">홈</a></h3>
            <h3><a>></a></h3>
            <h3><a onclick="window.history.back()">에이전트소개</a></h3>
            <h3><a>></a></h3>
            <h3><a onclick="window.location.reload()">요청서등록</a></h3>
        </div>
        <form method="post" id="form">
            <input type="hidden" id="agentId" name="agentId">
            <input type="hidden" id="userId" name="userId" value="${log.userId}" readonly>
            <div id="apply">
                <h1>
                    요청서 등록
                </h1>
            </div>
            <div>
                <h3>
                    작성자:
                </h3>
                <h4>${log.userNickname}</h4>
                <input type="hidden" id="userNickname" class="userNickname" name="userNickname" value="${log.userNickname}" readonly>
            </div>
            <div>
                <h3>
                    희망시간:
                </h3>
                <input type="number" id="workTime" name="workTime" min="0" onchange="totalPriceValue()"
                       placeholder="(1시간 단위)">
                <h3>시간</h3>
            </div>
            <div>
                <h3>
                    비용:
                </h3>
                <input type="text" id="totalPrice" name="totalPrice" readonly>
                <h3>원</h3>
            </div>
            <div>
                <h3>
                    지역:
                </h3>
                <select id="regionCode" name="regionCode">

                </select>
            </div>
            <div id="applyTitle">
                <h1>
                    제목
                </h1>
                <textarea id="resTitle" name="resTitle" autofocus></textarea>
            </div>
            <div id="applyContent">
                <h1>
                    내용
                </h1>
                <textarea id="resContent" name="resContent"></textarea>
            </div>
            <input  id="sendDoThis" type="button" value="등록" onclick="requestDoThis()">
        </form>
    </div>
</section>
<script src="/style/js/doThisPage.js"></script>
<c:import url="footer.jsp"></c:import>
</body>
</html>
