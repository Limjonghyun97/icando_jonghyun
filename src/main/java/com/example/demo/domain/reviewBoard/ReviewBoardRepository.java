package com.example.demo.domain.reviewBoard;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewBoardRepository extends JpaRepository<ReviewBoard, Integer> {

    // 특정 리뷰목록 가져오기 코드를 기준으로 조회하여 객체반환
    ReviewBoard findByReviewCode(int reviewCode);

}