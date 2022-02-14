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
    <h1>Send An Omikuji</h1>
    <form action="/submit" method="post" class="container text-center" id="Form">
        <div class="form-group m-3">
            <label for="num">Pick A Number 10-15:</label>
            <select name="num">
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
            </select>
        </div>
        <div class="form-group m-3">
            <label for="fname">Enter The Name Of Any City:</label>
            <input class="form-control" name= "cname" type="text" placeholder="Hong Kong">
        </div>
        <div class="form-group m-3">
            <label for="fname">Enter The Name Of Any Real Person:</label>
            <input class="form-control" name= "pname" type="text" placeholder="John Doe">
        </div>
        <div class="form-group m-3">
            <label for="fname">Enter Professional Endeavour or Hobbie:</label>
            <input class="form-control" name= "hobbie" type="text" placeholder="Crochet">
        </div>
        <div class="form-group m-3">
            <label for="fname">Enter Any Type Of Living Thing:</label>
            <input class="form-control" name= "thing" type="text" placeholder="Ferret,Dog,Cat, Etc...">
        </div>
        <div class="form-group m-3">
            <label for="fname">Say Something Nice To Someone:</label>
            <input class="form-control" name= "nice" type="text" placeholder="Something Nice">
        </div>
        <input type= "submit" class="btn-primary btn" value="Send">
</body>
</html> 