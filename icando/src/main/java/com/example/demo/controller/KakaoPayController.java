package com.example.demo.controller;

import com.example.demo.domain.kakaoPay.KakaoPay;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.Setter;
import lombok.extern.java.Log;

@Log
@Controller
public class KakaoPayController {

    @Setter(onMethod_ = @Autowired)
    private KakaoPay kakaopay;


    @GetMapping("/kakaoPay")
    public void kakaoPayGet() {

    }

    private String code;
    private String id;
    private String price;

    @PostMapping("/kakaoPay")
    public String kakaoPay(@RequestParam(name = "resCode") String resCode,
                           @RequestParam(name = "userId") String userId,
                           @RequestParam(name = "totalPrice") String totalPrice) {
        log.info("kakaoPay post............................................");
        this.code = resCode;
        this.id = userId;
        this.price = totalPrice.replaceAll(",","");

        System.out.println(code);
        System.out.println(id);
        System.out.println(price);
        System.out.println(resCode);
        System.out.println(userId);
        System.out.println(totalPrice);
        return "redirect:" + kakaopay.kakaoPayReady(resCode, userId, price);

    }

    @GetMapping("/kakaoPaySuccess")
    public void kakaoPaySuccess(@RequestParam("pg_token") String pg_token, Model model) {
        log.info("kakaoPaySuccess get............................................");
        log.info("kakaoPaySuccess pg_token : " + pg_token);
        System.out.println(pg_token);

        model.addAttribute("info", kakaopay.kakaoPayInfo(pg_token, code, id, price));
    }

}