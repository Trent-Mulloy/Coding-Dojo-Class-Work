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
    <a href="/" class="btn btn-primary btn-sm btn-block">Home</a>
    <br>
    <br>
        <form:form action="/ninja/create" method="post" class="container text-center" id="Form" modelAttribute="ninja">
        <div class="form-group m-3">
            <form:label path="firstName" for="fname">First Name:</form:label>
            <form:errors path="firstName" class = "text-danger" />
            <form:input path="firstName" class="form-control" name= "fname" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="lastName" for="lname">Last Name:</form:label>
            <form:errors path="lastName" class = "text-danger" />
            <form:input path="lastName" class="form-control" name= "lname" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="age" for="age">Age:</form:label>
            <form:errors path="age" class = "text-danger" />
            <form:input path="age" class="form-control" name= "age" type="number" step="1"/>
        </div>
        <div class="form-group m-3">
            <form:select path="dojo">
                <c:forEach items='${ alldojos }' var='dojoObj'>
                    <option value="${ dojoObj.id }">${ dojoObj.name }</option>
                </c:forEach>
            </form:select>
        </div>
        <input type= "submit" class="btn-primary btn" value="Submit"/>
        </form:form>
</body>
</html> 