package com.example.demo.controller;

import com.example.demo.domain.agent.Agent;
import com.example.demo.domain.agent.AgentDto;

import com.example.demo.domain.user.User;
import com.example.demo.service.AgentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class AgentController {
    private final AgentService agentService;

    @PostMapping("agentJoin")
    public Boolean agentJoin(@RequestBody AgentDto agentDto){

        Agent check = agentService.getAgentById(agentDto.getAgentId());


        if(check == null) {
            System.out.println("가입 컨트롤러");
            Agent agent = new Agent(agentDto);
            agentService.addAgent(agent);
            return true;
        }
        return false;
    }
    @PostMapping("agentLogin")
    public Agent checkById(HttpServletRequest request, @RequestBody AgentDto agentDto){

        Agent agent = new Agent(agentDto);
        agent =  agentService.getCheckById(agent.getAgentId(), agent.getAgentPassword());
        if(agent != null){
            HttpSession session = request.getSession();
            session.setAttribute("log",agent);
            session.setAttribute("category", "agent");

            // Firebase Cloud Messaging 토큰 업데이트
            String token = agent.getAgentAlramToken();
            System.out.println("보낸토큰:"+agentDto.getAgentAlramToken());
            if (token == null || !token.equals(request.getParameter("token"))) {
                agent.setAgentAlramToken(agentDto.getAgentAlramToken());
                agentService.updateByAgentId(agent);
            }

            return agent;
        }

        return null;
    }
    @PostMapping("agentAll")
    public List<Agent> getAgentAll(){
        List<Agent> agents = agentService.getAgentAll();

        return agents;
    }
    @PostMapping("agentRank")
    public List<Agent> agentRank(){
        List<Agent> agents = agentService.agentRank();
        return agents;
    }
    @PostMapping("agentRecent")
    public List<Agent> agentRecent(){
        List<Agent> agents = agentService.agentRecent();
        return agents;
    }

    @GetMapping("agentById")
    public Agent getUserCreditById(@RequestParam String agentId){

        Agent agent = agentService.getAgentById(agentId);
        return agent;
    }

    @GetMapping("getAgentPrice")
    public Agent getAgentPrice(@RequestParam String agentId){
        Agent agent = agentService.getAgentPrice(agentId);
        System.out.println("비용:"+agent.getAgentPrice());
        return agent;
    }

    @PostMapping("agentListByCategoryCodePage")
    public List<Agent> getAgentByCategoryCode(@RequestParam int categoryCode) {
        List<Agent> agentList = agentService.getAgentByCategoryCode(categoryCode);
        return agentList;
    }

    @PostMapping("agentUpdatePage")
    public boolean agentUpdatePage(HttpServletRequest request, @RequestBody AgentDto agentDto){
        HttpSession session = request.getSession();
        boolean result = agentService.agentUpdateByAgentId(agentDto);
        if(result) {
            Agent agent = new Agent(agentDto);
            session.setAttribute("log", agent);
        }
        return  result;
    }


    @DeleteMapping("/agentIdDelete")

    public void deleteUser(@RequestParam String agentId, HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        Agent agent = agentService.getAgentById(agentId);
        agentService.deleteById(agent);
        if (session != null) {
            session.invalidate(); // 세션 무효화
        }
    }

    @GetMapping("agentTokenById")
    public String getAgentTokenById(@RequestParam String agentId){
        Agent agent = agentService.getAgentById(agentId);
        String agentAlramToken = agent.getAgentAlramToken();
        return agentAlramToken;
    }

}