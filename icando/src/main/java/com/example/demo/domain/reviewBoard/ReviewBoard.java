package com.example.demo.domain.reviewBoard;

import com.example.demo.util.ColumnTimestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;


@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "review_board")
@Entity
public class ReviewBoard extends ColumnTimestamp {
    @Id
    private int reviewCode;
    private int resCode;
    private int giveScore;
    private int viewCount;
    private String userId;
    private String agentId;
    private String reviewTitle;
    private String reviewContent;
    private String reviewImage;

    public ReviewBoard(ReviewBoardDto reviewBoardDto){
        this.reviewCode = reviewBoardDto.getReviewCode();
        this.resCode = reviewBoardDto.getResCode();
        this.giveScore = reviewBoardDto.getGiveScore();
        this.userId = reviewBoardDto.getUserId();
        this.agentId = reviewBoardDto.getAgentId();
        this.reviewTitle = reviewBoardDto.getReviewTitle();
        this.reviewContent = reviewBoardDto.getReviewContent();
        this.viewCount = reviewBoardDto.getViewCount();
        this.reviewImage = reviewBoardDto.getReviewImage();
    }

    // 활동후기 업데이트
    public void setReviewBoard(ReviewBoard reviewBoard){
        this.reviewTitle = reviewBoard.getReviewTitle();
        this.reviewContent = reviewBoard.getReviewContent();
    }
    public void setViewCount(int viewCount){
        this.viewCount = viewCount;
    }
}
