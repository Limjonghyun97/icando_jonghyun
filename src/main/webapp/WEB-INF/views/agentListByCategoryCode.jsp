<%--
  Created by IntelliJ IDEA.
  User: imjonghyeon
  Date: 2023/05/08
  Time: 16:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link rel="stylesheet" tpye="text/css" href="/style/css/login.css">
  <link rel="stylesheet" tpye="text/css" href="/style/css/index.css">
  <title>agentList by categoryCode</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section>
  <div>
    <div id="main-board-title">
      <div>
        <h1>Agent List</h1>
      </div>
    </div>
    <div id="main-board-top">
      <div id="main-board">

      </div>
      <div id="pageCount">
      </div>
    </div>

    <div id="ad">
      <a href="https://global6kforwater.com/frt/application/applicationOverview.do?INF_AREA_TYPE=hiking&utm_source=vertical&utm_medium=frip&utm_campaign=23Hiking6K" target="_blank">
        <img class="ad-img" src="/style/images/adImg1.png">
      </a>
      <a href="https://global6kforwater.com/frt/application/applicationOverview.do?INF_AREA_TYPE=hiking&utm_source=vertical&utm_medium=frip&utm_campaign=23Hiking6K" target="_blank">
        <img class="ad-img" src="/style/images/adImg2.png">
      </a>
      <a href="https://global6kforwater.com/frt/application/applicationOverview.do?INF_AREA_TYPE=hiking&utm_source=vertical&utm_medium=frip&utm_campaign=23Hiking6K" target="_blank">
        <img class="ad-img" src="/style/images/adImg3.png">
      </a>
      <a href="https://global6kforwater.com/frt/application/applicationOverview.do?INF_AREA_TYPE=hiking&utm_source=vertical&utm_medium=frip&utm_campaign=23Hiking6K" target="_blank">
        <img class="ad-img" src="/style/images/adImg4.png">
      </a>
    </div>
  </div>
</section>
<script src="/style/js/agent.js"></script>
</body>
<c:import url="footer.jsp"></c:import>/
</html>