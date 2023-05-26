package com.example.demo.domain.category;

import com.example.demo.domain.region.RegionDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@AllArgsConstructor
@NoArgsConstructor // public User(){}
@Table(name="category")
@Entity
public class Category {
    @Id
    private int categoryCode;
    private String categoryName;
    public Category (CategoryDto categoryDto){
        this.categoryCode = categoryDto.getCategoryCode();
        this.categoryName = categoryDto.getCategoryName();
    }

}
