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
    <h1>You are editing <c:out value='${ bookToEdit.title }'/></h1>
      <form:form action="/update/book/${bookToEdit.id}" method="post" class="container text-center" id="Form" modelAttribute="bookToEdit">
        <input type="hidden" name="_method" value="put">
        <div class="form-group m-3">
            <form:label path="title" for="title">Book Title::</form:label>
            <form:errors path="title" class = "text-danger" />
            <form:input path="title" class="form-control" name= "title" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="author" for="author">Author:</form:label>
            <form:errors path="author" class = "text-danger" />
            <form:input path="author" class="form-control" name= "author" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="thoughts" for="thoughts">Your Thoughts:</form:label>
            <form:errors path="thoughts" class = "text-danger" />
            <form:textarea path="thoughts" class="form-control" name= "thoughts"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Update Book"/>
        </form:form>
</body>
</html> 