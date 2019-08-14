# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT DISTINCT p.ProductName, c.CategoryName 
FROM [Products] as p
JOIN [Categories] as c
ON p.CategoryID = c.CategoryID
(for some reason I got 77 records...)

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderID, s.ShipperName 
FROM [Orders] as o
JOIN [Shippers] as s
ON o.ShipperID = s.ShipperID
WHERE OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, od.Quantity
FROM [OrderDetails] as od
JOIN [Products] as p
ON od.ProductID = p.ProductID
WHERE OrderID = 10251


### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.OrderID, c.CustomerName, e.LastName as EmployeeLastName 
FROM [Orders] as o
JOIN [Customers] as c
ON o.CustomerID = c.CustomerID
JOIN [Employees] as e
ON o.EmployeeID = e.EmployeeID 

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT c.CategoryName, count(*) as Count
FROM [Products] as p
JOIN [Categories] as c
ON p.CategoryID = c.CategoryID
GROUP BY c.CategoryID
(for some reasons I got 8 records...)

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
SELECT od.OrderID, p.ProductName, od.Quantity as ItemCount 
FROM [OrderDetails] as od
JOIN [Products] as p
ON od.ProductID = p.ProductID
GROUP BY od.OrderID