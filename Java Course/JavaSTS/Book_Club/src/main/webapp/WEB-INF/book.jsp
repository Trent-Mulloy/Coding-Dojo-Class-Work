<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Standard JSP</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<style>
    #main{
       width: 100vw;
       background-color: black;
       color: yellow;
    }
    #com{
        height: 20vh;
    }
    #Form{
        width: 30vw;
    }
</style>
</head>
<body class="container text-center" id="main">
    <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"><a href="/home" class="btn btn-primary btn-sm btn-block">Back To The Sheleves</a></p></div>
    </div>
    <h1><c:out value='${ book.title }'/>:</h1>
    <c:choose>
        <c:when test="${book.user.id == suser.id}">
            <h2>You read <c:out value='${ book.title }'/> by <c:out value='${ book.author }'/></h2>
            <h3>Here are your thoughts</h3>
            <br>
            <br>
            <p><c:out value='${ book.thoughts }'/></p>
        </c:when>
        <c:otherwise>
            <h2><c:out value='${ book.user.userName }'/> read <c:out value='${ book.title }'/> by <c:out value='${ book.author }'/></h2>
            <h3>Here are their thoughts:</h3>
            <br>
            <br>
            <p><c:out value='${ book.thoughts }'/></p>
        </c:otherwise>
    </c:choose>
    <br>
    <br>
    <c:if test='${book.user.id == suser.id}'>
        <a href="/edit/book/${book.id}" class="btn btn-primary btn-sm btn-block">Edit</a></p>
    </c:if>
</body>
</html> 