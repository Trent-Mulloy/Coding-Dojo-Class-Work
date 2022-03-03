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
        width: 30vw;
    }
    #nurseNotesArea{
        height: 30vh;
        width: 30vw;
    }

</style>
</head> 
<body class="container text-center" id="main">
    <h1>Chart For <c:out value='${ currentChart.aPatient.firstName }'/> <c:out value='${ currentChart.aPatient.lastName }'/> on <c:out value='${ currentChart.createdAt }'/></h1>
    <div class="row">
        <div class="col">
            <br>
            <br>
            <form action="/update/disposition/${currentChart.id}" method="post">
                <h2>Disposition:</h2>
                <input readonly type="text" name="disposition" placeholder="${currentChart.disposition}">
            </form>
        </div>
        <div class="col">
            <h2>Doc Notes</h2>
            <br>
            <textarea readonly id="docNotesArea" placeholder="${currentChart.docNotes}"></textarea>
            <br>
            <br>
            <h2>Nurse's Notes</h2>
            <textarea readonly id="nurseNotesArea" placeholder="${currentChart.nurseNotes}"></textarea>
        </div>
        <div class="col">
            <h2>Presenting Complaint:</h2>
            <h3><c:out value='${ currentChart.chiefComplaint }'/></h3>
            <br>
            <br>
            <br>
            <h2>Vitals:</h2>
            <form action="/update/currentVitals/${currentChart.id}" method="post">
                <label for="bloodPressure" style="margin-right: 20px;">BP:</label>
                <input readonly type="text" name="bloodPressure" placeholder="${currentChart.bloodPressure}">
                <br>
                <label for="height">Height</label>
                <input readonly type="text" name="height" placeholder="${currentChart.height}">
                <br>
                <label for="weight">Weight</label>
                <input readonly type="number" name="weight" placeholder="${currentChart.weight}">
            </form>
        </div>
    </div>
</body>
</html> 