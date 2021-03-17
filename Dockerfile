FROM adoptopenjdk/openjdk14:alpine-jre

WORKDIR /opt

COPY target/spring-docker.jar application.jar

ENTRYPOINT ["java", "-jar", "application.jar"]