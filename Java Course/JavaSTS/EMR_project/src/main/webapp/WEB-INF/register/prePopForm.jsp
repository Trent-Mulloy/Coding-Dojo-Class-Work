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
    <h1>Existing Patient Found, Please Confirm Information.</h1>
    <div class="row">
        <div class="col">
        <form:form action="/confirm/patient/info/${patientP.id}" method="post" class="container text-center" id="Form" modelAttribute="patientP">
            <input type="hidden" name="_method" value="put">
        <div class="form-group m-3">
            <form:label path="firstName" for="firstName">First Name:</form:label>
            <form:errors path="firstName" class = "text-danger" />
            <form:input path="firstName" class="form-control" name= "firstName" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="lastName" for="lastName">Last Name</form:label>
            <form:errors path="lastName" class = "text-danger" />
            <form:input path="lastName" class="form-control" name= "lastName" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="dateOfBirth" for="dateOfBirth">DOB</form:label>
            <form:errors path="dateOfBirth" class = "text-danger" />
            <form:input path="dateOfBirth" class="form-control" name= "dateOfBirth" type="date"/>
        </div>
        <div class="form-group m-3">
            <form:label path="socialSecurityNumber" for="socialSecurityNumber">SSN</form:label>
            <form:errors path="socialSecurityNumber" class = "text-danger" />
            <form:input path="socialSecurityNumber" class="form-control" name= "socialSecurityNumber" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="currentAge" for="currentAge">Current Age:</form:label>
            <form:errors path="currentAge" class = "text-danger" />
            <form:input path="currentAge" class="form-control" name= "currentAge" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="Occupation" for="Occupation">Occupation:</form:label>
            <form:errors path="Occupation" class = "text-danger" />
            <form:input path="Occupation" class="form-control" name= "Occupation" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="Nationality" for="Nationality">Nationality:</form:label>
            <form:errors path="Nationality" class = "text-danger" />
            <form:input path="Nationality" class="form-control" name= "Nationality" type="text"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Confirm Information"/>
        </form:form>
        <br>
        <br>
        <br>
        <h3></h3>
        <div class="col"><a href="/newForm" class="btn btn-primary btn-sm btn-block">Register New Patient</a></div>
    </div>
</body>
</html> 