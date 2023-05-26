package com.example.demo.domain.fileData;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class FileDataDto {

    private int fileCode;
    private int reviewCode;
    private String fileUrl;
}
