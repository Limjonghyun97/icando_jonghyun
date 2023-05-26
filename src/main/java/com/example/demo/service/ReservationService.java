package com.example.demo.service;

import com.example.demo.domain.reservationBoard.ReservationBoard;
import com.example.demo.domain.reservationBoard.ReservationBoardRepository;

import com.example.demo.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReservationService {
    private final ReservationBoardRepository reservationBoardRepository;
    public void addResBoard(ReservationBoard reservationBoard){
        reservationBoardRepository.save(reservationBoard);
    }

    @Transactional
    public List<ReservationBoard> getRequestByAgentId(String agentId){
        return  reservationBoardRepository.findAllByAgentId(agentId);
    }

    @Transactional
    public List<ReservationBoard> getRequestByUserId(String userId){
        return  reservationBoardRepository.findAllByUserId(userId);
    }
    @Transactional
    public List<ReservationBoard> getRequestByUserIdAndCheckComplete(String userId){
        return reservationBoardRepository.findAllByUserIdAndCheckComplete(userId, true);

    }


    //특정 에이전트에게 들어온 의뢰 리스트
    @Transactional
    public ReservationBoard getReservation(int resCode){

        ReservationBoard reservationBoard = reservationBoardRepository.findByResCode(resCode);

        return reservationBoard;
    }
    // 의뢰 수락여부
    @Transactional
    public void updateCheckApply(ReservationBoard resBoard){
        ReservationBoard reservationBoard = getReservation(resBoard.getResCode());
        if (reservationBoard != null) {
            reservationBoard.setCheckApply(true);

        }
    }

    @Transactional
    public void updateChangeAlram(ReservationBoard resBoard){
        ReservationBoard reservationBoard = getReservation(resBoard.getResCode());
        boolean changAlramValue =  reservationBoard.getChangeAlram();
        if (reservationBoard != null) {
            if(!changAlramValue){
                reservationBoard.setChangeAlram(true);
            }

        }
    }

    @Transactional
    public void updateChangeAlram2(ReservationBoard resBoard){
        ReservationBoard reservationBoard = getReservation(resBoard.getResCode());
        boolean changAlramValue =  reservationBoard.getChangeAlram();
        if (reservationBoard != null) {
            if(changAlramValue){
                reservationBoard.setChangeAlram(false);
            }

        }
    }

    @Transactional
    public void updateChangeAlram3(ReservationBoard resBoard){
        ReservationBoard reservationBoard = getReservation(resBoard.getResCode());
        boolean newRequestAlram =  reservationBoard.getNewRequestAlram();
        if (reservationBoard != null) {
            if(newRequestAlram){
                reservationBoard.setNewRequestAlram(false);
            }

        }
    }
    // 작업완료여부
    @Transactional
    public void updateCheckSuccess(ReservationBoard resBoard){
        ReservationBoard reservationBoard = getReservation(resBoard.getResCode());
        if (reservationBoard != null) {
            reservationBoard.setCheckSuccess(true);

        }
    }

    // 사용자 확인 완료여부
    @Transactional
    public void updateCheckComplete(ReservationBoard resBoard){
        ReservationBoard reservationBoard = getReservation(resBoard.getResCode());

        if (reservationBoard != null) {
            reservationBoard.setCheckComplete(true);
            reservationBoard.setStarPoint(resBoard.getStarPoint());

        }
    }
}
