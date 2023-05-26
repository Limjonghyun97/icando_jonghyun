package com.example.demo.controller;

import com.example.demo.domain.reviewBoard.ReviewBoard;
import com.example.demo.domain.reviewBoard.ReviewBoardDto;
import com.example.demo.service.ReviewBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ReviewBoardController {
    private final ReviewBoardService reviewBoardService;

    @GetMapping("v1/search/reviewBoard")
    public List<ReviewBoard> getReviewBoardAll(){
        List<ReviewBoard> list = reviewBoardService.getReviewBoardAll();
        return list;
    }

    @GetMapping("reviewByCode")
    public ReviewBoard getReviewByCode(@RequestParam int reviewCode){

        ReviewBoard reviewBoard = reviewBoardService.getReview(reviewCode);

        return reviewBoard;
    }

    @GetMapping("reviewAll")
    public List<ReviewBoard> getReviewAll(){

        List<ReviewBoard> reviewBoard = reviewBoardService.findAll();
        return reviewBoard;
    }

    @PostMapping("write_review")
    public ReviewBoard writeBoard(@RequestBody ReviewBoardDto reviewBoardDto){

        ReviewBoard reviewBoard = new ReviewBoard(reviewBoardDto);
        reviewBoardService.addReviewBoard(reviewBoard);
        return reviewBoard;
    }

    @PostMapping("updateReview")
    public ReviewBoard updateReview(@RequestBody ReviewBoardDto reviewBoardDto){
        System.out.println("업데이트 컨트롤");
        ReviewBoard reviewBoard = new ReviewBoard(reviewBoardDto);
        reviewBoardService.updateById(reviewBoard);
        return reviewBoard;
    }

}