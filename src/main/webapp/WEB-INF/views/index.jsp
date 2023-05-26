<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>내가할게</title>
    <link rel="stylesheet" tpye="text/css" href="/style/css/index.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        .carousel {
            color: white;
            text-align: center;
        }
    </style>
    <!-- favicon image -->
    <link rel="shortcut icon" href="../style/images/favicon.png">

    <meta property="og:title" content="내가할게">
    <meta property="og:description" content="내가 당장 할 수 없는 일을 도움을 받고, 도와주는 과정에서 수익금을 창출할 수 있는 사이트">
    <meta property="og:image" content="../style/images/logo.png">

    <!-- ... -->
</head>
<c:import url="header.jsp"></c:import>
<body>
<aside>
    <div>
        <div id="nav" class="carousel">

        </div>
    </div>
</aside>
<section>
    <div>
        <div id="main-board-title">
            <div>
                <h1>EVENT INJOY</h1>
            </div>
            <div><a href="agentList">전체보기</a></div>
        </div>
        <div id="main-board-top">
            <div>
                <select id="main-board-type" name="main-board-type">
                    <option value="new">최신순</option>
                    <option value="rank" selected>인기순</option>
                </select>
            </div>
        </div>
        <div id="main-board">
        </div>
        <div class="moreBtn">
            <button type="button" id="agentMore" class="rankAgentMore">더보기</button>
        </div>
        <div id="ad">
            <a href="https://glbal6kforwater.com/frt/application/applicationOverview.do?INF_AREA_TYPE=hiking&utm_source=vertical&utm_medium=frip&utm_campaign=23Hiking6K"
               target="_blank">
                <img class="ad-img" src="/style/images/adImg1.png">
            </a>
            <a href="https://global6kforwater.com/frt/application/applicationOverview.do?INF_AREA_TYPE=hiking&utm_source=vertical&utm_medium=frip&utm_campaign=23Hiking6K"
               target="_blank">
                <img class="ad-img" src="/style/images/adImg2.png">
            </a>
            <a href="https://global6kforwater.com/frt/application/applicationOverview.do?INF_AREA_TYPE=hiking&utm_source=vertical&utm_medium=frip&utm_campaign=23Hiking6K"
               target="_blank">
                <img class="ad-img" src="/style/images/adImg3.png">
            </a>
            <a href="https://global6kforwater.com/frt/application/applicationOverview.do?INF_AREA_TYPE=hiking&utm_source=vertical&utm_medium=frip&utm_campaign=23Hiking6K"
               target="_blank">
                <img class="ad-img" src="/style/images/adImg4.png">
            </a>
        </div>
        <div id="reviewBored">
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
                        <div class="moreBtn">
                            <button id="reviewMoreBtn" onclick="reviewMoreBtn()">더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
<script src="/style/js/indexJS.js"></script>
<script src="/style/js/agent.js"></script>
<script src="/style/js/reviewBoard.js"></script>
</body>
<c:import url="footer.jsp"></c:import>
</html>