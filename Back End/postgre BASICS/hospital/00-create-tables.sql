DROP TABLE IF EXISTS patient;
DROP TABLE IF EXISTS symptoms;
DROP TABLE IF EXISTS disease;
DROP TABLE IF EXISTS gender;
DROP TABLE IF EXISTS ethnicity;

CREATE TABLE ethnicity (
    id INTEGER PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE gender (
    id INTEGER PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE symptoms (
    family INTEGER PRIMARY KEY,
    fever BOOLEAN,
    blue_whites BOOLEAN,
    low_bp BOOLEAN
);

CREATE TABLE disease (
    name VARCHAR(20) PRIMARY KEY,
    survival_rate FLOAT
);

CREATE TABLE patient (
    id SERIAL PRIMARY KEY,
    ethnicity INTEGER,
    gender INTEGER,
    symptoms_family INTEGER,
    disease VARCHAR(20),

    FOREIGN KEY (ethnicity) REFERENCES ethnicity(id),
    FOREIGN KEY (gender) REFERENCES gender(id),
    FOREIGN KEY (symptoms_family) REFERENCES symptoms(family),
    FOREIGN KEY (disease) REFERENCES disease(name)
);