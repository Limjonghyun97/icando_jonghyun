package com.example.demo.controller;

import com.example.demo.domain.reviewComment.ReviewComment;
import com.example.demo.domain.reviewComment.ReviewCommentDto;

import com.example.demo.service.ReviewCommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class reviewCommentController {
    private final ReviewCommentService reviewCommentService;

    @GetMapping("reviewComment")
    public List<ReviewComment> getReviewCommentByCode(@RequestParam int reviewCode){
        System.out.println("commentCOde:"+reviewCode);
        List<ReviewComment> list = reviewCommentService.getReviewCommentAll(reviewCode);
        return list;
    }

    @PostMapping("writeReviewComment")
    public ReviewComment writeBoard(@RequestBody ReviewCommentDto reviewCommentDto){
        System.out.println("댓글 컨트롤러:"+reviewCommentDto.getReviewComment());
        ReviewComment reviewComment = new ReviewComment(reviewCommentDto);
        reviewCommentService.addReviewComment(reviewComment);
        return reviewComment;
    }

    @PostMapping("updateReviewComment")
    public ReviewComment updateBoard(@RequestBody ReviewCommentDto reviewCommentDto){
        System.out.println("댓글코드:"+reviewCommentDto.getReCmtCode());
        System.out.println("댓글내용:"+reviewCommentDto.getReviewComment());
        System.out.println("댓글작성자:"+reviewCommentDto.getUserId());
        ReviewComment reviewComment = new ReviewComment(reviewCommentDto);
        reviewCommentService.updateByReCmtCode(reviewComment);


        return reviewComment;
    }

    @GetMapping("commentDelete")
    public void delCmtByCmtCode(@RequestParam int reCmtCode){
        System.out.println("댓글삭제 컨트롤러");
        reviewCommentService.deleteComment(reCmtCode);
    }

}
