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
    <h1>Please start a new visit summary for the patient</h1>
    <div class="row">
        <div class="col">
        <form:form action="/submit/new/chart/${patientP.id}" method="post" class="container text-center" id="Form" modelAttribute="newChart">
        <div class="form-group m-3">
            <form:label path="patientName" for="patientName">Patient name:</form:label>
            <form:errors path="patientName" class = "text-danger" />
            <form:input path="patientName" class="form-control" name= "patientName" type="text" value="${patientP.firstName} ${patientP.lastName}"/>
        </div>
        <div class="form-group m-3">
            <form:label path="chiefComplaint" for="chiefComplaint">Chief Complaint</form:label>
            <form:errors path="chiefComplaint" class = "text-danger" />
            <form:textarea path="chiefComplaint" class="form-control" name= "chiefComplaint"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Submit"/>
        </form:form>
    </div>
</body>
</html> 