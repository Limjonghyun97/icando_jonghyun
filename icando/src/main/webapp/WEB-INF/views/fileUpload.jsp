<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Title</title>
</head>
<body>
<h1>Image Upload to imgbb</h1>

<form id="uploadForm" enctype="multipart/form-data">
  <input type="file" id="imageInput" name="image">
  <button type="submit">Upload</button>
</form>

<div id="imageContainer"></div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/style/js/fileUpload.js"></script>
</body>
</html>
