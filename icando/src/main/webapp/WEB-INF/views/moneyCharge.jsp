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
  <title>잔액충전</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section>
  <div>
    <div class="profileSelect">
      <div class="unselected">
        <a href="userMypage?userId=${log.userId}">마이프로필</a>
      </div>
      <div class="unselected">
        <a href="request-details?userId=${log.userId}">의뢰내역</a>
      </div>
      <div class="selected">
        <a href="moneyCharge?userId=${log.userId}">잔액충전</a>
      </div>
      <div class="unselected">
        <a href="userDelete?userId=${log.userId}">회원탈퇴</a>
      </div>
    </div>
    <div class="profileForm">
      <div>
        <div>
          <h1>잔액충전</h1>
        </div>
        <div>
          <h4><a href="/">홈</a></h4>
          <h4><a>></a></h4>
          <h4><a onclick="window.location.reload()">잔액충전</a></h4>
        </div>
      </div>
      <div>
        <div>
          <a><img src="/style/images/moneyLogo.png"></a>
        </div>
        <div>
          <div>
            <div>
              <input id="userId" type="hidden" value="${log.userId}">
              <h2>${log.userNickname} 님</h2>
              <h4>현재 잔액</h4>
              <h1 id="userCredit">${log.userCredit}원</h1>
            </div>
            <div>
              <div>
                <a type="button" id="credit-btn" onclick="updateCredit(this)">충전하기</a>
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
