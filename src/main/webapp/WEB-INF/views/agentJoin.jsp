<%--
  Created by IntelliJ IDEA.
  User: mac
  Date: 2023/04/25
  Time: 4:11 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<head>
    <link rel="stylesheet" tpye="text/css" href="/style/css/login.css">
    <title>Join</title>
</head>
<body>
<c:import url="header.jsp"></c:import>
<section>
    <div>
        <div class="joinSelect">
            <div class="unselected">
                <a href="join" id="selectA" class="unselected"><h1 class="unselected">사용자 회원가입</h1></a>
            </div>
            <div class="Rselected">
                <a href="agentJoin" id="selectB" class="Rselected"><h1 class="Rselected">에이전트 회원가입</h1></a>
            </div>
        </div>
        <div class="joinForm">

            <form method="post" id="form" action="agentJoin">
                <div>
                    <h3>아이디</h3>
                    <input type="text" id="agentId" name="agentId" placeholder="아이디를 입력하세요.">
                </div>
                <div>
                    <h3>비밀번호</h3>
                    <input type="password" id="agentPassword" name="agentPassword" placeholder="비밀번호를 입력하세요.">
                </div>
                <div>
                    <h3>이름</h3>
                    <input type="text" id="agentName" name="agentName" placeholder="이름을 입력하세요.">
                </div>
                <div>
                    <h3>닉네임</h3>
                    <input type="text" id="agentNickname" name="agentNickname" placeholder="닉네임을 입력하세요.">
                </div>
                <div>
                    <h3>나이</h3>
                    <input type="text" id="agentAge" name="agentAge" placeholder="나이를 입력하세요.">
                </div>
                <div>
                    <h3>성별</h3>
                    <select id="agentGender" name="agentGender">
                        <option value="">성별을 선택하세요</option>
                        <option value="여">여</option>
                        <option value="남">남</option>
                    </select>
                </div>
                <div>
                    <h3>주요활동지역</h3>
                    <select id="regionCode" name="regionCode">
                        <option value="">지역을 선택하시오</option>

                    </select>
                </div>
                <div>
                    <h3>전문분야</h3>
                    <select id="categoryCode" name="categoryCode">
                    </select>
                </div>
                <div>
                    <h3>희망 시급</h3>
                    <input type="text" id="agentPrice" name="agentPrice" placeholder="본인 기본시급을 입력하세요.">
                </div>

                <div>
                    <h3>핸드폰</h3>
                    <input type="text" id="agentPhone" name="agentPrice" placeholder="휴대폰번호를 입력하세요.">
                </div>
                <div>
                    <h3>자기소개</h3>
                    <textarea id="introduce-join"name="agentAbout"></textarea>
                </div>
                <div>
                    <input type="hidden" id="agentScore" name="agentScore">
                </div>
                <div>
                    <input type="hidden" id="agentCredit" name="agentCredit">
                </div>
                <div>
                    <input id="final" type="button" value="회원가입"
                           onclick="checkAgent()">
                </div>
                <div>
                    <h3>대표사진 업로드</h3>
                    <form id="imageUploadForm" enctype="multipart/form-data">
                        <img id="previewImage" src="#" alt="이미지 미리보기" />
                        <input type="file" name="imageFile" id="imageFile" accept=".jpg,.jpeg,.png" />
                        <button type="button" onclick="uploadImage()">이미지 업로드</button>
                    </form>
                </div>
                <div>
                    <img id="agentImage" src="#" alt="agentImage">
                </div>
            </form>
        </div>
    </div>
</section>
<c:import url="footer.jsp"></c:import>
</body>
<script src="/style/js/validation.js"></script>
</html>