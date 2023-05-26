package com.example.demo.service;

import com.example.demo.domain.agent.Agent;
import com.example.demo.domain.agent.AgentDto;
import com.example.demo.domain.agent.AgentRepository;
import com.example.demo.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class AgentService {
    private final AgentRepository agentRepository;

    public void addAgent(Agent agent){
        agentRepository.save(agent);
    }
    @Transactional
    public Agent getAgentById(String id){
        System.out.println("체크id:"+id);
        Agent agent = null;

        agent = agentRepository.findById(id).orElse(null);
//        System.out.println("user : " +  user.getUserId()); // 존재하면 객체반환

        return agent;
    }

    @Transactional
    public List<Agent> getAgentAll() {
        List<Agent> agents = agentRepository.findAll();
        return agents;
    }

    @Transactional
    public List<Agent> agentRank() {
        List<Agent> agents = agentRepository.findAllByOrderByAgentScoreDesc();
        return agents;
    }
    @Transactional
    public List<Agent> agentRecent() {
        List<Agent> agents = agentRepository.findAllByOrderByRegDateDesc();
        return agents;
    }

    @Transactional
    public Agent getAgentPrice(String id){
        Agent agent = null;

        agent = agentRepository.findById(id).orElse(null);
//        System.out.println("user : " +  user.getUserId()); // 존재하면 객체반환

        return agent;
    }


    @Transactional
    public Agent getCheckById(String id, String password){
        Agent agent = null;

        agent = agentRepository.findById(id).orElse(null);
        if(agent != null && password.equals(agent.getAgentPassword())){
            return agent;
        }
        return null;
    }

    @Transactional
    public List<Agent> getAgentByCategoryCode(int categoryCode) {
        List<Agent> agents = agentRepository.findAllByCategoryCode(categoryCode);
        return agents;
    }

    @Transactional
    public boolean agentUpdateByAgentId(AgentDto agentDto) {
        try {
            agentRepository.updateAgentInfoByAgentId(agentDto.getAgentPassword(), agentDto.getAgentNickname(), agentDto.getAgentAge(), agentDto.getAgentGender(), agentDto.getAgentPrice(), agentDto.getAgentAbout(), agentDto.getAgentPhone(), agentDto.getRegionCode(), agentDto.getRegionName(), agentDto.getCategoryCode(), agentDto.getCategoryName(), agentDto.getAgentCredit(), agentDto.getAgentImage(), agentDto.getAgentId());
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Transactional
    public void updateByAgentId(Agent member){
        Agent agent = getAgentById(member.getAgentId());

        if(agent != null){
            agent.setAgent(member);
        }
    }

    // Delete
    @Transactional
    public void deleteById(Agent agent) {
        System.out.println("service:"+ agent.getAgentId());
        agent = agentRepository.findById(agent.getAgentId()).orElse(null);
        if (agent != null) {
            agentRepository.delete(agent);
        } else {

        }
    }

}