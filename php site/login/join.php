<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원 가입</title>

    <?php 
        include "../include/style.php";
    ?>
</head>
<body>
    
    <?php 
        include "../include/header.php";
    ?>
    <!-- //header -->

    <main id="contents">
        <h2 class="ir_so">컨텐츠 영역</h2>
        <section class="join-type gray">
            <div class="member-form">
                <h3>회원가입</h3>
                <ul class="list">
                    <li>회원가입은 1인당 1개의 이메일 계정을 이용할 수 있습니다.</li>
                    <li>개인정보를 수집 및 이용하며, 회원의 개인정보를 안전하게 취급하고, 교육을 목적으로 사용됩니다.</li>
                </ul>
                <h4 class="mt30 mb10">개인정보 수집 및 이용에 대한 안내</h4>
                <div class="blue mb50">
                    <ul class="list">
                        <li>목적 : 가입자 개인 식별, 가입 의사 확인, 가입자와의 원활한 의사소통, 가입자와의 교육 커뮤니테이션</li>
                        <li>항목 : 아이디(이메일주소), 비밀번호, 이름, 생년월일, 휴대폰번호</li>
                        <li>보유기간 : 회원 탈퇴 시까지 보유(탈퇴일로부터 즉시 파기합니다.)</li>
                        <li>개인정보 수집에 대한 동의를 거부할 권리가 있으며, 회원 가입시 개인정보 수집을 동의함으로 간주합니다.</li>
                    </ul>
                </div>

                <form action="joinSave.php" name="join" method="post">
                    <fieldset>
                        <legend class="ir_so">회원가입 입력폼</legend>
                        <div class="join-box">
                            <div>
                                <label for="youEmail">이메일</label>   
                                <input type="email" id="youEmail" name="youEmail" placeholder="Sample@naver.com" autocomplete="off" autofocus required>
                            </div>
                            <div>
                                <label for="youPass">비밀번호</label>   
                                <input type="password" id="youPass" name="youPass" maxlength="20" placeholder="비밀번호를 적어주세요!" autocomplete="off" required>
                            </div>
                            <div>
                                <label for="youPassC">비밀번호 확인</label>   
                                <input type="password" id="youPassC" name="youPassC" maxlength="20" placeholder="다시 비밀번호를 적어주세요!" autocomplete="off" required>
                            </div>
                            <div>
                                <label for="youName">이름</label>   
                                <input type="text" id="youName" name="youName" maxlength="5" placeholder="이름을 적어주세요!" autocomplete="off" required>
                            </div>
                            <div>
                                <label for="youBirth">생년월일</label>   
                                <input type="text" id="youBirth" name="youBirth" placeholder="YYYY-MM-DD" maxlength="12" autocomplete="off" required>
                            </div>
                            <div>
                                <label for="youPhone">휴대폰 번호</label>   
                                <input type="text" id="youPhone" name="youPhone" placeholder="000-0000-0000" maxlength="15" autocomplete="off" required>
                            </div>
                        </div>
                        <button id="joinBtn" class="join-submit" type="submit">회원가입 완료</button>
                    </fieldset>
                </form>
            </div>
        </section>
    </main>
    <!-- //main -->    

    <?php
        include "../include/footer.php";
    ?>
    <!-- //footer -->
</body>
</html>