<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" tpye="text/css" href="/style/css/mypage.css">
    <title>agentUpdate</title>
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
                    <h1>정보수정</h1>
                </div>
                <div>
                    <h4><a href="/">홈</a></h4>
                    <h4><a>></a></h4>
                    <h4><a onclick="window.history.back()">마이프로필</a></h4>
                    <h4><a>></a></h4>
                    <h4><a onclick="window.location.reload()">정보수정</a></h4>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h3>대표사진</h3>
                        <form id="imageUploadForm" enctype="multipart/form-data">
                            <img id="previewImage" src="${log.agentImage}" alt="agentImage">
                            <input type="file" name="imageFile" id="imageFile" accept=".jpg,.jpeg,.png"/>
                            <button type="button" onclick="uploadImage()">이미지 업로드</button>
                        </form>
                        <div>
                            <img id="agentImage" src="${log.agentImage}" alt="agentImage">
                        </div>
                    </div>

                </div>
                <div>
                    <div id="delContent">
                        <div>
                            <div>
                                <h3>이름</h3>
                                <input type="text" id="agentName" value="${log.agentName}" readonly>
                            </div>
                            <div>
                                <h3>아이디</h3>
                                <input type="text" id="agentId" value="${log.agentId}" readonly>
                            </div>
                            <div>
                                <h3>비밀번호</h3>
                                <input type="text" id="agentPassword" value="${log.agentPassword}" required>
                            </div>
                            <div>
                                <h3>닉네임</h3>
                                <input type="text" id="agentNickname" value="${log.agentNickname}" required>
                            </div>
                            <div>
                                <h3>나이</h3>
                                <input type="text" id="agentAge" value="${log.agentAge}" required>
                            </div>
                            <div>
                                <h3>성별</h3>
                                <div>
                                    남<input type="radio" name="gender"
                                            value="남" ${log.agentGender == "남" ? 'checked' : ''}
                                            required>
                                    여<input type="radio" name="gender"
                                            value="여" ${log.agentGender == "여" ? 'checked' : ''}
                                            required>
                                </div>
                            </div>
                            <div>
                                <h3>핸드폰</h3>
                                <input type="text" id="agentPhone" value="${log.agentPhone}" required>
                            </div>
                            <div>
                                <h3>시급</h3>
                                <input type="text" id="agentPrice" value="${log.agentPrice}" required>
                            </div>
                            <div>
                                <h3>주특기</h3>
                                <input id="sessionCategoryCode" type="hidden" value="${log.categoryCode}">
                                <select id="categoryList" required>
                                    <option value="" hidden>카테고리를 선택해주세요.</option>
                                </select>
                            </div>
                            <div>
                                <h3>주요활동지역</h3>
                                <input id="sessionRegionCode" type="hidden" value="${log.regionCode}">
                                <select id="regionList" required>
                                    <option value="" hidden>지역를 선택해주세요.</option>
                                </select>
                            </div>
                            <div id="introduce-update">
                                <h3>자기소개</h3>
                                <textarea type="text" id="agentAbout" required>${log.agentAbout}</textarea>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="hidden" id="agentCredit" value="${log.agentCredit}">
                                <button id="agentUpdateBtn" onclick="getAgentInfo()">수정하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="/style/js/agentUpdate.js"></script>
<script src="/style/js/validation.js"></script>
</body>
<c:import url="footer.jsp"></c:import>
</html>