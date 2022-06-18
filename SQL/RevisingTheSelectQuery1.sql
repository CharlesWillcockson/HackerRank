# Exercise 1

SELECT * FROM city
WHERE CountryCode = 'USA'
  AND POPULATION > 100000;

# Exercise 2

SELECT NAME FROM city
WHERE countrycode = 'USA'
  AND population > 120000;

# Exercise 3

SELECT * FROM city;

# Exercise 4

SELECT * FROM city
WHERE ID = 1661;

# Exercise 5

SELECT * FROM city
WHERE countrycode = 'JPN';

# Exercise 6

SELECT NAME FROM city
WHERE countrycode = 'JPN';

# Exercise 7

SELECT DISTINCT CITY FROM station
WHERE MOD(ID, 2) = 0;

# Exercise 8

SELECT count(city) - count(distinct city)
FROM station;

# Exercise 9

SELECT city c, length(city) l
FROM station
ORDER BY l desc, c asc
LIMIT 1;

SELECT city c, length(city) l
FROM station
ORDER BY l asc, c asc
LIMIT 1;

# exercise 10

SELECT distinct city from station
WHERE city LIKE 'A%' OR city LIKE 'E%' OR city LIKE 'I%' OR city LIKE 'O%' OR city LIKE 'U%';

# Exercise 11

SELECT distinct city from station
WHERE city LIKE '%A' OR city LIKE '%E' OR city LIKE '%I' OR city LIKE '%O' OR city LIKE '%U';