package com.example.demo.domain.agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.io.File;
import java.util.List;

public interface AgentRepository extends JpaRepository<Agent,String > {

    public List<Agent> findAllByOrderByAgentScoreDesc();

    public List<Agent> findAllByOrderByRegDateDesc();

    public List<Agent> findAllByCategoryCode(int CategoryCode);

    void deleteById(String agentId);

    @Transactional
    @Modifying
    @Query("UPDATE Agent a SET a.agentPassword=:agentPassword, a.agentNickname=:agentNickname, a.agentAge=:agentAge, a.agentGender=:agentGender, a.agentPrice=:agentPrice, a.agentAbout=:agentAbout, a.agentPhone=:agentPhone, a.regionCode=:regionCode, a.regionName=:regionName, a.categoryCode=:categoryCode, a.categoryName=:categoryName, a.agentCredit=:agentCredit, a.agentImage=:agentImage WHERE a.agentId=:agentId")
    void updateAgentInfoByAgentId(@Param("agentPassword") String agentPassword, @Param("agentNickname") String agentNickname, @Param("agentAge") Integer agentAge, @Param("agentGender") String agentGender, @Param("agentPrice") Integer agentPrice, @Param("agentAbout") String agentAbout, @Param("agentPhone") String agentPhone, @Param("regionCode") Integer regionCode, @Param("regionName") String regionName, @Param("categoryCode") Integer categoryCode, @Param("categoryName") String categoryName, @Param("agentCredit") Integer agentCredit, @Param("agentImage") String agentImage, @Param("agentId") String agentId);


}
