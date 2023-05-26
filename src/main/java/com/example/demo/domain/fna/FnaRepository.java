package com.example.demo.domain.fna;

import com.example.demo.domain.reviewBoard.ReviewBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FnaRepository extends JpaRepository<Fna,Integer > {
    Fna findByFnaCode(int fnaCode);
}
