CREATE TABLE supplier (
id bigint(20) NOT NULL AUTO_INCREMENT,
name varchar(256) NOT NULL,
code varchar(45) DEFAULT NULL,
is_active bit(1) DEFAULT b'1',
entry_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);