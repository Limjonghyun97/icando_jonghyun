package com.example.demo.domain.user;

import com.example.demo.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String > {


    // 조건 검색 (파라미터 맴핑)
    @Query(nativeQuery = true, value = "SELECT * FROM `user` WHERE user_id=?1")
    public List<User> func1(String userId);


    @Query(nativeQuery = true, value = "SELECT  * FROM `user` WHERE user_id=?1 AND user_password=?2 ")
    public List<User> func2(String userId, String userPassword);

    @Query(nativeQuery = true, value = "SELECT  * FROM `user` WHERE user_id=:userId AND user_password=:userPassword")
    public List<User> func3(@Param("userId") String userId, @Param("userPassword") String userPassword);


    // 2.
    // SELECT * FROM user WHERE id=?
    public List<User> getAllByUserId(String userId);

    public List<User> getAllByUserIdAndUserPasswordOrderByUserId(String userId, String userPassword);

    void deleteById(String userId);


    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.userPassword=:userPassword, u.userNickname=:userNickname, u.userAge=:userAge, u.userGender=:userGender, u.userPhone=:userPhone WHERE u.userId=:userId")
    void updateUserInfoByUserId(@Param("userPassword") String userPassword, @Param("userNickname") String userNickname, @Param("userAge") Integer userAge, @Param("userGender") String userGender, @Param("userPhone") String userPhone, @Param("userId") String userId);
}