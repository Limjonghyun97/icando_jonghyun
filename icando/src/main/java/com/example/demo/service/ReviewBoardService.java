package com.example.demo.service;

import com.example.demo.domain.reviewBoard.ReviewBoard;
import com.example.demo.domain.reviewBoard.ReviewBoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReviewBoardService {

    private final ReviewBoardRepository reviewBoardRepository;
    //글 전체보기
    @Transactional
    public List<ReviewBoard> getReviewBoardAll(){
        return  reviewBoardRepository.findAll();
    }

    //특정 글 상세보기
    @Transactional
    public ReviewBoard getReview(int reviewCode){
        System.out.println("서비스 " + reviewCode);
        ReviewBoard review = reviewBoardRepository.findByReviewCode(reviewCode);

        //조회수 올리기
        if (review != null) {

            review.setViewCount(review.getViewCount()+1);
            reviewBoardRepository.save(review);
            System.out.println("후 조회수:"+review.getViewCount());
        }
        return review;
    }

    // 특정 글 수정
    @Transactional
    public void updateById(ReviewBoard reviewBoard){
        ReviewBoard reviewList = getReview(reviewBoard.getReviewCode());

        if(reviewList != null){
            reviewList.setReviewBoard(reviewBoard);
        }
    }


    public void addReviewBoard(ReviewBoard reviewBoard){
        reviewBoardRepository.save(reviewBoard);
    }

    public List<ReviewBoard> findAll(){
        List<ReviewBoard> list = reviewBoardRepository.findAll();
        return list;
    }
}