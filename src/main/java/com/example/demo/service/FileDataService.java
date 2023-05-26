package com.example.demo.service;

import com.example.demo.domain.fileData.FileData;
import com.example.demo.domain.fileData.FileDataRepository;
import com.example.demo.domain.reviewComment.ReviewComment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class FileDataService {

    private final FileDataRepository fileDataRepository;
    public void addFile(FileData fileData){
       fileDataRepository.save(fileData);
    }

    @Transactional
    public List<FileData> getFileDataAll(Integer reviewCode){
        return  fileDataRepository.findAllByReviewCode(reviewCode);
    }
}
