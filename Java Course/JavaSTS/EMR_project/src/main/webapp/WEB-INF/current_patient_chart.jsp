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
       background-color: black;
       color: yellow;
    }
    #docNotesArea{
        height: 30vh;
        width: 30vw;
    }
    #nurseNotesArea{
        height: 30vh;
        width: 30vw;
    }

</style>
</head> 
<body class="container text-center" id="main">
    <h1>Current Chart For <c:out value='${ currentChart.aPatient.firstName }'/> <c:out value='${ currentChart.aPatient.lastName }'/></h1>
    <a href="/dashboard" class="btn btn-primary btn-sm btn-block">Back</a>
    <div class="row">
        <div class="col">
            <h2>Doc Notes</h2>
            <br>
            <textarea readonly id="docNotesArea" placeholder="${currentChart.docNotes}"></textarea>
            <a href="/update/docNotes/${ currentChart.id}" class="btn btn-primary btn-sm btn-block">Update Notes</a>
            <br>
            <br>
            <h2>Nurse's Notes</h2>
            <textarea readonly id="nurseNotesArea" placeholder="${currentChart.nurseNotes}"></textarea>
            <a href="/update/nurseNotes/${ currentChart.id}" class="btn btn-primary btn-sm btn-block">Update Notes</a>
        </div>
        <div class="col">
            <h2>Presenting Complaint:</h2>
            <h3><c:out value='${ currentChart.chiefComplaint }'/></h3>
            <br>
            <br>
            <br>
            <h2>Vitals:</h2>
            <h3>Blood Pressure-</h3>
            <h3>Height-</h3>
            <h3>Weight-</h3>
            <a href="/update/currentVitals/${ currentChart.id}" class="btn btn-primary btn-sm btn-block">Update Vitals</a>
        </div>
    </div>
</body>
</html> 