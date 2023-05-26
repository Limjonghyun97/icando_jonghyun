package com.example.demo.domain.fileData;

import com.example.demo.util.ColumnTimestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@AllArgsConstructor
@NoArgsConstructor // public User(){}
@Table(name="file_data")
@Entity
public class FileData extends ColumnTimestamp {
    @Id
    private int fileCode;
    private int reviewCode;
    private String fileUrl;

    public FileData (FileDataDto fileDataDto){
        this.fileCode = fileDataDto.getFileCode();
        this.reviewCode = fileDataDto.getReviewCode();
        this.fileUrl = fileDataDto.getFileUrl();
    }

}
