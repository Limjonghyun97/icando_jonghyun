<%--
  Created by IntelliJ IDEA.
  User: EZEN
  Date: 2023-05-02
  Time: 오후 2:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" tpye="text/css" href="/style/css/mypage.css">
    <title>마이프로필</title>
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
                    <h1>마이페이지</h1>
                </div>
                <div>
                    <h4><a href="/">홈</a></h4>
                    <h4><a>></a></h4>
                    <h4><a onclick="window.location.reload()">마이페이지</a></h4>
                </div>
            </div>
            <div>
                <div>
                    <a><img src="/style/images/img1.jpeg" alt="Image1"></a>
                </div>
                <div>
                    <div>
                        <div>
                            <h2>${log.userNickname} 님</h2>
                            <h4 id="userId">${log.userId}</h4>
                            <td>${log.userPhone}</td>
                        </div>
                        <div>
                            <div>
                                <a id="modifyUser" href="userUpdate">정보수정</a>
                            </div>
                            <div>
                                <a id="modifyMoney" href="moneyCharge?userId=${log.userId}">잔액충전</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div id="moneyLogo">
                                <a>
                                    <img src="/style/images/moneyLogo.png">
                                </a>
                            </div>
                            <div>
                                <h2 id="userCredit">${log.userCredit}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script src="/style/js/userCredit.js"></script>
</body>
<c:import url="footer.jsp"></c:import>
</html>