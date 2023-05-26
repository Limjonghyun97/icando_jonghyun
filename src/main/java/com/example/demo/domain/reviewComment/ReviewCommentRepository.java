package com.example.demo.domain.reviewComment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewCommentRepository extends JpaRepository<ReviewComment, Integer> {
    List<ReviewComment> findAllByReviewCode(int reviewCode);

    ReviewComment findByReCmtCode(int reCmtCode);

}
