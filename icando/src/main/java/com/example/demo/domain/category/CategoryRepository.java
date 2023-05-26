package com.example.demo.domain.category;

import com.example.demo.domain.region.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
