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
    <div class="row">
        <div class="col">
            <h1>Welcome <c:out value='${ user.userName }'/></h1>
        </div>
        <div class="col">
            <p><a href="/add/book" class="btn btn-primary btn-sm btn-block">Add Book</a>||
            <a href="/logout" class="btn btn-primary btn-sm btn-block">Logout</a></p>
        </div>
    </div>
    <table class="table table-striped table-dark" id="tbl">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author Name:</th>
            <th scope="col">Posted By:</th>
            <th scope="col">Actions:</th>
            <th scope="col">Likes:</th>
          </tr>
        </thead>
        <tbody>
            <c:forEach items='${ book_list }' var='book_obj'>
          <tr>
            <td><a href="/book/${ book_obj.id }"><c:out value="${book_obj.title}"></c:out></a></td>
            <td><c:out value="${book_obj.author}"></c:out></td>
            <td><c:out value="${book_obj.user.userName}"></c:out></td>
            <c:choose>
                <c:when test='${ user.id != book_obj.user.id }'>
                    <td><a href="/like/book/${ book_obj.id }" class="btn btn-primary btn-sm btn-block">Like</a></td>
                </c:when>
                <c:otherwise>
                    <td><a href="/delete/book/${ book_obj.id }" class="btn btn-primary btn-sm btn-block">Delete</a></td>
                </c:otherwise>
            </c:choose>
            <td>${ book_obj.usersWhoLike.size() }</td>
          </tr>
         </c:forEach>
        </tbody>
      </table>
</body>
</html> 