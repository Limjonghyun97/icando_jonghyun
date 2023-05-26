package com.example.demo.controller;

import com.example.demo.domain.fileData.FileData;
import com.example.demo.domain.fileData.FileDataDto;
import com.example.demo.domain.reviewComment.ReviewComment;
import com.example.demo.service.FileDataService;
import com.example.demo.service.ReviewCommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class FileDataController {
    private final FileDataService fileDataService;
    @PostMapping("fileUpload")
    public FileData fileUpload(@RequestBody FileDataDto fileDataDto){
        FileData fileData = new FileData(fileDataDto);
        fileDataService.addFile(fileData);
        return fileData;
    }

    @GetMapping("reviewFileData")
    public List<FileData> getFileDataByCode(@RequestParam int reviewCode){
        System.out.println("commentCOde:"+reviewCode);
        List<FileData> list = fileDataService.getFileDataAll(reviewCode);
        return list;
    }
}
