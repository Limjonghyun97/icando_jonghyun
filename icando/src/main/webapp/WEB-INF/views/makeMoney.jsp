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
    <title>수익금확인</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section>
    <div>
        <div class="profileSelect">
            <div class="unselected">
                <a href="agentMypage?agent=${log.agentId}">마이프로필</a>
            </div>
            <div class="unselected">
                <a href="agentRequestList?agentId=${log.agentId}">의뢰내역</a>
            </div>
            <div class="selected">
                <a href="makeMoney?agentId=${log.agentId}">수익금</a>
            </div>
            <div class="unselected">
                <a href="agentDelete?agentId=${log.agentId}">에이전트탈퇴</a>
            </div>
        </div>
        <div class="profileForm">
            <div>
                <div>
                    <h1>수익금확인</h1>
                </div>
                <div>
                    <h4><a href="/">홈</a></h4>
                    <h4><a>></a></h4>
                    <h4><a onclick="window.location.reload()">수익금확인</a></h4>
                </div>
            </div>
            <div>
                <div>
                    <a><img src="/style/images/moneyLogo.png"></a>
                </div>
                <div>
                    <div>
                        <div>
                            <input id="userId" type="hidden" value="${log.agentId}">
                            <h2>${log.agentNickname} 님</h2>
                            <h4>현재 수익</h4>
                            <h1 id="userCredit">${log.agentCredit}원</h1>
                        </div>
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
<script src="/style/js/userCredit.js"></script>
<c:import url="footer.jsp"></c:import>
</html>
