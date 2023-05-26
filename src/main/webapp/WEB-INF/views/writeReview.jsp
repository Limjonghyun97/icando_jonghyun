<%--
  Created by IntelliJ IDEA.
  User: rnjsr
  Date: 2023-04-29
  Time: 오후 9:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" tpye="text/css" href="/style/css/review.css">
  <title>Title</title>
</head>
<body>
<c:import url="header.jsp"></c:import>
<section>
  <div>
    <div>
      <input type="hidden" id="logId" name="logName" value="${log.userId}" required readonly>
      <h1>활동 후기</h1>
    </div>
    <div>
      <form method="post" id="form" action="writeReview">
        <div>
          <div id="reviewImageFrom">
            <h3>후기사진</h3>
            <form id="imageUploadForm" enctype="multipart/form-data">
              <img id="previewImage" src="#"/>
              <input type="file" name="imageFile" id="imageFile" accept=".jpg,.jpeg,.png"/>
              <button type="button" onclick="uploadImage()">이미지 업로드</button>
            </form>
          </div>
          <div>
            <img id="reviewImage" src="#" alt="reviewImage">
          </div>
        </div>
        <div>
          <div>
            <h3>후기작성 의뢰 선택</h3>
          </div>
          <div>
            <input type="hidden" id="regDate" name="regDate" value="" readonly>
            <select id="completeRequest" onchange="getAgentId()">
              <option value="">작성할 의뢰를 선택하세요</option>
            </select>
          </div>
        </div>
        <div>
          <h3>작성자</h3>
        </div>
        <div>
          <input type="text" id="userId" name="userId" value="${log.userId}" readonly>
        </div>
        <div>
          <h3>제목</h3>
        </div>
        <div>
          <input type="text" id="reviewTitle" name="reviewTitle" required>
        </div>
        <div>
          <h3>내용</h3>
        </div>
        <div>
          <textarea id="reviewContents" name="reviewContents" required></textarea>
        </div>
        <div id="updateButtonContainer">
          <input class="joinForm" id="joinReview" type="button" value="등록" onclick="writeReview()">
        </div>
      </form>
    </div>
  </div>
</section>
<c:import url="footer.jsp"></c:import>
<script src="/style/js/reviewWrite.js"></script>
</body>
</html>