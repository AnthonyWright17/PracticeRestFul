DROP DATABASE IF EXISTS shows;

CREATE DATABASE shows;

\c shows
DROP TABLE IF EXISTS anime;
CREATE TABLE anime (
  anime_id SERIAL PRIMARY KEY,
  title varChar(255) NOT NULL,
  release_date DATE,
  genre varChar(60) NOT NULL,
  seasons INTEGER
);
\i seed.sql