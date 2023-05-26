<%--
  Created by IntelliJ IDEA.
  User: rnjsr
  Date: 2023-04-29
  Time: 오전 11:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
  <title>Title</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" tpye="text/css" href="/style/css/reviewDetail.css">
  <style>
    .scrollable {
      max-height: 200px;
      overflow-y: auto;
    }
  </style>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section id="reviewDetail-section">
  <input type="hidden" id="logId" name="logName" value="${log.userId}" required readonly>
  <div>
    <h1>내가할게 사용 후기</h1>
  </div>
  <div>
    <div id="board-form">
      <div>
        <div id="showImage">
          <img id="reviewImage" src="#" alt="reviewImage" style="display: none;">
        </div>
        <h3>작업결과 이미지</h3>
      </div>
    </div>
    <div>
      <form method="post" id="form" action="updateReview">
        <div id="head">
          <div>
            <input type="hidden" id="reviewCode" name="reviewCode">
            <h3>작성자</h3>
            <input type="text" id="userId" name="userId" readonly>
          </div>
          <div>
            <h3>제목</h3>
            <textarea type="text" id="reviewTitle" name="reviewTitle" required></textarea>
          </div>
        </div>
        <div id="body">
          <h3>내용</h3>
          <textarea id="reviewContents" name="reviewContents" required></textarea>
        </div>
        <div id="updateButtonContainer">
          <input class="joinForm" id="final" type="button" value="수정"
                 onclick="updateReview()">
        </div>
      </form>
    </div>
  </div>
  <div>
    <div>
      <h1>
        댓글
      </h1>
    </div>
  </div>
  <div class="scrollable" id="scrollable">
    <table class="joinComment">
      <tbody id="commentList" name="commentList">

      </tbody>
    </table>
  </div>
  <div class="not_comment"></div>
  <div id="writeReply">
    <form method="post" id="commentForm" action="addComment">
      <h3>아이디:</h3>
      <input type="text" id="comment_id" name="comment_id" value="${log.userId}" required readonly>
      <h3>댓글 내용</h3>
      <textarea id="commentContent" name="commentContent" required></textarea>
      <input type="hidden" id="regDate" name="regDate" value="regDate">
      <div id="commentButtonContainer">
        <input class="joinForm" id="commentButton" type="button" value="댓글 작성" onclick="addComment()">
      </div>
    </form>
  </div>
</section>
<c:import url="footer.jsp"></c:import>
<script src="/style/js/reviewDetail.js"></script>
<script src="/style/js/reviewComment.js"></script>
</body>
</html>