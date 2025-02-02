package com.exambyte.repository;

import com.exambyte.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;

// TestRepository interface extends JpaRepository to provide CRUD operations for the Test entity.
// This interface allows interaction with the database for the Test entity without requiring manual implementation.
public interface TestRepository extends JpaRepository<Test, Long> {
    // No additional methods are defined here, so the repository will inherit all the standard CRUD operations
    // from JpaRepository, such as save(), findById(), findAll(), deleteById(), etc.
}
