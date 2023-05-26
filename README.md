# icando_jonghyun

대학교 재직중에 편리하게 사용했던 경험이 존재하여 직접 개발을 해보고 싶었습니다.

총 4명의 팀원으로 구성되어 진행되었고
제 역할은 관리자 페이지에서 유저 수정, 조회, 학부, 학과 추가를 담당했습니다.

학사관리시스템이란 교수, 학생, 관리자에 따라 페이지를 구분해놨고 
교수는 학생 성적 처리, 수업 추가 및 수업계획서를 작성하며 
학생들은 예비 수강신청, 수강 철회, 장바구니, 성적 확인을 할 수 있습니다. 
교수와 학생 외로는 관리자가 존재합니다. 

관리자는 교수, 학생 모두의 정보 조회 및 수정이 가능하며 
교수, 학생, 학부, 학과를 생성, 삭제할 수 있는 권한을 가지고 있습니다.
(교수, 학생들은 회원가입이 불가하며 모든 추가기능은 관리자가 가능합니다.)

관리자가 아닌 회원들은 정보조회 및 수정을할 수 있지만 
비밀번호, 회원 정보(이름, 성별, 이메일, 전화번호 등)만 수정이 가능합니다. 
앞서 설명했던 권한적인 부분은 로그인시에 해당 회원의 권한을 체크하여 권한에 맞는 페이지가 보이도록 설계했습니다.

도메인 - http://www.intranet-service.store/ (AWS 서버)

교수 

ㄴ id : 1

ㄴ password : 1

학생

ㄴ id : 21

ㄴ password : password1

관리자 

ㄴ id : 9999

ㄴ password : admin

![스크린샷 2023-05-25 132027](https://github.com/Limjonghyun97/intranet_jonghyun/assets/111953889/68065bdb-6ff3-46f2-b1d3-5bfcc329622a)
- 유저 추가

![스크린샷 2023-05-25 132110](https://github.com/Limjonghyun97/intranet_jonghyun/assets/111953889/0c97c939-551a-4dbc-af76-e24b40b66146)
![스크린샷 2023-05-25 132127](https://github.com/Limjonghyun97/intranet_jonghyun/assets/111953889/d9792a69-0d34-4d6d-a31f-f0b9ff1e5315)
![스크린샷 2023-05-25 132134](https://github.com/Limjonghyun97/intranet_jonghyun/assets/111953889/f1fea960-76d5-41d6-aafd-c4146fd1102b)
- 유저 수정(아이디 입력시 유저 정보가 출력됨)

![스크린샷 2023-05-25 132253](https://github.com/Limjonghyun97/intranet_jonghyun/assets/111953889/f58dae21-082f-45ea-ad20-a64a03df6f35)
- 학부 추가

![스크린샷 2023-05-25 132304](https://github.com/Limjonghyun97/intranet_jonghyun/assets/111953889/8c58edfc-9981-4ec4-a328-845081702358)
- 학과 추가(학부를 선택해야 추가 가능)
