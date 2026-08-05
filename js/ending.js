// ==========================
// 오늘 배운 핵심 정리
// ==========================

function showSummary(){

    document.getElementById("gameContainer").innerHTML = `

<div id="missionContainer">

    <div class="missionCard">

        <div class="missionNumber">

            TODAY'S CHECK

        </div>

        <h2 class="missionTitle">

            🎯 오늘 배운 직장생활 핵심 5가지

        </h2>

        <div style="
            background:#eff6ff;
            border:2px solid #bfdbfe;
            border-radius:16px;
            padding:20px;
            margin:25px 0;
            text-align:center;
        ">

            <h3 style="margin-bottom:12px;">
                📊 오늘의 결과
            </h3>

            <p style="font-size:22px;font-weight:700;">

                ⭐ 업무점수 :
                <span style="color:#2563eb;">
                    ${game.score}점
                </span>

            </p>

            <p style="margin-top:10px;">

                ❤️ 신뢰도 :
                ${game.trust}

            </p>

        </div>

        <p style="text-align:left; line-height:2.1;">

✅ <b>1. 문제는 숨기지 말고 먼저 공유하기</b><br>
→ 예상되는 문제는 사후 보고보다 사전 공유가 중요합니다.<br><br>

✅ <b>2. 업무는 우선순위를 고려하여 계획하기</b><br>
→ 긴급성과 중요도를 기준으로 업무를 처리합니다.<br><br>

✅ <b>3. 협업은 일정 조율과 함께하기</b><br>
→ 가능한 시간과 방법을 함께 제안하면 원활한 협업이 가능합니다.<br><br>

✅ <b>4. 업무보고는 핵심과 결과 중심으로 하기</b><br>
→ 무엇을 했는지와 결과를 명확하게 전달합니다.<br><br>

✅ <b>5. 퇴근 전에도 예의와 책임감 잊지 않기</b><br>
→ 작은 인사와 배려가 좋은 조직문화를 만듭니다.

        </p>

        <div style="
            background:#f8fafc;
            border-radius:14px;
            padding:18px;
            margin-top:25px;
            text-align:center;
            line-height:1.8;
        ">

            💡 <b>오늘의 한마디</b><br>

            작은 습관이 신뢰를 만들고,<br>

            신뢰가 좋은 직장인을 만듭니다.

        </div>

        <button
            class="choiceBtn"
            onclick="showEnding()">

            🏆 최종 결과 보기

        </button>

    </div>

</div>

`;

}
// ==========================
// 엔딩
// ==========================
function makeSkillStars(score){

    score = Math.max(0, Math.min(5, score));

    return "★".repeat(score) + "☆".repeat(5-score);

}
function showEnding(){

    let title="";
    let icon="";
    let message="";
    let resultColor="";
    let grade="";

    // ==========================
    // 최종 등급
    // ==========================

    if(game.score>=85){

        icon="🏆";
        title="칼퇴 성공!";
        grade="S";
        resultColor="#16a34a";

        message=
        "오늘 하루 모든 업무를 완벽하게 수행했습니다.<br>" +
        "업무능력과 협업, 소통까지 모두 인정받았습니다.<br><br>" +
        "축하합니다! 정시에 퇴근합니다. 🎉";

    }

    else if(game.score>=70){

        icon="😊";
        title="정상 퇴근";
        grade="A";
        resultColor="#2563eb";

        message=
        "오늘의 업무를 무사히 마무리했습니다.<br>" +
        "안정적으로 업무를 수행했습니다.";

    }

    else if(game.score>=55){

        icon="⏰";
        title="야근 1시간";
        grade="B";
        resultColor="#f59e0b";

        message=
        "업무는 대부분 마무리했지만<br>" +
        "조금 더 시간이 필요했습니다.";

    }

    else if(game.score>=40){

        icon="📄";
        title="야근 2시간";
        grade="C";
        resultColor="#fb923c";

        message=
        "업무 우선순위와 보고가 조금 아쉬웠습니다.<br>" +
        "조금 더 경험을 쌓아보세요.";

    }

    else{

        icon="🌙";
        title="야근 확정";
        grade="D";
        resultColor="#dc2626";

        message=
        "업무 처리와 협업에서 아쉬운 부분이 있었습니다.<br>" +
        "다음에는 더 좋은 결과에 도전해보세요!";

    }

    // ==========================
    // 역량
    // ==========================

    const skills=[

        {name:"일정관리",score:game.schedule},
        {name:"문제해결",score:game.problem},
        {name:"협업·소통",score:game.communication},
        {name:"업무보고",score:game.report},
        {name:"비즈니스매너",score:game.manner}

    ];

    const bestSkill=
    skills.reduce((a,b)=>a.score>b.score?a:b);

    const weakSkill=
    skills.reduce((a,b)=>a.score<b.score?a:b);

    // ==========================
    // 성장 포인트
    // ==========================

    let advice="";

    switch(weakSkill.name){

        case "일정관리":
            advice="업무 우선순위를 계획하는 연습을 해보세요.";
            break;

        case "문제해결":
            advice="문제가 발생하면 해결방법을 먼저 생각해보세요.";
            break;

        case "협업·소통":
            advice="동료와 진행상황을 자주 공유해보세요.";
            break;

        case "업무보고":
            advice="보고는 핵심 내용을 먼저 전달해보세요.";
            break;

        case "비즈니스매너":
            advice="인사와 기본 예절을 조금 더 신경 써보세요.";
            break;

    }

    // ==========================
    // 업무 스타일
    // ==========================

    let style="";

    switch(bestSkill.name){

        case "일정관리":
            style="📅 계획형 신입사원";
            break;

        case "문제해결":
            style="🛠 문제해결형 신입사원";
            break;

        case "협업·소통":
            style="🤝 협업형 신입사원";
            break;

        case "업무보고":
            style="📋 보고형 신입사원";
            break;

        case "비즈니스매너":
            style="💼 매너형 신입사원";
            break;

    }

    // ==========================
    // 출력
    // ==========================

    document.getElementById("gameContainer").innerHTML=`

<div class="missionCard endingCard">

<div style="font-size:70px;margin-bottom:15px;">

${icon}

</div>

<h1 style="color:${resultColor};margin-bottom:10px;">

${title}

</h1>

<h2>

🏅 최종 점수

<br>

<span style="color:${resultColor};font-size:42px;">

${game.score}점

</span>

</h2>

<div style="font-size:36px;margin:15px 0;">

${makeStars(game.score)}

</div>

<h2 style="color:${resultColor};">

${grade} 등급

</h2>

<p style="line-height:1.8;margin:25px 0;">

${message}

</p>

<div class="reportBox">

<h2>📊 역량 리포트</h2>

<div class="reportRow">

<span>일정관리</span>

<span>${makeSkillStars(game.schedule)}</span>

</div>

<div class="reportRow">

<span>문제해결</span>

<span>${makeSkillStars(game.problem)}</span>

</div>

<div class="reportRow">

<span>협업·소통</span>

<span>${makeSkillStars(game.communication)}</span>

</div>

<div class="reportRow">

<span>업무보고</span>

<span>${makeSkillStars(game.report)}</span>

</div>

<div class="reportRow">

<span>비즈니스매너</span>

<span>${makeSkillStars(game.manner)}</span>

</div>

</div>

<div class="reportBox">

<h2>🏆 BEST 역량</h2>

<p>

${bestSkill.name}

<br><br>

${makeSkillStars(bestSkill.score)}

</p>

</div>

<div class="reportBox">

<h2>📈 성장 포인트</h2>

<p>

${weakSkill.name}

<br><br>

💡 ${advice}

</p>

</div>

<div class="reportBox">

<h2>👔 당신의 업무 스타일</h2>

<p style="font-size:22px;">

${style}

</p>

</div>

<button
class="choiceBtn"
onclick="restartGame()">

🔄 다시 플레이

</button>

</div>

`;

}

// ==========================
// 다시하기
// ==========================

function restartGame(){

    location.reload();

}
