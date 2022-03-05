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
    <h1>Current Chart For <c:out value='${ currentChart.aPatient.firstName }'/> <c:out value='${ currentChart.aPatient.lastName }'/></h1>
    <a href="/dashboard" class="btn btn-primary btn-sm btn-block">Back</a>
    <div class="row">
        <div class="col">
            <form action="/update/patientRoom/${currentChart.id}" method="post">
                <h2><Label for="room_location">Room:</h2>
                <select name="room_location">
                    <option value="" selected disabled hidden><c:out value='${ currentChart.room }'/></option>
                    <option value="pending">Pending</option>
                    <option value="E-1">E-1</option>
                    <option value="E-2">E-2</option>
                    <option value="E-3">E-3</option>
                    <option value="E-4">E-4</option>
                    <option value="E-5">E-5</option>
                    <option value="E-6">E-6</option>
                    <option value="E-7">E-7</option>
                    <option value="E-8">E-8</option>
                    <option value="E-9">E-9</option>
                    <option value="E-10">E-10</option>
                </select>
                <input type= "submit" class="btn btn-primary btn-sm" value="Update Room"/>
            </form>
            <br>
            <br>
            <form action="/update/disposition/${currentChart.id}" method="post">
                <h2>Current Disposition:</h2>
                <input type="text" name="disposition" placeholder="${currentChart.disposition}">
                <input type= "submit" class="btn btn-primary btn-sm" value="Update"/>
            </form>
            <h2>History</h2>
            <table class="table table-striped table-dark" id="tbl">
                <thead>
                  <tr>
                    <th scope="col">Complaint</th>
                    <th scope="col">Disposition</th>
                  </tr>
                </thead>
                <tbody>
                    <c:forEach items='${ historyChart }' var='chart_obj'>
                  <tr>
                    <td><a href="/view/history/chart/${chart_obj.id}"><c:out value="${chart_obj.chiefComplaint}"></c:out></a></td>
                    <td><c:out value='${ chart_obj.disposition }'/></td>
                  </tr>
                 </c:forEach>
                </tbody>
              </table>
        </div>
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
            <form action="/update/currentVitals/${currentChart.id}" method="post">
                <label for="bloodPressure" style="margin-right: 20px;">BP:</label>
                <input type="text" name="bloodPressure" placeholder="${currentChart.bloodPressure}">
                <br>
                <label for="height">Height</label>
                <input type="text" name="height" placeholder="${currentChart.height}">
                <br>
                <label for="weight">Weight</label>
                <input type="number" name="weight" placeholder="${currentChart.weight}">
                <br>
                <input type= "submit" class="btn btn-primary btn-sm" value="Update Vitals"/>
            </form>
            
            <a href="/discharge/${ currentChart.id}" class="btn btn-danger btn-sm btn-block" style="margin-top: 130%;">Discahrge</a>
        </div>
    </div>
</body>
</html> 