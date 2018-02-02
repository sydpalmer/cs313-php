CREATE TABLE trucker(
	trucker_id 	SERIAL PRIMARY KEY,
	initials	TEXT
);

CREATE TABLE tractor(
	tractor_id 	SERIAL PRIMARY KEY,
	tractor_num	INTEGER
);

CREATE TABLE date(
	date_id		SERIAL PRIMARY KEY,
	month_year	INTEGER
);

CREATE TABLE temp(
	temp_id 	SERIAL PRIMARY KEY,
	temperature	INTEGER
);

CREATE TABLE trailer(
	trailer_id 	SERIAL PRIMARY KEY,
	trailer_num	INTEGER
	temp_id 	INTEGER REFERENCES temp(temp_id)
);

CREATE TABLE shipping(
	shipping_id	SERIAL PRIMARY KEY,
	product		TEXT,
	trucker_id 	INTEGER REFERENCES trucker(trucker_id),
	tractor_id 	INTEGER REFERENCES tractor(tractor_id),
	trailer_id 	INTEGER REFERENCES trailer(trailer_id),
	date_id		INTEGER REFERENCES date(date_id),
	temp_id		INTEGER REFERENCES temp(temp_id)
);