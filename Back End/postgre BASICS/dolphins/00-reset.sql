DROP TABLE IF EXISTS dolphin;

CREATE TABLE Dolphin(
    name VARCHAR(20) PRIMARY KEY,
    color VARCHAR(20),
    height SMALLINT,
    healthy BOOLEAN DEFAULT TRUE
);

INSERT INTO dolphin(name,color,height)
VALUES
    ('Daron', 'gray', 3),
    ('Ron', 'blue', 1),
    ('Simon', 'green', 4),
    ('Bron', 'brown', 2);