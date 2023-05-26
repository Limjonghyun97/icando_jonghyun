<%--
  Created by IntelliJ IDEA.
  User: EZEN
  Date: 2023-05-04
  Time: 오전 11:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>에이전트소개</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" tpye="text/css" href="/style/css/agent.css">
</head>
<body>
<c:import url="header.jsp"></c:import>
<section id="agentDetail">
    <div>
        <div id="location">
            <h3><a href="/">홈</a></h3>
            <h3><a>></a></h3>
            <h3><a onclick="window.location.reload()">에이전트소개</a></h3>
        </div>
        <div id="agentImg">
            <input type="hidden" id="agentId">
            <img id="agentImage" src="#" alt="agentImage">
        </div>
        <div>
            <h3>
                닉네임:
            </h3>
            <h4 id="agentNickname"></h4>
        </div>
        <div>
            <h3>
                나이:
            </h3>
            <h4 id="agentAge"></h4>
        </div>
        <div>
            <h3>
                성별:
            </h3>
            <h4 id="agentGender" readonly></h4>
        </div>
        <div>
            <h3>
                기본시급:
            </h3>
            <h4 id="agentPrice" readonly></h4><h5></h5>
        </div>
        <div>
            <h3>
                주특기:
            </h3>
            <h4 id="categoryName" readonly></h4>
        </div>
        <div>
            <h3>
                주요활동지역:
            </h3>
            <h4 id="regionName" readonly></h4>
        </div>
        <div id="introduce_agent">
            <h1>
                에이전트소개
            </h1>
            <textarea id="agentAbout"  readonly></textarea>
        </div>
        <div id="sendApply">
            <button onclick="requestCheck()">'이거해줘' 요청</button>
        </div>
    </div>
</section>
<script src="/style/js/lookForAgent.js"></script>
<c:import url="footer.jsp"></c:import>
</body>
</html>
