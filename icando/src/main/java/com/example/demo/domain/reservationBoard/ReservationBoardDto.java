package com.example.demo.domain.reservationBoard;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationBoardDto {
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
}
