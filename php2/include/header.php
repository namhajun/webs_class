<header id="header">
    <h1 class="logo">
        <a href="#">PHP <em>class</em></a>
    </h1>
    <nav class="menu">
        <h2 class="ir_so">메인 메뉴</h2>
        <ul>
            <li><a href="#">회원가입</a></li>
            <li><a href="#">댓글</a></li>
            <li><a href="#">게시판</a></li>
            <li><a href="#">블로그</a></li>
            <li><a href="#">관리자</a></li>
        </ul>
    </nav>
    <div class="member">
        <span class="ir_so">회정 정보 영역</span>
        <?php if(isset($_SESSION['memberID'])){ ?>
                <a href="#"><?=$_SESSION['youName']?>님 환영합니다.</a>
                <a href="../login/logout.php">로그아웃</a>    
        <?php } else { ?>
                <a href="../login/join.php">회원가입</a>    
                <a href="../login/login.php">로그인</a>
        <?php } ?>
    </div>
        
        
</header>