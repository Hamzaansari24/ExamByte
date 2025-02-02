package com.exambyte.service;

import com.exambyte.entity.Test;
import com.exambyte.repository.TestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Marks this class as a Spring service component for dependency injection
public class TestService {
    private final TestRepository testRepository; // Repository for handling Test entity operations

    // Constructor-based dependency injection for TestRepository
    public TestService(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    /**
     * Retrieves all test records from the database.
     * @return A list of all Test entities.
     */
    public List<Test> getAllTests() {
        return testRepository.findAll(); // Fetches all test records from the repository
    }
}
