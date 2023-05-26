package com.example.demo.domain.reviewComment;

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
@Table(name = "review_comment")
@Entity
public class ReviewComment extends ColumnTimestamp {

    @Id
    private int reCmtCode;
    private String userId;
    private int reviewCode;
    private String reviewComment;

    public ReviewComment(ReviewCommentDto reviewCommentDto){
        this.reCmtCode = reviewCommentDto.getReCmtCode();
        this.userId = reviewCommentDto.getUserId();
        this.reviewCode = reviewCommentDto.getReviewCode();
        this.reviewComment = reviewCommentDto.getReviewComment();
    }
    //댓글 수정
    public void setReviewComment(ReviewComment reviewComment){
        this.reviewComment = reviewComment.getReviewComment();
    }

}
