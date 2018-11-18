create table authorities (id bigint not null auto_increment, authority varchar(255), primary key (id)) ENGINE=InnoDB;
create table t_user (id bigint not null auto_increment, first_name_user varchar(255), last_name_user varchar(255), login varchar(255), password varchar(255), primary key (id)) ENGINE=InnoDB;
create table user_authorities (user_id bigint not null, authorities_id bigint not null, primary key (user_id, authorities_id)) ENGINE=InnoDB;
alter table user_authorities add constraint FKnfeejqie0sy3gxxil7dn3plsw foreign key (authorities_id) references authorities (id);
alter table user_authorities add constraint FKcp4tnod2wmes8pcfleq5h68ya foreign key (user_id) references t_user (id);