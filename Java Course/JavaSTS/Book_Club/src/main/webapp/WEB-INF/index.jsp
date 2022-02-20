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
    <h1>Book Club</h1>
    <h2>A place for friends to share thoughts on books.</h2>
    <div class="row">
        <div class="col">
            <h1>Register</h1>
        <form:form action="/register" method="post" class="container text-center" id="Form" modelAttribute="newUser">
        <div class="form-group m-3">
            <form:label path="userName" for="uname">Name:</form:label>
            <form:errors path="userName" class = "text-danger" />
            <form:input path="userName" class="form-control" name= "uname" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="email" for="email">Email:</form:label>
            <form:errors path="email" class = "text-danger" />
            <form:input path="email" class="form-control" name= "email" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="password" for="age">Password:</form:label>
            <form:errors path="password" class = "text-danger" />
            <form:input path="password" class="form-control" name= "age" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="confirm" for="confirm">Confirm Password:</form:label>
            <form:errors path="confirm" class = "text-danger" />
            <form:input path="confirm" class="form-control" name= "confirm" type="text"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Register"/>
        </form:form>
        </div>
        <div class="col">
            <h1>Login</h1>
            <form:form action="/login" method="post" class="container text-center" id="Form" modelAttribute="newLogin">
            <div class="form-group m-3">
                <form:label path="email" for="email">Email:</form:label>
                <form:errors path="email" class = "text-danger" />
                <form:input path="email" class="form-control" name= "email" type="text"/>
            </div>
            <div class="form-group m-3">
                <form:label path="password" for="password">Password:</form:label>
                <form:errors path="password" class = "text-danger" />
                <form:input path="password" class="form-control" name= "password" type="text"/>
            </div>
            <input type= "submit" class="btn-primary btn" value="Login"/>
            </form:form>
            </div>
    
    
    </div>
</body>
</html> 