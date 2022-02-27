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
    <c:set var = "typeOfthing" scope = "session" value = "${provider.type}"/>
    <c:choose>
        <c:when test='${typeOfthing.equals("MD")}'>
            <h1>Welcom Dr. <c:out value='${ provider.lastName }'/></h1>
        </c:when>
        <c:otherwise>
            <h1>Hello <c:out value='${ provider.firstName }'/> <c:out value='${ provider.type }'/></h1>
        </c:otherwise>
    </c:choose>
</body>
</html> 