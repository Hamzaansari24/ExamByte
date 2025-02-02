package com.exambyte.repository;

import com.exambyte.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

// UserRepository interface extends JpaRepository to provide CRUD operations for the User entity.
public interface UserRepository extends JpaRepository<User, Long> {

    // Custom method to find a User entity by their GitHub ID.
    // Spring Data JPA automatically implements this method based on the method name.
    User findByGithubId(String githubId);
}
