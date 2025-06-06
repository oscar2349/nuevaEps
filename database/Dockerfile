FROM mysql:8
ENV MYSQL_DATABASE=db_medicamentos
ENV MYSQL_ROOT_PASSWORD=rootpassword
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 3307
