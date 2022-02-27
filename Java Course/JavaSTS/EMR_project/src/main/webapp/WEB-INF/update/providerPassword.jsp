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
    <h1>Hello <c:out value='${ providerToEdit.firstName }'/> <c:out value='${ providerToEdit.lastName }'/> please update your password</h1>
      <form:form action="/change/password/${providerToEdit.id}" method="post" class="container text-center" id="Form" modelAttribute="providerToEdit">
        <input type="hidden" name="_method" value="put">
        <form:input type="hidden" path="type" value="${providerToEdit.type}"/>
        <form:input type="hidden" path="userName" value="${providerToEdit.userName}"/>
        <form:input type="hidden" path="firstName" value="${providerToEdit.firstName}"/>
        <form:input type="hidden" path="lastName" value="${providerToEdit.lastName}"/>
        <div class="form-group m-3">
            <form:label path="password" for="password">New Password:</form:label>
            <form:errors path="password" class = "text-danger" />
            <form:input path="password" class="form-control" name= "password" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="confirmPassword" for="confirmPassword">Confirm New Password:</form:label>
            <form:errors path="confirmPassword" class = "text-danger" />
            <form:input path="confirmPassword" class="form-control" name= "confirmPassword" type="text"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Update Password"/>
        </form:form>
</body>
</html> 