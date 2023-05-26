package com.example.demo.util;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass // 부모를 상속받는 엔티티(자식) 클래스가 부모 멤버를 컬럼 값으로 가져가도록 강제하기
@EntityListeners(AuditingEntityListener.class) // 감시체계
public class ColumnTimestamp {
    @CreatedDate
    private LocalDateTime regDate;
    @LastModifiedDate
    private LocalDateTime updateDate;

}
