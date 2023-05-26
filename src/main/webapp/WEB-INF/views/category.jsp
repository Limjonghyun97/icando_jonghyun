<%--
  Created by IntelliJ IDEA.
  User: mac
  Date: 2023/05/06
  Time: 5:54 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" tpye="text/css" href="/style/css/category.css">
    <title>카테고리</title>
</head>
<c:import url="header.jsp"></c:import>
<body>
<section>
    <div>
        <div id="category-section">
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=1"><img src="/style/images/category/delivery.png" alt="Image1"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=2"><img src="/style/images/category/guard.png" alt="Image2"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=3"><img src="/style/images/category/catchbug.png" alt="Image3"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=4"><img src="/style/images/category/acting.png" alt="Image4"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=5"><img src="/style/images/category/tutoring.png" alt="Image5"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=6"><img src="/style/images/category/cleaning.png" alt="Image6"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=7"><img src="/style/images/category/install.png" alt="Image7"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=8"><img src="/style/images/category/move.png" alt="Image8"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=9"><img src="/style/images/category/care.png" alt="Image9"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=10"><img src="/style/images/category/driver.png" alt="Image10"></a>
            </div>
            <div class="category-item">
                <a href="agentListByCategoryCode?categoryCode=11"><img src="/style/images/category/etc.png" alt="Image10"></a>
            </div>
            <div class="category-item">
                <a href="/"><img src="/style/images/logo.png" alt="Image10"></a>
            </div>
        </div>
    </div>
</section>
<script src="/style/js/agent.js"></script>
</body>
<c:import url="footer.jsp"></c:import>
</html>