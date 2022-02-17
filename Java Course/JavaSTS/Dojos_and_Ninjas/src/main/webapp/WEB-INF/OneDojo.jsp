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
    <a href="/" class="btn btn-primary btn-sm btn-block">Home</a>
        <h1>You are vieiwng Ninjas all Ninjas who attend ${ dojo.name }</h1>
        <br>
        <br>
        <table class="table table-striped table-dark" id="tbl">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
                <c:forEach items='${ dojo.ninjas }' var='ninja_obj'>
              <tr>
                <td><c:out value="${ninja_obj.firstName}"></c:out></td>
                <td><c:out value="${ninja_obj.lastName}"></c:out></td>
                <td><c:out value="${ninja_obj.age}"></c:out></td>
                </form></td>
              </tr>
             </c:forEach>
            </tbody>
          </table>
        
</body>
</html> 