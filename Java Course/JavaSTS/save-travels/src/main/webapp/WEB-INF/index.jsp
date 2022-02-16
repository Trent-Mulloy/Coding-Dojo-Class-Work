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
    <h1>Expense Report</h1>
    <table class="table table-striped table-dark" id="tbl">
        <thead>
          <tr>
            <th scope="col">Expense</th>
            <th scope="col">Vendor</th>
            <th scope="col">Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            <c:forEach items='${ expense_list }' var='expense_obj'>
          <tr>
            <td><a href="/expense/${expense_obj.id}"><c:out value="${expense_obj.expense_name}"></a></c:out></td>
            <td><c:out value="${expense_obj.vendor_name}"></c:out></td>
            <td>$<c:out value="${expense_obj.amount}"></c:out></td>
            <td><a href="/expense/${expense_obj.id}/edit" class="btn btn-primary btn-sm btn-block">Edit</a><br><form action="/expense/${expense_obj.id}/delete" method="post"><input type="hidden" name="_method" value="delete"><input type="submit" class="btn btn-danger btn-sm btn-block" value="Delete">
            </form></td>
          </tr>
         </c:forEach>
        </tbody>
      </table>
      <form:form action="/submit" method="post" class="container text-center" id="Form" modelAttribute="expenseitem">
        <div class="form-group m-3">
            <form:label path="expense_name" for="fname">Expense Name:</form:label>
            <form:errors path="expense_name" class = "text-danger" />
            <form:input path="expense_name" class="form-control" name= "ename" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="vendor_name" for="fname">Vendor:</form:label>
            <form:errors path="vendor_name" class = "text-danger" />
            <form:input path="vendor_name" class="form-control" name= "vendor" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="amount" for="fname">Amount:</form:label>
            <form:errors path="amount" class = "text-danger" />
            <form:input path="amount" class="form-control" name= "amount" type="text"/>
        </div>
        <div class="form-group m-3">
            <form:label path="description" for="fname">Description:</form:label>
            <form:errors path="description" class = "text-danger" />
            <form:input path="description" class="form-control" name= "desc" type="text"/>
        </div>
        <input type= "submit" class="btn-primary btn" value="Submit"/>
        </form:form>
</body>
</html> 