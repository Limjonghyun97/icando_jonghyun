package com.example.demo.service;


import com.example.demo.domain.user.User;
import com.example.demo.domain.user.UserRepository;
import com.example.demo.domain.user.UserRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    // CRUD
    // Create



    public void addMember(User user){
        System.out.println("가입 서비스");
        System.out.println(user.getUserId());
        System.out.println(user.getUserPassword());
        userRepository.save(user);
    }

    // Read
    @Transactional
    public List<User> getMemberAll(){
//        return  userRepository.func1("admin");
//      return userRepository.func();
//      return userRepository.findAll();
//      return userRepository.func1("user1");
//        return userRepository.func2("user1","1234");
//        return userRepository.func3("user1","1234");
//        return userRepository.getAllById("user4");
        return userRepository.getAllByUserIdAndUserPasswordOrderByUserId("user1","1234");
    }
    @Transactional
    public User getUserById(String id){
        System.out.println("서비스 토큰:"+id);
        User user = null;

        user = userRepository.findById(id).orElse(null);
//        System.out.println("user : " +  user.getUserId()); // 존재하면 객체반환

        return user;
    }

    @Transactional
    public User getCheckById(String id, String password){
        User user = null;
        System.out.println("체크 아이디:"+id);
        user = userRepository.findById(id).orElse(null);
        if(user != null && password.equals(user.getUserPassword())){
            return user;
        }
        return null;
    }
    // Update
    @Transactional
    public void updateById(User member){
        User user = getUserById(member.getUserId());

        if(user != null){
            user.setUser(member);
        }
    }
    @Transactional
    public void updateUserCredit(User member){
        User user = getUserById(member.getUserId());
        if(user != null){
            user.setUserCredit(member);
        }
    }

    // Delete
    @Transactional
    public void deleteById(User user) {
        System.out.println("service:"+ user.getUserId());
        user = userRepository.findById(user.getUserId()).orElse(null);
        if (user != null) {
            userRepository.delete(user);
        } else {

        }
    }


    @Transactional
    public boolean userUpdate(UserRequestDto userDto) {
        try {
            userRepository.updateUserInfoByUserId(userDto.getUserPassword(), userDto.getUserNickname(), userDto.getUserAge(), userDto.getUserGender(), userDto.getUserPhone(), userDto.getUserId());;
            return true;
        } catch (Exception e) {
            return false;
        }

    }

}
