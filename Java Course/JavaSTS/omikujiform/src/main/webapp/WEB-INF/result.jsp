<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Standard JSP</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<style>
    #main{
       width: 30vw;
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
    <h1>Heres Your Omikuji</h1>
    <br>
    <br>
    <br>
    <h2>In <%= session.getAttribute("num") %> years you will live in <%= session.getAttribute("city_name") %> with <%= session.getAttribute("person_name") %> as your roomate <%= session.getAttribute("hobbie") %> for a living. The next time you see a <%= session.getAttribute("living_thing") %> you will have good luck. Also, <%= session.getAttribute("something_nice") %></h2>
    <br>
    <br>
    <br>
    <a href="/" class="btn btn-primary btn-lg btn-block">Go Back</a>  
</body>
</html> 