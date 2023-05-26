package com.example.demo.service;

import com.example.demo.domain.region.Region;
import com.example.demo.domain.region.RegionRepository;
import com.example.demo.domain.reviewBoard.ReviewBoard;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class RegionService {
    private final RegionRepository regionRepository;

    @Transactional
    public List<Region> getRegionListAll(){
        return  regionRepository.findAll();
    }
}
