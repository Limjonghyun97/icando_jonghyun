package com.example.demo.domain.region;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@AllArgsConstructor
@NoArgsConstructor // public User(){}
@Table(name="region")
@Entity
public class Region {
    @Id
    private int regionCode;
    private String regionName;

    public Region (RegionDto regionDto){
        this.regionCode = regionDto.getRegionCode();
        this.regionName = regionDto.getRegionName();
    }
}
