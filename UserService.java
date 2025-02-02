package com.exambyte.service;

import com.exambyte.entity.User;
import com.exambyte.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service // Marks this class as a Spring service component, allowing dependency injection
public class UserService {
    private final UserRepository userRepository; // Repository for accessing user data

    // Constructor-based dependency injection for UserRepository
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Finds a user by their GitHub ID.  
     * If the user does not exist, creates a new user with the given GitHub ID and role.
     * @param githubId The GitHub ID of the user.
     * @param role The role assigned to the user if a new user is created.
     * @return The existing or newly created User object.
     */
    public User findOrCreateUser(String githubId, String role) {
        return userRepository.findByGithubId(githubId) // Check if the user exists
                .orElseGet(() -> userRepository.save(new User(githubId, role))); // If not, create and save a new user
    }
}
