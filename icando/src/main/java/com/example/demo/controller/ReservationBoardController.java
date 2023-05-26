package com.example.demo.controller;

import com.example.demo.domain.reservationBoard.ReservationBoard;
import com.example.demo.domain.reservationBoard.ReservationBoardDto;
import com.example.demo.domain.reviewBoard.ReviewBoard;
import com.example.demo.domain.reviewBoard.ReviewBoardDto;
import com.example.demo.domain.user.User;
import com.example.demo.domain.user.UserRequestDto;
import com.example.demo.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class ReservationBoardController {
    private final ReservationService reservationService;

    @PostMapping("writeResBoard")
    public ReservationBoard writeResBoard(@RequestBody ReservationBoardDto reservationBoardDto){

        ReservationBoard reservationBoard = new ReservationBoard(reservationBoardDto);
        reservationService.addResBoard(reservationBoard);
        return reservationBoard;
    }

    //에이전트 내역
    @GetMapping("reservationByAgentId")
    public List<ReservationBoard> getRequestByAgentId(@RequestParam String agentId){
        System.out.println("agentId:"+agentId);
        List<ReservationBoard> list = reservationService.getRequestByAgentId(agentId);
        return list;
    }
    // 사용자 내역
    @GetMapping("reservationByUserId")
    public List<ReservationBoard> reservationByUserId(@RequestParam String userId){
        System.out.println("agentId:"+userId);
        List<ReservationBoard> list = reservationService.getRequestByUserId(userId);
        return list;
    }

    @GetMapping("reservationByUserIdAndCheckComplete")
    public List<ReservationBoard> reservationByUserIdAndCheckComplete(@RequestParam String userId){
        List<ReservationBoard> list = reservationService.getRequestByUserIdAndCheckComplete(userId);
        System.out.println("완료의뢰목록:"+userId);
        return list;
    }
    @GetMapping("yesRequestByResCode")
    public ReservationBoard getReviewByCode(@RequestParam int resCode){

        ReservationBoard reservationBoard = reservationService.getReservation(resCode);

        return reservationBoard;
    }

    //에이전트 수락여부
    @PostMapping("/updateCheckApply")
    public ReservationBoard updateCheckApply(@RequestBody ReservationBoardDto reservationBoardDto) {
        ReservationBoard reservationBoard = new ReservationBoard(reservationBoardDto);
        reservationService.updateCheckApply(reservationBoard);
        return reservationBoard;
    }

    //에이전트가 보내는 알림
    @PostMapping("/updateChangeAlram")
    public ReservationBoard updateChangeAlram(@RequestBody ReservationBoardDto reservationBoardDto) {
        ReservationBoard reservationBoard = new ReservationBoard(reservationBoardDto);
        reservationService.updateChangeAlram(reservationBoard);
        return reservationBoard;
    }

    // 사용자가 알림확인하면 상태변화
    @PostMapping("/updateChangeAlram2")
    public ReservationBoard updateChangeAlram2(@RequestBody ReservationBoardDto reservationBoardDto) {
        ReservationBoard reservationBoard = new ReservationBoard(reservationBoardDto);
        reservationService.updateChangeAlram2(reservationBoard);
        return reservationBoard;
    }
    @PostMapping("/updateChangeAlram3")
    public ReservationBoard updateChangeAlram3(@RequestBody ReservationBoardDto reservationBoardDto) {
        ReservationBoard reservationBoard = new ReservationBoard(reservationBoardDto);
        reservationService.updateChangeAlram3(reservationBoard);
        return reservationBoard;
    }


    //에이전트 작업 완료여부(이것에 따라 요청자페이지의 요청목록에 완료버튼 생성)
    @PostMapping("/updateCheckSuccess")
    public ReservationBoard updateCheckSuccess(@RequestBody ReservationBoardDto reservationBoardDto) {
        ReservationBoard reservationBoard = new ReservationBoard(reservationBoardDto);
        reservationService.updateCheckSuccess(reservationBoard);
        return reservationBoard;
    }
    //사용자 작업확인 완료
    @PostMapping("/updateCheckComplete")
    public ReservationBoard updateCheckComplete(@RequestBody ReservationBoardDto reservationBoardDto) {
        ReservationBoard reservationBoard = new ReservationBoard(reservationBoardDto);
        reservationService.updateCheckComplete(reservationBoard);
        return reservationBoard;
    }

    @GetMapping("requestByResCode")
    public ReservationBoard requestByResCode(@RequestParam int resCode){

        ReservationBoard reservationBoard = reservationService.getReservation(resCode);

        return reservationBoard;
    }

    @GetMapping("/changeAlram")
    public int getResBoardByUserId(@RequestParam String userId) {

        List<ReservationBoard> list = reservationService.getRequestByUserId(userId);
        int alramCnt = 0;
        for(ReservationBoard resBoard : list){
            if(resBoard.getChangeAlram() == true) {
                alramCnt++;
            }
        }
        return alramCnt;
    }


}
