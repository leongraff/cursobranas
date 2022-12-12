--create database app;
create schema personal_finance;
create table personal_finance.lancamento (
    id_lancamento serial primary key,
    mes text,
    categoria text,
    tipo text,
    valor numeric
);   -- logic database partition

insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('janeiro','Salário','receita', 2720);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('janeiro','Freelancer','receita', 1220);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('janeiro','Investimentos','receita', 220);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('janeiro','Aluguel','despesa', 1000);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('janeiro','Conta de luz','despesa', 300);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('janeiro','Conta de água','despesa', 300);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('janeiro','Livros','despesa', 300);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('janeiro','Alimentacao','despesa', 500);

insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('fevereiro','Salário','receita', 3220);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('fevereiro','Freelancer','receita', 1220);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('fevereiro','Investimentos','receita', 220);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('fevereiro','Aluguel','despesa', 1000);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('fevereiro','Conta de luz','despesa', 300);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('fevereiro','Conta de água','despesa', 300);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('fevereiro','Livros','despesa', 300);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('fevereiro','Alimentacao','despesa', 500);

insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('marco','Salário','receita', 3720);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('marco','Freelancer','receita', 1220);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('marco','Investimentos','receita', 220);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('marco','Aluguel','despesa', 1000);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('marco','Conta de luz','despesa', 300);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('marco','Conta de água','despesa', 300);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('marco','Livros','despesa', 300);
insert into personal_finance.lancamento(mes,categoria,tipo,valor) values ('marco','Alimentacao','despesa', 500);


