package com.exambyte.controller;

import com.exambyte.entity.User;
import com.exambyte.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController // Marks this class as a REST controller to handle API requests
@RequestMapping("/api/users") // Base URL for all endpoints in this controller
public class UserController {
    private final UserService userService; // Service for handling user-related logic

    // Constructor-based dependency injection for UserService
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Retrieves a user by their GitHub ID.
     * If the user does not exist, a new user is created with the role "STUDENT".
     * @param githubId The GitHub ID of the user.
     * @return The existing or newly created User object.
     */
    @GetMapping("/{githubId}") // Maps GET requests to "/api/users/{githubId}"
    public User getUser(@PathVariable String githubId) {
        return userService.findOrCreateUser(githubId, "STUDENT"); // Finds or creates the user
    }
}
