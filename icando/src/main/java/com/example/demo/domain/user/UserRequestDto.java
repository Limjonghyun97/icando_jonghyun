package com.example.demo.domain.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class UserRequestDto {
    private String userId;
    private String userPassword;
    private String userName;
    private String userNickname;
    private int userAge;
    private String userGender;
    private String userPhone;
    private int userCredit;
    private String alramToken;

}
