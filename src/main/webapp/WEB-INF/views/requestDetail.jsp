<%--
  Created by IntelliJ IDEA.
  User: rnjsr
  Date: 2023-05-05
  Time: 오전 12:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" tpye="text/css" href="/style/css/mypage.css">
    <title>상세보기</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section>
    <div id="requestDetail-form">
        <div class="detailForm">
            <div>
                <div>
                    <h1>상세보기</h1>
                </div>
                <div>
                    <h4><a href="/">홈</a></h4>
                    <h4><a>></a></h4>
                    <h4><a href="javascript:window.history.back()">의뢰내역</a></h4>
                    <h4><a>></a></h4>
                    <h4><a onclick="window.location.reload()">상세보기</a></h4>
                </div>
            </div>
            <div>
                <form method="post" id="form" action="yesByRequest">
                    <input type="hidden" id="resCode" name="resCode">
                    <input type="hidden" id="userId" name="userId">
                    <div id="checkStatus">
                        <div>
                            에이전트
                            <input type="text" id="checkApply" name="checkApply" readonly>
                        </div>
                        <div>
                            작업현황
                            <input type="text" id="checkSuccess" name="checkSuccess" readonly>
                        </div>
                        <div>
                            승인완료
                            <input type="text" id="checkComplete" name="checkComplete" readonly>
                        </div>
                    </div>
                    <div id="status">

                    </div>
                    <div id="requestContent">
                        <div>
                            <div>
                                <h3>의뢰인</h3>
                                <input type="text" id="userNickname" name="userNickname" readonly>
                            </div>
                            <div>
                                <h3>요청지역</h3>
                                <input type="text" id="regionName" name="regionName" readonly>
                            </div>
                            <div>
                                <h3>요청시간</h3>
                                <input type="text" id="workTime" name="workTime" readonly>
                            </div>
                            <div>
                                <h3>수익금</h3>
                                <input type="text" id="totalPrice" name="totalPrice" readonly>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>요청제목</h3>
                                <textarea type="text" id="resTitle" name="resTitle" required readonly></textarea>
                            </div>
                            <div>
                                <h3>요청내용</h3>
                                <textarea id="resContent" name="resContent" required readonly></textarea>
                            </div>
                        </div>
                    </div>
                    <div id="yesBottom">
                        <div id="yesButton">
                            <%--                                    yesButton--%>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<script src="/style/js/resDetail.js"></script>

</body>
<c:import url="footer.jsp"></c:import>
</html>