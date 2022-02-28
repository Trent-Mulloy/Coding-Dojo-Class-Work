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
    <h1>Registration for new provider</h1>
    <div class="row">
        <div class="col">
        <form action="/search/register/patient" method="post" class="container text-center" id="Form">
        <div class="form-group m-3">
            <label path="firstName" for="firstName">Patient First Name:</label>
            <input path="firstName" class="form-control" name= "firstName" type="text"/>
        </div>
        <div class="form-group m-3">
            <label path="lastName" for="lastName">Patient Last Name</label>
            <input path="lastName" class="form-control" name= "lastName" type="text"/>
        </div>
        <div class="form-group m-3">
            <label path="dateOfBirth" for="dateOfBirth">Patient DOB</label>
            <input path="dateOfBirth" class="form-control" name= "dateOfBirth" type="date" placeholder="yyyy-MM-dd"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Continue"/>
        </form>
    </div>
</body>
</html> 