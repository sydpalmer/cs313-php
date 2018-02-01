CREATE DATABASE conference;

CREATE TABLE users (
	user_id  SERIAL PRIMARY KEY,
	name     TEXT
 );

CREATE TABLE speakers (
	speaker_id  SERIAL PRIMARY KEY,
	name     TEXT
);

CREATE TABLE conferences (
	conference_id  SERIAL PRIMARY KEY,
	month_year  TEXT
);

CREATE TABLE sessions (
	session_id  SERIAL PRIMARY KEY,
	session_name  TEXT,
	conference_id INTEGER REFERENCES conferences(conference_id)
);

CREATE TABLE talks (
	talk_id SERIAL PRIMARY KEY,
	speaker_id INTEGER REFERENCES speakers(speaker_id),
	talk_title TEXT
);

CREATE TABLE notes (
	note_id  SERIAL PRIMARY KEY,
	note     TEXT,
	user_id  INTEGER REFERENCES users(user_id),
	conference_id  INTEGER REFERENCES conferences(conference_id),
	speaker_id  INTEGER REFERENCES speakers(speaker_id),
	session_id INTEGER REFERENCES sessions(session_id),
	talk_id INTEGER REFERENCES talks(talk_id)
);

INSERT INTO speakers (name) VALUES 
	('Dalin H. Oaks'), 
	('Jeffery R. Holland'), 
	('D. Todd Christofferson');

INSERT INTO talks (speaker_id, talk_title) VALUES 
	(1, 'The Plan and the Proclamation'), 
	(2, 'Be Ye Therefor Perfect - Eventually'), 
	(3, 'The Living Bread, Which Came Down From Heaven');

INSERT INTO conferences (month_year) VALUES ('October - 2017');

INSERT INTO sessions (session_name, conference_id) VALUES 
	('Saturday Morning', 1);

INSERT INTO users (name) VALUES ('Me');

INSERT INTO notes (note, user_id, conference_id, speaker_id, session_id, talk_id) values 
	('Insightful thoughts', 1, 1, 1, 1, 1), 
	('Insightful thoughts', 1, 1, 2, 1, 2), 
	('Insightful thoughts', 1, 1, 3, 1, 3);