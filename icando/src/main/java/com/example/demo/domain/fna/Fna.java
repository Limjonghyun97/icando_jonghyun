package com.example.demo.domain.fna;

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
@Table(name="fna")
@Entity
public class Fna  {
    @Id
    private int fnaCode;
    private String fnaTitle;
    private String fnaContent;
}
