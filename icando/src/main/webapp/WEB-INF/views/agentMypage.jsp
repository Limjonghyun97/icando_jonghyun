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
                <a href="agentMypage?agent=${log.agentId}">마이프로필</a>
            </div>
            <div class="unselected">
                <a href="agentRequestList?agentId=${log.agentId}">의뢰내역</a>
            </div>
            <div class="unselected">
                <a href="makeMoney?agentId=${log.agentId}">수익금</a>
            </div>
            <div class="unselected">
                <a href="agentDelete?agentId=${log.agentId}">에이전트탈퇴</a>
            </div>
        </div>
        <div class="profileForm">
            <div>
                <div>
                    <h1>마이프로필</h1>
                </div>
                <div>
                    <h4><a href="/">홈</a></h4>
                    <h4><a>></a></h4>
                    <h4><a onclick="window.location.reload()">마이프로필</a></h4>
                </div>
            </div>
            <div>
                <div>
                    <a><img src="${log.agentImage}" alt="Image1"></a>
                </div>
                <div>
                    <div>
                        <div>
                            <h2>${log.agentNickname} 님</h2>
                            <div>
                                <h4>아이디:</h4>
                                <h4 id="agentId">${log.agentId}</h4>
                            </div>
                            <div>
                                <h4>나이: </h4>
                                <h4>${log.agentAge}</h4>
                            </div>
                            <div>
                                <h4>주요활동지역: </h4>
                                <h4>${log.regionName}</h4>

                            </div>
                            <div>
                                <h4>특기: </h4>
                                <h4>${log.categoryName}</h4>
                            </div>
                            <div>
                                <h4>핸드폰번호: </h4>
                                <h4>${log.agentPhone}</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a id="modifyUser" href="agentUpdate">정보수정</a>
                            </div>
                            <div>
                                <a id="modifyMoney" href="makeMoney?agentId=${log.agentId}">수익금확인</a>
                            </div>
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
</body>
<c:import url="footer.jsp"></c:import>
</html>