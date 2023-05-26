package com.example.demo.controller;

import com.example.demo.domain.user.User;
import com.example.demo.service.FirebaseAlramService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
@RequiredArgsConstructor
@RestController

public class FirebaseAlram {
    private final FirebaseAlramService firebaseAlramService;

    @PostMapping("/push")
    public String push (@RequestParam  String alramToken ) throws IOException {

        String accessToken = firebaseAlramService.getAccessToken();
        String body = "{\n\"message\":{\n\"token\":\"" + alramToken + "\",\"notification\":{\n\"title\":\"내가할게\",\"body\":\"의뢰상태가 변경되었습니다.\"}\n}\n}";
        firebaseAlramService.send(body, accessToken);
        System.out.println("asdasd: "+body);
        return body;
    }

    @PostMapping("/userPush")
    public String userPush (@RequestParam  String agentAlramToken) throws IOException {

        String accessToken = firebaseAlramService.getAccessToken();
        String body = "{\n\"message\":{\n\"token\":\"" + agentAlramToken + "\",\"notification\":{\n\"title\":\"내가할게\",\"body\":\"신규의뢰/의뢰승인 상태 업데이트\"}\n}\n}";
        firebaseAlramService.send(body, accessToken);
        System.out.println("asdasd: "+body);
        return body;
    }


}
