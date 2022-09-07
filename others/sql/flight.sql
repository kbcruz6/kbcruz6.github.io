


CREATE TABLE flight (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    origin TEXT NOT NULL,
    destination TEXT NOT NULL,
    duration INTEGER NOT NULL
);

INSERT INTO flight (origin, destination, duration) VALUES ("Brasilia", "Caracas", 240 );
INSERT INTO flight (origin, destination, duration) VALUES ("wegwegweg", "wgeg", 123 );
INSERT INTO flight (origin, destination, duration) VALUES ("113312f", "tg35", 314 );
INSERT INTO flight (origin, destination, duration) VALUES ("vava", "xbx", 413 );
INSERT INTO flight (origin, destination, duration) VALUES ("abwb", "htrhqt", 234 );
INSERT INTO flight (origin, destination, duration) VALUES ("Brasawbawrbilia", "12f32f", 674 );

SELECT * FROM flight;

UPDATE flight SET destination="Buenos Aires" WHERE id=2;
UPDATE flight SET destination="Mexico DF" WHERE origin = "Buenos Aires" AND destination="wgeg";

INSERT INTO flight (origin, destination, duration) VALUES 
("Kenia", "Seul", 444),
("Mexico", "Venezuela",123),
("Caracas","San Pablo", 524);

SELECT * FROM flight WHERE origin="Brasilia";
SELECT * FROM flight WHERE duration > 400;
SELECT * FROM flight WHERE origin LIKE "%o%";

DELETE FROM flight WHERE origin != "Mexico";
SELECT * FROM flight GROUP BY origin;

CREATE TABLE aeropuerto (
id INTEGER PRIMARY KEY AUTO_INCREMENT,
name TEXT NOT NULL,
shortName TEXT(3)
);
INSERT INTO aeropuerto (name,shortName) VALUES
("New York", "JFK"),
("Buenos Aires", "EZE"),
("Lima","LIM"),
("San Pablo","SAO"),
("Tokyo","TKO");

SELECT * FROM aeropuerto;

CREATE TABLE pasajero (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    flight_id INTEGER NOT NULL
);

INSERT INTO pasajero (nombre, apellido, flight_id) VALUES
("Maria Marta", "Waimann",1),
("Hugo","Cruz",2),
("Maria Fernanda","Cruz",3),
("Agustin","Cruz",4),
("Gloria","Salvador",5);

SELECT * FROM pasajero;

CREATE TABLE vuelo (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    origin_id TEXT NOT NULL,
    destination_id TEXT NOT NULL,
    flight_id INTEGER NOT NULL
);

INSERT INTO vuelo (origin_id, destination_id, flight_id) VALUES 
("Lima", "Buenos Aires", 1),
("San Pablo", "New York", 2),
("Tokyo","San Pablo", 3),
( "Buenos Aires","San Pablo", 4),
("New York", "Buenos Aires", 5),

SELECT * FROM vuelo;

SELECT nombre,apellido,origin_id,destination_id FROM vuelo A INNER JOIN pasajero B
ON A.flight_id=B.flight_id;

ALTER TABLE vuelo ADD COLUMN oaid INTEGER NOT NULL;
ALTER TABLE vuelo ADD COLUMN daid INTEGER NOT NULL;
