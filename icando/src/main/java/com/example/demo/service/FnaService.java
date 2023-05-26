package com.example.demo.service;

import com.example.demo.domain.fna.Fna;
import com.example.demo.domain.fna.FnaDto;
import com.example.demo.domain.fna.FnaRepository;
import com.example.demo.domain.reviewBoard.ReviewBoard;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class FnaService {
    private final FnaRepository fnaRepository;

    @Transactional
    public List<Fna> getFnaBoardAll(){
        return  fnaRepository.findAll();
    }

    @Transactional
    public Fna getFna(int fnaCode){
        Fna fna = fnaRepository.findByFnaCode(fnaCode);

        return fna;
    }
}
