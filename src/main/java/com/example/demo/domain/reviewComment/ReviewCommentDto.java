package com.example.demo.domain.reviewComment;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewCommentDto {
    private int reCmtCode;
    private String userId;
    private int reviewCode;
    private String reviewComment;
    private LocalDateTime regDate;
    private LocalDateTime updateDate;
}
