package com.example.demo.controller;

import com.example.demo.domain.user.User;
import com.example.demo.domain.user.UserRepository;
import com.example.demo.domain.user.UserRequestDto;
import com.example.demo.service.UserService;
import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.messaging.FirebaseMessaging;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.util.List;


@RequiredArgsConstructor
@RestController

public class UserController {
    @Autowired
    private UserRepository userRepository;
    private final UserService userService;


    //    3. Request body (json)
    @PostMapping("join")
    public Boolean join(@RequestBody UserRequestDto userDto){
        System.out.println("userId: "+ userDto.getUserId());
        System.out.println("pass: "+ userDto.getUserPassword());

        User check = userService.getUserById(userDto.getUserId());

        if(check == null) {
            System.out.println("가입 컨트롤러");
            User user = new User(userDto);
            userService.addMember(user);
            return true;
        }
        return false;
    }

    @PostMapping("login")
    public User checkById(HttpServletRequest request, @RequestBody UserRequestDto userRequestDto){
        User user = new User(userRequestDto);
        user =  userService.getCheckById(user.getUserId(), user.getUserPassword());
        if(user != null){
            HttpSession session = request.getSession();
            session.setAttribute("log",user);
            session.setAttribute("category", "user");
            System.out.println("session:"+session.getAttribute("category"));

            // Firebase Cloud Messaging 토큰 업데이트
            String token = user.getAlramToken();
            System.out.println("보낸토큰:"+userRequestDto.getAlramToken());
            if (token == null || !token.equals(request.getParameter("token"))) {
                user.setAlramToken(userRequestDto.getAlramToken());
                userService.updateById(user);
            }

            return user;
        }

        return null;
    }

    //로그인 세션 날리기
    @PostMapping("/logout")
    public boolean logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        System.out.println("session: "+session);
        if (session != null) {
            session.invalidate(); // 세션 무효화
            return true;
        }
        return false;
    }

    @PostMapping("/mypageLoginCheck")
    public boolean mypageLoginCheck(HttpServletRequest request) {
        HttpSession session = request.getSession();
        if (session.getAttribute("category") != null) {
            return true;
        }
        return false;
    }

    @GetMapping("/v1/search/member")
    public List<User> getUserAll(){
        List<User> list = userService.getMemberAll();
        return list;
    }
    @PutMapping("update")
    public void updateUserById(@RequestBody UserRequestDto userDto){
        User user = new User(userDto);

        userService.updateById(user);

    }
    @GetMapping("userCreditById")
    public int getUserCreditById(@RequestParam String userId){

        User user = userService.getUserById(userId);
        int userCredit = user.getUserCredit();
        return userCredit;
    }

    @GetMapping("userTokenById")
    public String getUserTokenById(@RequestParam String userId){
        User user = userService.getUserById(userId);
        String alramToken = user.getAlramToken();
        System.out.println("alramToken 컨트롤러:"+alramToken);
        return alramToken;
    }
    @PostMapping("/userCreditUpdate")
    public User updateUserCredit(@RequestBody UserRequestDto userRequestDto) {
        User user = new User(userRequestDto);
        userService.updateUserCredit(user);
        return user;
    }
    @DeleteMapping("/userIdDelete")

    public void deleteUser(@RequestParam String userId, HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        User user = userService.getUserById(userId);
        System.out.println("con:"+userId);
        userService.deleteById(user);
        if (session != null) {
            session.invalidate(); // 세션 무효화
        }
    }

    @PostMapping("userUpdatePage")
    public boolean userUpdatePage(HttpServletRequest request, @RequestBody UserRequestDto userDto){
        HttpSession session = request.getSession();
        boolean result = userService.userUpdate(userDto);

        if(result) {
            User user = new User(userDto);
            session.setAttribute("log", user);
        }
        return  result;
    }

}