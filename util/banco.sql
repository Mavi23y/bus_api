CREATE DATABASE bus_api;
USE bus_api;

CREATE TABLE line (
    id_line INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    line_name VARCHAR(45) NOT NULL,
    line_number INT NOT NULL,
    origin_line VARCHAR(45) NOT NULL,     
    destination_line VARCHAR(45) NOT NULL,
    direction_line VARCHAR(150),
    vehicle_number INT NOT NULL
);