package com.example.demo.domain.user;

import com.example.demo.util.ColumnTimestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


// JPA 인터페이스 활용을 위하여 -> User 빈을 -> Entity 로 등록
// ㄴ Entity 등록된 클래스는 반드시 pk 컬럼이 저장되어야 함
// ㄴ Entity 등록된 클래스는 기본 생성자가 있어야 함
@Getter
@AllArgsConstructor
@NoArgsConstructor // public User(){}
@Table(name="users")
@Entity
public class User extends ColumnTimestamp{

    @Id // string id 멤버가 테이블 안에서 PK 임을 알려줌
    private String userId;

    private String userPassword;
    private String userName;
    private String userNickname;
    private int userAge;
    private String userGender;
    private String userPhone;
    private int userCredit;
    private String alramToken;

    public User (UserRequestDto userDto){
        this.userId = userDto.getUserId();
        this.userPassword = userDto.getUserPassword();
        this.userName = userDto.getUserName();
        this.userNickname = userDto.getUserNickname();
        this.userGender = userDto.getUserGender();
        this.userAge = userDto.getUserAge();
        this.userPhone = userDto.getUserPhone();
        this.userCredit = userDto.getUserCredit();
        this.alramToken = userDto.getAlramToken();
    }

    public void setUser(User user){
        this.userPassword = user.getUserPassword();
    }
    public void setUserCredit(User user){
        this.userCredit = user.getUserCredit();
    }
    public void setAlramToken(String alramToken){
        this.alramToken = alramToken;
    }
}




