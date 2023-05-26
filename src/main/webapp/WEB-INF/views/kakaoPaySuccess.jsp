<%--
  Created by IntelliJ IDEA.
  User: EZEN
  Date: 2023-05-02
  Time: 오후 2:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link rel="stylesheet" tpye="text/css" href="/style/css/mypage.css">
  <title>결제완료</title>
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
      <div class="unselected">
        <a href="moneyCharge?userId=${log.userId}">잔액충전</a>
      </div>
      <div class="unselected">
        <a href="userDelete?userId=${log.userId}">회원탈퇴</a>
      </div>
      <div class="selected">
        <a>결제완료</a>
      </div>
    </div>
    <div class="profileForm">
      <div>
        <div>
          <h1>카카오페이 결제가 정상적으로 완료되었습니다.</h1>
        </div>
        <div>
          <h4><a href="/">홈</a></h4>
          <h4><a>></a></h4>
          <h4><a onclick="window.location.reload()">결제완료</a></h4>
        </div>
      </div>
      <div>
        <div>
          <div>
            <input type="hidden" id="checkValue" value="${info.partner_order_id}">
            <div>
              <h1>결제완료</h1>
              <h2>${log.userNickname} 님</h2>
              <div>
                <h4>결제일시:</h4>
                <h4>${info.approved_at}</h4>
              </div>
              <div>
                <h4>예약코드: </h4>
                <h4>${info.partner_order_id}</h4>
              </div>
              <div>
                <h4>결제원: </h4>
                <h4>${info.item_name}</h4>
              </div>
              <div>
                <h4>결제금액: </h4>
                <h4>${info.amount.total}원</h4>
              </div>
            </div>
            <div>

            </div>
          </div>
          <div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<script src="/style/js/kakaoPaysuccess.js"></script>
</body>
<c:import url="footer.jsp"></c:import>
</html>