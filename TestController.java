package com.exambyte.controller;

import com.exambyte.entity.Test;
import com.exambyte.service.TestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Marks this class as a REST controller to handle API requests
@RequestMapping("/api/tests") // Base URL for all endpoints in this controller
public class TestController {
    private final TestService testService; // Service for handling test-related logic

    // Constructor-based dependency injection for TestService
    public TestController(TestService testService) {
        this.testService = testService;
    }

    /**
     * Retrieves a list of all test records.
     * @return A list of Test entities.
     */
    @GetMapping // Maps GET requests to "/api/tests"
    public List<Test> getAllTests() {
        return testService.getAllTests(); // Calls the service to fetch all tests
    }
}
