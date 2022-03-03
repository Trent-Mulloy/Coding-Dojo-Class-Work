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
    #docNotesArea{
        height: 30vh;
    }
</style>
</head> 
<body class="container text-center" id="main">
    <h1>Please Update your notes here</h1>
    <div class="row">
        <div class="col">
        <form:form action="/submit/new/docNotes/${currentChart.id}" method="post" class="container text-center" id="Form" modelAttribute="currentChart">
            <input type="hidden" name="_method" value="put">
        <form:input type="hidden" path="nurseNotes" value="${currentChart.nurseNotes}"></form:input>
        <form:input type="hidden" path="patientName" value="${currentChart.patientName}"></form:input>
        <form:input type="hidden" path="chiefComplaint" value="${currentChart.chiefComplaint}"></form:input>
        <form:input type="hidden" path="status" value="${currentChart.status}"></form:input>
        <form:input type="hidden" path="room" value="${currentChart.room}"></form:input>
        <form:input type="hidden" path="disposition" value="${currentChart.disposition}"></form:input>
        <form:input type="hidden" path="weight" value="${currentChart.weight}"></form:input>
        <form:input type="hidden" path="height" value="${currentChart.height}"></form:input>
        <form:input type="hidden" path="bloodPressure" value="${currentChart.bloodPressure}"></form:input>
        <form:input type="hidden" path="aProvider" value="${currentChart.aProvider.id}"></form:input>
        <form:input type="hidden" path="aPatient" value="${currentChart.aPatient.id}"></form:input>
        <div class="form-group m-3">
            <form:label path="docNotes" for="docNotes">Doc Notes</form:label>
            <form:errors path="docNotes" class = "text-danger" />
            <form:textarea id="docNotesArea" path="docNotes" class="form-control" name= "docNotes"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Submit"/>
        </form:form>
    </div>
</body>
</html> 