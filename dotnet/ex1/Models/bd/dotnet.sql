create database dotnet;

use dotnet;

    exec ('create schema persons');

    exec ('create schema projects');

        create table persons.user_data  ( id         int           primary key IDENTITY
                                        , title      varchar(60)   not null
                                        , comments   varchar(120)  not null
                                        , birth      datetime      not null
                                        , father_id  int
                                        , email      varchar(60)   not null);

        create table projects.tasks     ( id        int             primary key IDENTITY
                                        , title     varchar(60)     not null
                                        , comments  varchar(120)    not null
                                        , workhours decimal(3,2)    not null
                                        , task_type int             not null);

        create table projects.project   ( id            int             primary key IDENTITY
                                        , title         varchar(60)     not null
                                        , comments      varchar(120)    not null
                                        , code          varchar(10)     not null
                                        , startDate     datetime        not null
                                        , estimatedDate datetime        not null
                                        , finishDate    datetime        
                                        , responsible   int             not null
                                        , tasks         int             not null
                                        , members       int             not null);

        create table persons.prj_members    ( id            int     primary key IDENTITY
                                            , id_user       int     not null
                                            , id_project    int     not null);
                            
        create table projects.tasks_on      ( id            int     primary key IDENTITY
                                            , id_task       int     not null
                                            , id_user       int     not null);

        alter table persons.prj_members add constraint fk_id_user
            foreign key(id_user) references persons.user_data(id);

        alter table persons.prj_members add constraint fk_id_project
            foreign key(id_project) references projects.project(id);

        alter table projects.tasks_on add constraint fk_tsk_id
            foreign key(id_task) references projects.tasks(id);

        alter table projects.tasks_on add constraint fk_usr_id
            foreign key(id_user) references persons.user_data(id);

        alter table projects.project add constraint fk_resp_id
            foreign key(responsible) references persons.user_data(id);
        
        alter table projects.project add constraint fk_tasks_on
            foreign key(tasks) references projects.tasks_on(id);

        alter table projects.project add constraint fk_members
            foreign key(members) references persons.prj_members(id);