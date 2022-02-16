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
    <h1>Expense Details:</h1>
    <br>
    <table class="table table-dark">
        <tbody>
          <tr>
            <th scope="row">Expense Name:</th>
            <td><c:out value='${ expense.expense_name }'/></td>
          </tr>
          <tr>
            <th scope="row">Expense Description:</th>
            <td><c:out value='${ expense.description }'/></td>
          </tr>
          <tr>
            <th scope="row">Vendor:</th>
            <td><c:out value='${ expense.vendor_name }'/></td>
          </tr>
          <tr>
            <th scope="row">Amount Spent:</th>
            <td>$<c:out value='${ expense.amount }'/></td>
          </tr>
        </tbody>
      </table>
      <a href="/" class="btn btn-primary btn-sm btn-block">Home</a>
</body>
</html> 