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
        width: 100%;
        background-color: #F0EAD6;
        color: blue;
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
    <h1>Welcome Provider, please login</h1>
    <div class="row">
        <div class="col">
        <form:form action="/login/provider" method="post" class="container text-center" id="Form" modelAttribute="newLogin">
        <div class="form-group m-3">
            <form:label path="userName" for="userName">Username</form:label>
            <form:errors path="userName" class = "text-danger" />
            <form:input path="userName" class="form-control" name= "userName" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="password" for="password">Password:</form:label>
            <form:errors path="password" class = "text-danger" />
            <form:input path="password" class="form-control" name= "password" type="text"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Login"/>
        </form:form>
    </div>
</body>
</html> 