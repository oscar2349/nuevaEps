FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build /app/target/msvc-oauth-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 9100
ENTRYPOINT ["java", "-jar", "app.jar"]
