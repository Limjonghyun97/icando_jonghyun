package com.example.demo.domain.reviewBoard;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewBoardDto {
    private int reviewCode;
    private int resCode;
    private int giveScore;
    private int viewCount;
    private String userId;
    private String agentId;
    private String reviewTitle;
    private String reviewContent;
    private String reviewImage;
}