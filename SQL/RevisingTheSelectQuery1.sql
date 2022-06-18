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