


CREATE TABLE flight (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    origin TEXT NOT NULL,
    destination TEXT NOT NULL,
    duration INTEGER NOT NULL
);

INSERT INTO flight (origin, destination, duration) VALUES ("Brasilia", "Lima", 240 );
INSERT INTO flight (origin, destination, duration) VALUES ("wegwegweg", "wgeg", 123 );
INSERT INTO flight (origin, destination, duration) VALUES ("113312f", "tg35", 314134 );
INSERT INTO flight (origin, destination, duration) VALUES ("vava", "xbx", 41 );
INSERT INTO flight (origin, destination, duration) VALUES ("abwb", "htrhqt", 234 );
INSERT INTO flight (origin, destination, duration) VALUES ("Brasawbawrbilia", "12f32f", 6745 );

SELECT * FROM flight;

UPDATE flight SET origin="Buenos Aires" WHERE id=3;

INSERT INTO flight (origin, destination, duration) VALUES 
("Kenia", "Seul", 444),
("Mexico", "Venezuela",123),
("Caracas","San Pablo", 224);
