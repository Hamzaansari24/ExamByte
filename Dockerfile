# Use OpenJDK 17 as the base image for the container
FROM openjdk:17  

# Copy the built JAR file from the target directory of your project into the container
COPY target/exambyte.jar app.jar  

# Set the entry point to run the application using Java
ENTRYPOINT ["java", "-jar", "/app.jar"]
