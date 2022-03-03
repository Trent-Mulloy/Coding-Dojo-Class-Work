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
   #nav_bar{
       background-color: #1434A4;
       height: 3vh;
       width: 100%;
   }

</style>
</head> 
<body class="container text-center" id="main" style="padding-top: 2%;">
    <div class="row">
        <div class="col" style="margin-top: 1%;"><a href="/register/patient" class="btn btn-primary btn-sm btn-block">Register Patient</a></div>
        <div class="col">
            <c:set var = "typeOfthing" scope = "session" value = "${provider.type}"/>
            <c:choose>
                <c:when test='${typeOfthing.equals("MD")}'>
                    <h1>Welcome Dr. <c:out value='${ provider.lastName }'/></h1>
                </c:when>
                <c:otherwise>
                    <h1>Hello <c:out value='${ provider.firstName }'/> <c:out value='${ provider.type }'/></h1>
                </c:otherwise>
            </c:choose>
        </div>
        <div class="col" style="margin-top: 1%;"><a href="/provider/logout" class="btn btn-primary btn-sm btn-block">logout</a></div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="btn btn-secondary btn-sm btn-block" href="">All Patients</a>
            <a class="btn btn-primary btn-sm btn-block" href="/dashboard/provider/${provider.id}/patients">My Patients</a>
          </div>
        </div>
      </nav>
        <br>
        <br>
    <div class="row">
        <table class="table table-striped table-dark" id="tbl">
            <thead>
              <tr>
                <th scope="col">Bed</th>
                <th scope="col">Patient</th>
                <th scope="col">Age</th>
                <th scope="col">Complaint</th>
                <th scope="col">Disposition</th>
              </tr>
            </thead>
            <tbody>
                <c:forEach items='${ allCharts }' var='chart_obj'>
              <tr>
                <td><c:out value='${ chart_obj.room }'/></td>
                <td><a href="patient/chart/${chart_obj.id}"><c:out value='${ chart_obj.patientName }'/></a></td>
                <td><c:out value='${ chart_obj.aPatient.currentAge }'/></td>
                <td><c:out value="${chart_obj.chiefComplaint}"></c:out></td>
                <td><c:out value='${ chart_obj.disposition }'/></td>
              </tr>
             </c:forEach>
            </tbody>
          </table>
    </div>
    
</body>
</html> 