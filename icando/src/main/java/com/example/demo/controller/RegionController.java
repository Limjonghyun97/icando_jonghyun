package com.example.demo.controller;

import com.example.demo.domain.region.Region;
import com.example.demo.domain.reviewBoard.ReviewBoard;
import com.example.demo.service.RegionService;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class RegionController {
    private final RegionService regionService;

    @GetMapping("v1/search/regionList")
    public List<Region> getRegionAll(){
        List<Region> list = regionService.getRegionListAll();
        return list;
    }
}
