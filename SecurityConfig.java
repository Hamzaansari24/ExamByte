package com.exambyte.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

public class SecurityConfig {
    
    /**
     * Configures security settings for the application.
     * This method enables OAuth2 login for authentication.
     * 
     * @param http The HttpSecurity object to configure security settings.
     * @return The configured SecurityFilterChain.
     * @throws Exception If an error occurs during configuration.
     */
    @Bean // Marks this method as a Spring bean, making it available for dependency injection
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.oauth2Login(); // Enables OAuth2 login for authentication
        return http.build(); // Builds and returns the security configuration
    }
}
