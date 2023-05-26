package com.example.demo.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.http.*;
import com.google.api.client.http.javanet.NetHttpTransport;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;


@Service
@RequiredArgsConstructor
public class FirebaseAlramService {

    private String accessToken;

    public String getAccessToken() throws IOException {
        GoogleCredential googleCredential = GoogleCredential.fromStream(new FileInputStream("/Users/mac/Desktop/demo1/src/main/resources/static/json/firebase-alram.json"))
                .createScoped(Arrays.asList("https://www.googleapis.com/auth/firebase", "https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/firebase.readonly"));

        googleCredential.refreshToken();

        this.accessToken = googleCredential.getAccessToken();

        return this.accessToken;
    }
    public String send(String body, String token) throws IOException {
        URL url = new URL("https://fcm.googleapis.com/v1/projects/injoy-7c47b/messages:send");
        HttpURLConnection http = (HttpURLConnection) url.openConnection();
        http.setRequestMethod("POST");
        http.setDoInput(true);
        http.setRequestProperty("Authorization",  "Bearer " + token);
        http.setRequestProperty("Content-Type",  "application/json; UTF-8");
        http.setDoOutput(true);

        byte[] out = body.getBytes(StandardCharsets.UTF_8);
        int length = out.length;

        http.setFixedLengthStreamingMode(length);
        http.connect();
        try(OutputStream os = http.getOutputStream()) {
            os.write(out);
            os.flush();
        }
        System.out.println(http.getResponseMessage());
        http.disconnect();
        return http.getResponseMessage();
    }

    }
