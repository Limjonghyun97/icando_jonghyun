package com.example.demo.domain.agent;

import com.example.demo.util.ColumnTimestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@AllArgsConstructor
@NoArgsConstructor // public User(){}
@Table(name="work_agent")
@Entity
public class Agent extends ColumnTimestamp {
    @Id
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
    private String agentAlramToken;

    public  Agent (AgentDto agentDto){
        this.agentId = agentDto.getAgentId();
        this.agentPassword = agentDto.getAgentPassword();
        this.agentName = agentDto.getAgentName();
        this.agentNickname = agentDto.getAgentNickname();
        this.agentAge = agentDto.getAgentAge();
        this.agentGender = agentDto.getAgentGender();
        this.regionCode = agentDto.getRegionCode();
        this.regionName = agentDto.getRegionName();
        this.agentPrice = agentDto.getAgentPrice();
        this.agentPhone = agentDto.getAgentPhone();
        this.agentAbout = agentDto.getAgentAbout();
        this.agentScore = agentDto.getAgentScore();
        this.agentImage = agentDto.getAgentImage();
        this.categoryCode = agentDto.getCategoryCode();
        this.categoryName = agentDto.getCategoryName();
        this.agentCredit = agentDto.getAgentCredit();
        this.agentAlramToken = agentDto.getAgentAlramToken();

    }

    public void setAgentAlramToken(String agentAlramToken){
        this.agentAlramToken = agentAlramToken;
    }
    public void setAgent(Agent agent){
        this.agentPassword = agent.getAgentPassword();
    }

}