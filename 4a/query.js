// INSERT TO TYPE_TB

// INSERT INTO type_tb (name) VALUES
// ('Strength'),
// ('HP'),
// ('Agility');

// INSERT TO HEROES_TB

/*INSERT INTO heroes_tb (name, type_id, photo) VALUES
('Batmam',  1, 'https://i.pinimg.com/236x/63/cd/6d/63cd6df96df50b53aa9980e178c58c2c.jpg'),
('Hulk', 2, 'https://i.pinimg.com/236x/e2/6f/da/e26fda37191699fe30d237ced9d48b16.jpg'),
('Spiderman', 3, 'https://i.pinimg.com/236x/2b/9a/37/2b9a37211a7e92f3602161b9088a008d.jpg'); */

// MENAMPILKAN SELERUH TABEL HEROES DAN TABEL TYPE

// SELECT * FROM heroes_tb JOIN type_tb ON (heroes_tb.type_id = type_tb.id)

//  MENAMPILKAN HEROES BERDASARKAN TYPE NYA

// SELECT * FROM heroes_tb WHERE type_id = 1;

//MENAMPILKAN SPESIFIK DATA HEROES DENGAN TYPE NYA

/*SELECT h.id, h.name, t.name AS type, h.photo
FROM heroes_tb AS h
JOIN type_tb AS t ON (h.id = t.id);*/
