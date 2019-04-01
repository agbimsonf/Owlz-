USE owlz_db;

INSERT INTO Clients (first_name, last_name, phone_number, email, createdAt, updatedAt ) VALUES ('flo', 'Star', '7862123888', 'flo@gmail.com',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Clients (first_name, last_name, phone_number, email, createdAt, updatedAt  ) VALUES ('Fumanya', 'Smith', '78678956766', 'fum@gmail.com',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Clients (first_name, last_name, phone_number, email, createdAt, updatedAt  ) VALUES ('Giorgo', 'Delavega', '7864532753', 'giorgo@gmail.com',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO Promoters (first_name, last_name, handle, descriptions, city, languages, phone_number, email, instagram, createdAt, updatedAt  ) VALUES ('Bob', 'Lastar',"@promo1","I'm the best", "Miami", 'English', '7864532753', 'boby@gmail.com', "@insta1",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Promoters (first_name, last_name, handle, descriptions, city, languages, phone_number, email, instagram, createdAt, updatedAt  ) VALUES ('Jojo', 'Potato',"@promo2",'I am the best too', "Miami", 'English', '7864532753', 'jojo@gmail.com', "@insta2",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Promoters (first_name, last_name, handle, descriptions, city, languages, phone_number, email, instagram, createdAt, updatedAt  ) VALUES ('Totoro', 'tomato',"@promo3",'hello dude', "Miami", 'Spanish', '7864532753', 'toto@gmail.com', "@insta3",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO Messages (descriptions, createdAt, updatedAt, ClientId, PromoterId ) VALUES ('I want you',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP, 1,2);