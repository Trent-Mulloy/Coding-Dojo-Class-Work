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
    <h1>Hello <c:out value='${ providerToEdit.firstName }'/> <c:out value='${ providerToEdit.lastName }'/> please update your password</h1>

    <form action="/change/password/${providerToEdit.id}" method="post" class="container text-center" id="Form">
    <div class="form-group m-3">
            <label for="">New Password:</label>
            <br>
            <input type="text" name="password">
    </div>
        <br>
        <input type= "submit" class="btn-primary btn" value="Update Password"/>
    </form>
</body>
</html> 