package com.example.demo.domain.reservationBoard;

import com.example.demo.domain.user.User;
import com.example.demo.util.ColumnTimestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "reservation_board")
@Entity
public class ReservationBoard extends ColumnTimestamp {
    @Id
    private int resCode;
    private String agentId;
    private String userId;
    private String userNickname;
    private String resTitle;
    private String resContent;
    private int workTime;
    private String totalPrice;
    private Boolean checkComplete;
    private String requestImage;
    private String responseImage;
    private int regionCode;
    private String regionName;
    private Boolean checkApply;
    private Boolean checkSuccess;
    private int starPoint;
    private Boolean changeAlram;
    private Boolean newRequestAlram;

    public ReservationBoard(ReservationBoardDto reservationBoardDto){
        this.resCode = reservationBoardDto.getResCode();
        this.agentId = reservationBoardDto.getAgentId();
        this.userId = reservationBoardDto.getUserId();
        this.userNickname = reservationBoardDto.getUserNickname();
        this.resTitle = reservationBoardDto.getResTitle();
        this.resContent = reservationBoardDto.getResContent();
        this.workTime = reservationBoardDto.getWorkTime();
        this.totalPrice = reservationBoardDto.getTotalPrice();
        this.checkComplete = reservationBoardDto.getCheckComplete();
        this.requestImage = reservationBoardDto.getRequestImage();
        this.responseImage = reservationBoardDto.getResponseImage();
        this.regionCode = reservationBoardDto.getRegionCode();
        this.regionName = reservationBoardDto.getRegionName();
        this.checkApply = reservationBoardDto.getCheckApply();
        this.checkSuccess = reservationBoardDto.getCheckSuccess();
        this.starPoint = reservationBoardDto.getStarPoint();
        this.changeAlram = reservationBoardDto.getChangeAlram();
        this.newRequestAlram = reservationBoardDto.getNewRequestAlram();

    }

    public void setCheckComplete(ReservationBoard reservationBoard){
        this.checkComplete = reservationBoard.getCheckComplete();
    }
    // 에이전트 요청 수락여부
    public void setCheckApply(Boolean checkApply){
        this.checkApply = checkApply;
    }
    // 에이전트 작업완료여부(요청자 작업완료 버튼 생성용)
    public void setCheckSuccess(Boolean checkSuccess){
        this.checkSuccess = checkSuccess;
    }
    //사용자 고민해결
    public void setCheckComplete(Boolean checkComplete){
        this.checkComplete = checkComplete;
    }
    public void setStarPoint(int starPoint){
        this.starPoint = starPoint;
    }
    public void setChangeAlram(Boolean changeAlram){
        this.changeAlram = changeAlram;
    }
    public void setNewRequestAlram(Boolean newRequestAlram){
        this.newRequestAlram = newRequestAlram;
    }

}
