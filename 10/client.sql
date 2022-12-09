create database app;
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


