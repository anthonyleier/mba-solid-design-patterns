DROP SCHEMA cruz CASCADE;

CREATE SCHEMA cruz;

CREATE TABLE cruz.contract (
    id_contract UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    description TEXT,
    amount NUMERIC,
    periods INTEGER,
    date TIMESTAMP
);

CREATE TABLE cruz.payment(
    id_payment UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    id_contract UUID REFERENCES cruz.contract(id_contract),
    amount NUMERIC,
    date TIMESTAMP
);

INSERT INTO cruz.contract VALUES
('4b07ea85-f8cd-419b-915c-7e642137276f', 'Prestação de serviços escolares', 6000, 12, '2023-01-01T10:00:00');

INSERT INTO cruz.payment VALUES
('2e677e20-4a4c-45ae-90ae-865bef817cf0', '4b07ea85-f8cd-419b-915c-7e642137276f', 6000, '2023-01-05T15:00:00');