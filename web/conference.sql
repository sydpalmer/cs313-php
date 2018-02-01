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