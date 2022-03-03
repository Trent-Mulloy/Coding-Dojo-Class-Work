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
    <h1>Registration for new provider</h1>
    <div class="row">
        <div class="col">
        <form:form action="/admin/register/provider" method="post" class="container text-center" id="Form" modelAttribute="newProvider">
        <div class="form-group m-3">
            <form:label path="firstName" for="firstName">Providers First Name:</form:label>
            <form:errors path="firstName" class = "text-danger" />
            <form:input path="firstName" class="form-control" name= "firstName" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="lastName" for="lastName">Providers Last Name</form:label>
            <form:errors path="lastName" class = "text-danger" />
            <form:input path="lastName" class="form-control" name= "lastName" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="type" for="type">Degree (RN,BSN,ANP-BC, etc)</form:label>
            <form:errors path="type" class = "text-danger" />
            <form:input path="type" class="form-control" name= "type" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="userName" for="userName">Providers Username</form:label>
            <form:errors path="userName" class = "text-danger" />
            <form:input path="userName" class="form-control" name= "userName" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="password" for="password">Temporary Password:</form:label>
            <form:errors path="password" class = "text-danger" />
            <form:input path="password" class="form-control" name= "password" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="confirmPassword" for="confirmPassword">Confirm temporary Password:</form:label>
            <form:errors path="confirmPassword" class = "text-danger" />
            <form:input path="confirmPassword" class="form-control" name= "confirmPassword" type="text"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Register Provider"/>
        </form:form>
    </div>
</body>
</html> 