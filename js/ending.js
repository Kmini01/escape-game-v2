// ==========================
// ending.js
// Part 1
// ==========================

// ==========================
// 엔딩
// ==========================

function showEnding(){

    let title="";
    let icon="";
    let message="";
    let resultColor="";

    // --------------------------
    // 점수 기준
    // --------------------------

    if(game.score>=95){

        icon="🏆";

        title="칼퇴 성공!";

        resultColor="#16a34a";

        message=

        "오늘 하루 모든 업무를 완벽하게 수행했습니다.<br>" +

        "업무능력과 협업, 소통까지 모두 인정받았습니다.<br><br>" +

        "축하합니다! 정시에 퇴근합니다. 🎉";

    }

    else if(game.score>=80){

        icon="😊";

        title="정상 퇴근";

        resultColor="#2563eb";

        message=

        "오늘의 업무를 무사히 마무리했습니다.<br>" +

        "조금 더 경험을 쌓으면 최고의 신입사원이 될 수 있습니다.";

    }

    else if(game.score>=60){

        icon="⏰";

        title="야근 1시간";

        resultColor="#f59e0b";

        message=

        "업무는 거의 마무리되었지만<br>" +

        "남은 업무를 정리하기 위해<br>" +

        "1시간 더 근무합니다.";

    }

    else{

        icon="🌙";

        title="야근 확정";

        resultColor="#dc2626";

        message=

        "업무 처리와 협업에서 아쉬운 부분이 있었습니다.<br>" +

        "다음에는 더 좋은 결과에 도전해보세요!";

    }

    // --------------------------
    // 역량
    // --------------------------

    const skills=[

        {

            name:"일정관리",

            score:game.schedule

        },

        {

            name:"문제해결",

            score:game.problem

        },

        {

            name:"협업·소통",

            score:game.communication

        },

        {

            name:"업무보고",

            score:game.report

        },

        {

            name:"비즈니스매너",

            score:game.manner

        }

    ];

    const bestSkill=

    skills.reduce((a,b)=>a.score>b.score?a:b);

    const weakSkill=

    skills.reduce((a,b)=>a.score<b.score?a:b);

    // --------------------------
    // 성장 포인트
    // --------------------------

    let advice="";

    switch(weakSkill.name){

        case "일정관리":

            advice="업무 우선순위를 계획하는 연습을 해보세요.";

            break;

        case "문제해결":

            advice="문제가 발생하면 다양한 해결방법을 먼저 찾아보세요.";

            break;

        case "협업·소통":

            advice="동료와 먼저 소통하고 진행상황을 공유해보세요.";

            break;

        case "업무보고":

            advice="업무 결과를 조금 더 구체적으로 보고해보세요.";

            break;

        case "비즈니스매너":

            advice="인사와 기본 예절을 조금 더 신경 써보세요.";

            break;

    }

    // --------------------------
    // 업무 스타일
    // --------------------------

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

    // --------------------------
    // 성과 리포트
    // --------------------------

    const report=`

<div class="reportBox">

<h2>

📊 오늘의 성과 리포트

</h2>

<div class="reportRow">

<span>일정관리</span>

<span>${makeStars(game.schedule)}</span>

</div>

<div class="reportRow">

<span>문제해결</span>

<span>${makeStars(game.problem)}</span>

</div>

<div class="reportRow">

<span>협업·소통</span>

<span>${makeStars(game.communication)}</span>

</div>

<div class="reportRow">

<span>업무보고</span>

<span>${makeStars(game.report)}</span>

</div>

<div class="reportRow">

<span>비즈니스매너</span>

<span>${makeStars(game.manner)}</span>

</div>

</div>

`;

    // ==========================
    // 엔딩 화면 출력
    // ==========================

    document.getElementById("gameContainer").innerHTML = `

<div class="missionCard endingCard">

<div style="font-size:70px;margin-bottom:15px;">

${icon}

</div>

<h1 style="color:${resultColor};margin-bottom:10px;">

${title}

</h1>

<h2 style="margin-bottom:20px;">

🏅 최종 점수

<br>

${game.score} / 100점

</h2>

<p style="line-height:1.8;">

${message}

</p>

${report}

<div class="reportBox">

<h2>

🏆 BEST 역량

</h2>

<p>

${bestSkill.name}

<br>

${makeStars(bestSkill.score)}

</p>

</div>

<div class="reportBox">

<h2>

📈 성장 포인트

</h2>

<p>

${weakSkill.name}

<br><br>

💡 ${advice}

</p>

</div>

<div class="reportBox">

<h2>

👔 당신의 업무 스타일

</h2>

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
