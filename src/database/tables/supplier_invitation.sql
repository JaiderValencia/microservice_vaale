CREATE TABLE supplier_invitation (
id bigint(20) NOT NULL AUTO_INCREMENT,
supplier_id bigint(20) DEFAULT NULL,
commerce_cell_phone varchar(256) DEFAULT NULL,
entry_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (supplier_id) REFERENCES supplier (id),
);