CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE cards (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

INSERT INTO cards (name) VALUES
('2_of_clubs'),
('3_of_clubs'),
('4_of_clubs'),
('5_of_clubs'),
('6_of_clubs'),
('7_of_clubs'),
('8_of_clubs'),
('9_of_clubs'),
('10_of_clubs'),
('jack_of_clubs'),
('queen_of_clubs'),
('king_of_clubs'),
('ace_of_clubs'),
('2_of_diamonds'),
('3_of_diamonds'),
('4_of_diamonds'),
('5_of_diamonds'),
('6_of_diamonds'),
('7_of_diamonds'),
('8_of_diamonds'),
('9_of_diamonds'),
('10_of_diamonds'),
('jack_of_diamonds'),
('queen_of_diamonds'),
('king_of_diamonds'),
('ace_of_diamonds'),
('2_of_hearts'),
('3_of_hearts'),
('4_of_hearts'),
('5_of_hearts'),
('6_of_hearts'),
('7_of_hearts'),
('8_of_hearts'),
('9_of_hearts'),
('10_of_hearts'),
('jack_of_hearts'),
('queen_of_hearts'),
('king_of_hearts'),
('ace_of_hearts'),
('2_of_spades'),
('3_of_spades'),
('4_of_spades'),
('5_of_spades'),
('6_of_spades'),
('7_of_spades'),
('8_of_spades'),
('9_of_spades'),
('10_of_spades'),
('jack_of_spades'),
('queen_of_spades'),
('king_of_spades'),
('ace_of_spades');

DROP TABLE users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  id_position INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE texts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chapter VARCHAR(50) NOT NULL,
  text VARCHAR(255) NOT NULL
);

CREATE TABLE user_choises (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_user INTEGER,
  id_text INTEGER,
  FOREIGN KEY(id_user) REFERENCES users(id),
  FOREIGN KEY(id_text) REFERENCES texts(id)
);

CREATE TABLE text_options (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_text INTEGER NOT NULL,
  options VARCHAR(255) NOT NULL,
  id_followup_text INTEGER NOT NULL,
  FOREIGN KEY(id_text) REFERENCES texts(id),
  FOREIGN KEY(id_followup_text) REFERENCES texts(id)
);

SELECT texts.id, texts.chapter, texts.text
FROM texts INNER JOIN users
ON texts.id = users.id_position
WHERE users.id = 1;

DROP TABLE text_options;

CREATE TABLE images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50) NOT NULL
);

INSERT INTO text_options (id_text, options, id_followup_text) VALUES 
(1, 'Explore', 2),
(1, 'Tavern', 3),
(1, 'Fields', 4),
(2, 'Blacksmith', 5),
(2, 'Market', 6),
(3, 'Bertender', 7),
(3, 'Adventures', 8),
(4, 'Approach', 9),
(4, 'Lie down', 10);

INSERT INTO texts (chapter, text) VALUES 
('Amberfall', 'You awaken to the gentle hum of a quaint village. The air carries the scent of <br>
fresh hay and the distant sound of clinking metal. As your eyes adjust to the soft morning <br>
light, you find yourself in the center of Amberfall, a small village known for its golden <br>
wheat fields and hearty folk. <br>
<br>
<b> What will you do? </b> <br>
1. Explore the village square <br>
2. Seek out the local tavern <br>
3. Venture into the surrounding fields'),

('Village square', 
'The village square is the heart of Amberfall. A fountain adorned with a statue of the <br>
village founder stands proudly in the center. Around it, life thrives. There''s a <br>
market nearby and you also see a blacksmith clanging away at something he''a making. <br>
<br>
<b> What will you do? </b><br>
1. Talk to the blacksmith <br>
2. Visit the market stalls'),

('Drunken Donkey tavern', 'The tavern is a sanctuary for travelers and locals alike. <br>
The walls are adorned with relics of past adventures, and the air is thick with tales <br>
of glory and sorrow. You see a group of rowdy looking adventurers sitting at a table in <br>
the corner. <br>
<br>
<b> What will you do? </b><br>
1. Chat with the bartender <br>
2. Join the group of adventurers'),

('The golden wheat fields', 
'The fields stretch as far as the eye can see. The sun casts a warm glow over <br>
the land, and the wheat sways like an ocean of gold. The clouds move calmly <br>
across the sky. You spot a mysterious figure looming behind a tree in  <br>
the field, looking at you.<br>
<br>
<b> What will you do? </b><br>
1. Approach the mysterious figure <br>
2. Lie down and watch the clouds'),

('Blacksmith''s forge', 'The blacksmith, a towering figure named Thorin, greets you <br>
with a nod. His forge is a cacophony of sparks and flames. He is currently making <br>
an axe. He seems to know what he''s doing, even though he seems overwhelmed with lots <br>
of work.<br>
<br>
<b> What will you do? </b><br>
1. Offer to help with the forging <br>
2. Ask about the village''s history'),

('Visit the market stalls', 'The market is a vibrant tapestry of colors and smells. <br>
Each stall offers its own treasure. You notice a vendor who accidentally falls over <br>
and all their wares fall to the ground. <br>
<br>
<b> What will you do? </b><br>
1. Haggle for a mysterious artifact at a nearby stall <br>
2. Help the vendor in distress'),

('Chat with the bartender', 'The bartender, a well-traveled man with a knowing smile, <br>
offers you a pint and an ear for stories. <br>
<br>
<b> What will you do? </b><br>
1. Ask about the local legends <br>
2. Inquire about recent rumors'),

('Approach the adventurers', 'The adventurers welcome you with open arms, <br>
sharing stories of their exploits and victories. <br>
<br>
<b> What will you do? </b><br>
1. Propose a toast to the fallen <br>
2. Offer to join their next quest'),

('Follow a mysterious figure', 'As you follow the figure, it leads you to an old, <br>
forgotten well. The figure reveals themselves to be a spirit bound to the well, <br>
seeking release. They ash you for help. <br>
<br>
<b> What will you do? </b><br>
1. Help the spirit <br>
2. Politely decline and return to the village'),

('Lie down and watch the clouds', 'Lying in the soft embrace of the wheat, you watch <br>
as the clouds form stories above you. You spot a cloud formation that looks weird. <br>
<br>
<b> What will you do? </b><br>
1. Investigate the peculiar cloud formation <br>
2. Drift into a peaceful nap');

