-- Exercise 1

SELECT count(*) FROM city
WHERE population > 100000;

-- Exercise 2

SELECT sum(population) from city
WHERE district = 'California';

-- Exercise 3

SELECT avg(population) from city
WHERE District = 'California';

-- Exercise 4

SELECT  ROUND(avg(population), 0) from city;