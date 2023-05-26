package com.example.demo.domain.agent;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class AgentDto {
    private String agentId;
    private String agentPassword;
    private String agentName;
    private String agentNickname;
    private int agentAge;
    private String agentGender;
    private int regionCode;
    private String regionName;
    private int agentPrice;
    private String agentPhone;
    private String agentAbout;
    private double agentScore;
    private String agentImage;
    private int categoryCode;
    private String categoryName;
    private int agentCredit;
    private String regDate;
    private String updateDate;
    private String agentAlramToken;
}
