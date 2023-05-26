package com.example.demo.controller;

import com.example.demo.domain.fna.Fna;
import com.example.demo.domain.reviewBoard.ReviewBoard;
import com.example.demo.service.FnaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class FnaController {
    private final FnaService fnaService;

    @GetMapping("v1/search/fnaBoard")
    public List<Fna> getReviewBoardAll(){
        List<Fna> list = fnaService.getFnaBoardAll();
        return list;
    }
    @GetMapping("fnaByCode")
    public Fna getFnaByCode(@RequestParam int fnaCode){

        Fna fna = fnaService.getFna(fnaCode);
        System.out.println(fna.getFnaContent());
        return fna;
    }
}
