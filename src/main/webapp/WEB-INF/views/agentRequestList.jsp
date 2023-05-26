<%--
  Created by IntelliJ IDEA.
  User: rnjsr
  Date: 2023-05-05
  Time: 오전 2:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" tpye="text/css" href="/style/css/mypage.css">
    <title>에이전트 의뢰내역</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section>
    <div>
        <div class="profileSelect">
            <div class="unselected">
                <a href="agentMypage?agent=${log.agentId}">마이프로필</a>
            </div>
            <div class="selected">
                <a href="agentRequestList?agentId=${log.agentId}">의뢰내역</a>
            </div>
            <div class="unselected">
                <a href="makeMoney?agentId=${log.agentId}">수익금</a>
            </div>
            <div class="unselected">
                <a href="agentDelete?agentId=${log.agentId}">에이전트탈퇴</a>
            </div>
        </div>
        <div class="requestListForm">
            <div>
                <div>
                    <h1>의뢰내역</h1>
                </div>
                <div>
                    <h4><a href="/">홈</a></h4>
                    <h4><a>></a></h4>
                    <h4><a onclick="window.location.reload()">의뢰내역</a></h4>
                </div>
            </div>
            <div>
                <input type="hidden" id="logInfo" value='${log.agentId}'>
                <table id="requestListTb">
                    <thead>
                    <tr id="tbTitle">
                        <td>의뢰인</td>
                        <td>제목</td>
                        <td>일자</td>
                        <td>담당에이전트</td>
                        <td>상세보기</td>
                        <td>진행상황</td>
                    </tr>
                    </thead>
                    <tbody id="requestList">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
</section>
<script src="/style/js/checkRequest.js"></script>
</body>
<c:import url="footer.jsp"></c:import>
</html>