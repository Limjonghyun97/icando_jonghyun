<%--
  Created by IntelliJ IDEA.
  User: rnjsr
  Date: 2023-04-29
  Time: 오전 11:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
  <link rel="stylesheet" tpye="text/css" href="/style/css/review.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <title>Title</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<br>
<br><br><br>


<section id="reviewBored">
  <div id="board-form">
    <div>
      <input type="hidden" id="logInfo" value='<%= session.getAttribute("log") %>'>
      <h1>이용후기</h1>
    </div>
    <div>
      <div>
        <button onclick="writeReviewPage()">글쓰기</button>
      </div>
      <div>
        <table id="board-table">
          <tbody id="reviewBoard">

          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
<script src="/style/js/reviewBoard.js"></script>
</body>
<c:import url="footer.jsp"></c:import>
</html>
