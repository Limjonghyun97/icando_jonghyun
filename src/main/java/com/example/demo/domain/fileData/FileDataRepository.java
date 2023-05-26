package com.example.demo.domain.fileData;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FileDataRepository extends JpaRepository<FileData,Integer > {
    List<FileData> findAllByReviewCode(int reviewCode);
}
