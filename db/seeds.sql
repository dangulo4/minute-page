USE minutepage;

INSERT INTO users
    (username, firstname, lastname, email, password, createdAt, updatedAt)
VALUES
    ('user1', 'Alexia', 'Chalita', 'password', 'user1@gmail.com', curdate(), curdate()),
    ('user2', 'Matthew', 'Bell', 'password', 'user2@gmail.com', curdate(), curdate()),
    ('user3', 'Daniel', 'Angulo', 'password', 'user3@gmail.com', curdate(), curdate())
;

INSERT INTO pages
    (name, header, description, title, quote, pointOne, pointTwo, pointThree, pointFour, pointFive, createdAt, updatedAt, UserId)
VALUES
    ('MyLandingPage', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, autem?', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta',
        'My Title', 'Lorem, ipsum dolor sit amet consectetur adipisicing', 'Lorem, ipsum dolor sit amet', curdate(), curdate(), 1),
    ('MyLandingPage', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, autem?', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta',
        'My Title', 'Lorem, ipsum dolor sit amet consectetur adipisicing', 'Lorem, ipsum dolor sit amet', 'Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit.',
        'Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit.', curdate(), curdate(), 2)
;
