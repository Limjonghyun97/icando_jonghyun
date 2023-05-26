package com.example.demo.service;

import com.example.demo.domain.reviewComment.ReviewComment;
import com.example.demo.domain.reviewComment.ReviewCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReviewCommentService  {
    private final ReviewCommentRepository reviewCommentRepository;
   // 후기 리뷰 전체
    @Transactional
    public List<ReviewComment> getReviewCommentAll(Integer reviewCode){
        return  reviewCommentRepository.findAllByReviewCode(reviewCode);
    }
    @Transactional
    public ReviewComment getReviewComment(int reCmtCode){
        System.out.println("댓글번호 서비스 " + reCmtCode);
        ReviewComment reviewComment = reviewCommentRepository.findByReCmtCode(reCmtCode);

        return reviewComment;
    }
    public void addReviewComment(ReviewComment reviewComment){
        reviewCommentRepository.save(reviewComment);
    }

    @Transactional
    public void updateByReCmtCode(ReviewComment reviewComment){
        System.out.println("댓글update 서비스:"+reviewComment.getReviewComment());

        ReviewComment reviewCommentList = getReviewComment(reviewComment.getReCmtCode());

        if(reviewCommentList != null){
            reviewCommentList.setReviewComment(reviewComment);
        }
    }
    public void deleteComment(int reCmtCode){
        reviewCommentRepository.deleteById(reCmtCode);
    }

}
