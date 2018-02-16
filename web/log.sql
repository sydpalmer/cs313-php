CREATE DATABASE log;

\c log;

CREATE TABLE product(
	product_id	 SERIAL PRIMARY KEY,
	product 	 VARCHAR(20) NOT NULL
);

CREATE TABLE shipping(
	id 					 SERIAL PRIMARY KEY,
	trucker_initials	 VARCHAR(2) NOT NULL,
	tractor_number		 INTEGER NOT NULL,
	trailer_number		 INTEGER NOT NULL,
	month_year			 VARCHAR(11) NOT NULL,
	temperature			 INTEGER NOT NULL,
	product_id			 INTEGER REFERENCES product(product_id)
);