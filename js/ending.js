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

            🎉 첫 출근을 성공적으로 마쳤습니다!
<br><br>
오늘의 성장 포인트

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

🎉 ${playerName}님의 오늘 결과

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

        <p style="text-align:left; line-height:2.2;">

✅ <b>1. 업무는 우선순위를 고려하여 계획하기</b><br>
→ 긴급성과 중요도를 기준으로 중요한 업무부터 처리합니다.<br><br>

✅ <b>2. 문제와 실수는 숨기지 말고 빠르게 공유하기</b><br>
→ 문제를 발견하면 즉시 보고하고 신속하게 해결하는 것이 중요합니다.<br><br>

✅ <b>3. 이메일과 전화는 회사의 얼굴입니다.</b><br>
→ 정중한 표현과 정확한 전달은 신뢰를 만드는 첫걸음입니다.<br><br>

✅ <b>4. 협업은 소통과 배려에서 시작됩니다.</b><br>
→ 자신의 일정도 공유하며 함께 해결 방법을 찾는 자세가 필요합니다.<br><br>

✅ <b>5. 좋은 직장인은 마지막까지 책임감을 보여줍니다.</b><br>
→ 퇴근 전 업무를 점검하고 예의 있게 마무리하는 습관이 좋은 인상을 만듭니다.

        </p>

       <div style="
background:#f8fafc;
border-radius:14px;
padding:18px;
margin-top:25px;
text-align:center;
line-height:2.0;
">

👏 <b>${playerName}님, 오늘 하루 수고 많으셨습니다.</b><br><br>

오늘 경험한 작은 선택들이
좋은 직장인의 첫걸음이 됩니다.

</div>

        <button
            class="choiceBtn"
            onclick="showEnding()">

         🏆 최종 업무 평가 보기

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

    saveGameResult(); 

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
    grade="S · 에이스 신입";
        resultColor="#16a34a";

        message=
        "오늘 하루 모든 업무를 완벽하게 수행했습니다.<br>" +
        "업무능력과 협업, 소통까지 모두 인정받았습니다.<br><br>" +
        "축하합니다! 정시에 퇴근합니다. 🎉";

    }

    else if(game.score>=70){

        icon="😊";
       title="정상 퇴근";
       grade="A · 믿음직한 신입";
        resultColor="#2563eb";

        message=
        "오늘의 업무를 무사히 마무리했습니다.<br>" +
        "안정적으로 업무를 수행했습니다.";

    }

    else if(game.score>=55){

        icon="⏰";
        title="야근 1시간";
        grade="B · 성장하는 신입";
        resultColor="#f59e0b";

        message=
        "업무는 대부분 마무리했지만<br>" +
        "조금 더 시간이 필요했습니다.";

    }

    else if(game.score>=40){

        icon="📄";
        title="야근 2시간";
        grade="C · 경험이 필요한 신입";
        resultColor="#fb923c";

        message=
        "업무 우선순위와 보고가 조금 아쉬웠습니다.<br>" +
        "조금 더 경험을 쌓아보세요.";

    }

    else{

        icon="🌙";
       title="야근 확정";
       grade="D · 다시 도전!";
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
let badge="";

switch(bestSkill.name){

   case "일정관리":
    badge="📅 일정 마스터";
    break;

case "문제해결":
    badge="🛠 해결사";
    break;

case "협업·소통":
    badge="🤝 협업왕";
    break;

case "업무보고":
    badge="📋 보고왕";
    break;

case "비즈니스매너":
    badge="💼 매너왕";
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

<div class="reportBox reportCenter">

<h2>🏆 BEST 역량</h2>

<p style="font-size:24px;font-weight:700;">

🥇 ${bestSkill.name}


</p>

<p style="font-size:20px;margin:12px 0;">

${makeSkillStars(bestSkill.score)}

</p>

<div style="
background:#eff6ff;
border:2px solid #bfdbfe;
border-radius:12px;
padding:14px;
margin-top:15px;
font-size:18px;
font-weight:700;
color:#2563eb;
">

🏅 ${badge}

</div>

</div>

<div class="reportBox reportCenter">

<h2>📈 성장 포인트</h2>

<p>

${weakSkill.name}

<br><br>

💡 ${advice}

</p>

</div>

<div class="reportBox reportCenter">

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
