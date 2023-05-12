CREATE TABLE IF NOT EXISTS tbl_usuario (
	id_usuario smallint AUTO_INCREMENT PRIMARY KEY,
	nome Varchar(50) NOT NULL,
    usuario Varchar(50) NOT NULL,
    cpf Varchar(15) NOT NULL,
    email Varchar(200) NOT NULL,
    senha Varchar(50) NOT NULL,
	data_cadastro DATE NOT NULL,
	data_alteracao DATE NOT NULL
);