
  // 각 input 유효성 검사
  const UsernameValid = () => {
    if (!username) {
      setUsernameErr("필수 입력 항목입니다.");
    } else if (username.length < 2) {
      setUsernameErr("2자 이상 닉네임을 입력해 주세요.");
    } else if (username.length > 10) {
      setUsernameErr("10자 이하 닉네임을 입력해 주세요.");
    } else {
      setUsernameErr("");
    }
  };

  // 아이디 조건(정규 표현식)
  const userIdReg = /^[A-Za-z0-9_.]{5,}$/;

  const UserIdValid = () => {
    if (!userId) {
      setUserIdErr("필수 입력 항목입니다.");
    } else if (!userIdReg.test(userId)) {
      setUserIdErr("아이디 형식이 올바르지 않습니다.");
    } else {
      setUserIdErr("");
    }
  };

  const IntroValid = () => {
    if (!intro) {
      setIntroErr("필수 입력 항목입니다.");
    } else {
      setIntroErr("");
    }
  };

  // 버튼 활성화
  const btnActive = () => {
    if (
      !usernameErr &&
      !userIdErr &&
      !introErr &&
      username &&
      userId &&
      intro
    ) {
      SetBtnState(false);
    } else {
      SetBtnState(true);
    }
  };

  // input창이 바뀔 때마다 btnActive로 확인 후 버튼 활성화
  useEffect(() => {
    btnActive();
  }, [username, userId, intro]);

  // api 호출, 성공 시 로그인 페이지로 이동
  const handleJoin = async (e) => {
    e.preventDefault();
    console.log("handleJoin");
    const JoinRes = await JoinApi(
      username,
      email,
      password,
      userId,
      intro,
      image
    );
    if (JoinRes.status !== 422) {
      console.log(JoinRes);
      const createToken = JoinRes.user.token;
      const joinData = JoinRes.user;
      setToken(createToken);
      setUser(joinData);
      navigate("/login");
    } else {
      setUserIdErr("이미 사용 중인 아이디입니다.");
      SetBtnState(true);
    }
  };