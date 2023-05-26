package com.example.demo.domain.reservationBoard;

import com.example.demo.domain.reviewBoard.ReviewBoard;
import com.example.demo.domain.reviewComment.ReviewComment;
import com.example.demo.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationBoardRepository extends JpaRepository<ReservationBoard, String> {
    List<ReservationBoard> findAllByAgentId(String id);
    List<ReservationBoard> findAllByUserId(String id);
    List<ReservationBoard> findAllByUserIdAndCheckComplete(String id, Boolean checkComplete);
    ReservationBoard findByResCode(int resCode);

}
