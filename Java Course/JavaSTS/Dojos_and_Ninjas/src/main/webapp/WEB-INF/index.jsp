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
    <a href="/ninja/add" class="btn btn-primary btn-sm btn-block">Add Ninja</a>
        <form:form action="/dojo/create" method="post" class="container text-center" id="Form" modelAttribute="dojo">
        <div class="form-group m-3">
            <form:label path="name" for="fname">Dojo Name:</form:label>
            <form:errors path="name" class = "text-danger" />
            <form:input path="name" class="form-control" name= "tname" type="text"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Submit"/>
        </form:form>
        <table class="table table-striped table-dark" id="tbl">
            <thead>
              <tr>
                <th scope="col">Dojo ID</th>
                <th scope="col">Dojo Name</th>
              </tr>
            </thead>
            <tbody>
                <c:forEach items='${ allDojos }' var='dojo_obj'>
              <tr>
                <td><c:out value="${dojo_obj.id}"></c:out></td>
                <td><a href="/dojos/${dojo_obj.id}"><c:out value="${dojo_obj.name}"></c:out></a></td>
                </form></td>
              </tr>
             </c:forEach>
            </tbody>
          </table>
</body>
</html> 