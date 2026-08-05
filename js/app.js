// ==========================
// MISSION : 칼퇴 대작전 Ver2
// app.js
// Part 1
// ==========================

// ==========================
// 플레이어 정보
// ==========================

let playerName = "";
let gender = "";
let isReady = false;
// ==========================
// 게임 시작 가능 여부
// ==========================

function checkStartReady(){

   const name = document
    .getElementById("playerName")
    .value
    .trim();

playerName = name;

document
    .getElementById("startButton")
    .disabled = !(name && gender && isReady);
}
// ==========================
// 게임 데이터
// ==========================

const game = {

    score: 0,

    trust: 100,

    progress: 0,

    time: "09:00",

    schedule: 0,
    problem: 0,
    communication: 0,
    report: 0,
    manner: 0

};

// ==========================
// 별 생성
// ==========================

function makeStars(score){

    let star = 1;

    if(score >= 85){
        star = 5;
    }
    else if(score >= 70){
        star = 4;
    }
    else if(score >= 55){
        star = 3;
    }
    else if(score >= 40){
        star = 2;
    }

    return `
<span style="color:#facc15;">
${"★".repeat(star)}
</span><span style="color:#d1d5db;">
${"☆".repeat(5-star)}
</span>
`;

}

// ==========================
// HUD
// ==========================

function updateHUD(){

    document.getElementById("gameTime").textContent = game.time;

    document.getElementById("score").textContent = game.score;

    document.getElementById("trust").textContent = game.trust;

    document.getElementById("progress").textContent = game.progress;

}

// ==========================
// 성별 선택
// ==========================

document.querySelectorAll(".genderBtn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        document.querySelectorAll(".genderBtn").forEach(b=>{

            b.classList.remove("active");

        });

        btn.classList.add("active");

        gender = btn.dataset.gender;
checkStartReady();
    });

});
document
.getElementById("playerName")
.addEventListener("input",checkStartReady);
// ==========================
// 출근 준비
// ==========================

document
.getElementById("idCardButton")
.addEventListener("click",()=>{

    isReady = !isReady;

    const btn =
    document.getElementById("idCardButton");

   btn.innerHTML =

isReady
?
"✅ 출근 준비 완료"
:
"☐ 출근 준비 완료";

btn.classList.toggle(
"complete",
isReady
);

checkStartReady();

});

// ==========================
// 게임 시작
// ==========================

document
.getElementById("startButton")
.addEventListener("click",()=>{

    playerName =
    document
    .getElementById("playerName")
    .value
    .trim();

    if(playerName===""){

        alert("이름을 입력해주세요.");

        return;

    }

    if(gender===""){

        alert("성별을 선택해주세요.");

        return;

    }

    if(!isReady){

        alert("출근 준비를 완료해주세요.");

        return;

    }

    document
    .getElementById("cardName")
    .textContent = playerName;

    document
    .getElementById("idCardModal")
    .classList.remove("hidden");

    setTimeout(()=>{

        document
        .getElementById("idCardModal")
        .classList.add("hidden");

        startGame();

    },1500);

});

// ==========================
// 게임 시작
// ==========================

function startGame(){

   document
.getElementById("startScreen")
.classList.add("hidden");
    
    document
    .getElementById("hud")
    .classList.remove("hidden");

    updateHUD();

    showCountdown();

}

// ==========================
// app.js
// Part 2
// ==========================

// ==========================
// 카운트다운
// ==========================

function showCountdown(){

    document.body.insertAdjacentHTML("beforeend",`

<div id="countdownScreen">

    <div class="countBox">

        <div class="missionLabel">

            🎮 LEVEL 1

        </div>

        <h1>

            칼퇴 대작전

        </h1>

        <p>

            오늘은 입사 첫날입니다.

        </p>

        <div id="countNumber">

            3

        </div>

    </div>

</div>

`);

    let count = 3;

    const timer = setInterval(()=>{

        count--;

        if(count>0){

            document.getElementById("countNumber").textContent = count;

        }

        else if(count===0){

            document.getElementById("countNumber").textContent = "START";

        }

        else{

            clearInterval(timer);

            document.getElementById("countdownScreen").remove();

            showMission1Brief();

        }

    },1000);

}

// ==========================
// 결과창
// ==========================

function showResult(icon,title,text){

    document.getElementById("resultIcon").textContent = icon;

    document.getElementById("resultTitle").textContent = title;

    document.getElementById("resultText").innerHTML = text;
    

    document.getElementById("resultModal").classList.remove("hidden");

}

// ==========================
// 결과창 닫기
// ==========================

function closeResult(){

    document
        .getElementById("resultModal")
        .classList.add("hidden");

    const stars =
        document.getElementById("resultStars");

    if(stars){

        stars.classList.add("hidden");

    }

}
// ==========================
// 현재 미션
// ==========================

let currentMission = 1;

// ==========================
// 다음 미션
// ==========================

document
.getElementById("nextMissionButton")
.addEventListener("click",()=>{

    closeResult();

    currentMission++;

    switch(currentMission){

       case 2:

    showMission2Brief();

            break;

       case 3:

    showMission3Brief();

              break;

             case 4:

            showMission4Brief();

            break;

        case 5:

            showMission5Brief();

            break;

        case 6:

            showMission6Brief();

            break;

        case 7:

            showMission7Brief();

            break;

        case 8:

            showMission8Brief();

            break;

        case 9:

            showMission9Brief();

            break;

        case 10:

            showMission10Brief();

            break;

        case 11:

            showMission11Brief();

            break;

    }

});

// ==========================
// 게임 초기화
// ==========================

function resetGame(){

    game.score = 0;

    game.trust = 100;

    game.progress = 0;

    game.time = "09:00";

    game.schedule = 0;

    game.problem = 0;

    game.communication = 0;

    game.report = 0;

    game.manner = 0;

    currentMission = 1;

    updateHUD();

}
// ==========================
// app.js
// Part 3
// 공통 함수
// ==========================

// ==========================
// 점수 증가
// ==========================

function addScore(point){

    game.score += point;

    if(game.score < 0){

        game.score = 0;

    }

    if(game.score > 100){

        game.score = 100;

    }

    updateHUD();

}

// ==========================
// 신뢰도 증가
// ==========================

function addTrust(point){

    game.trust += point;

    if(game.trust < 0){

        game.trust = 0;

    }

    if(game.trust > 100){

        game.trust = 100;

    }

    updateHUD();

}

// ==========================
// 진행률 증가
// ==========================

function addProgress(point){

    game.progress += point;

    if(game.progress > 100){

        game.progress = 100;

    }

    updateHUD();

}

// ==========================
// 시간 변경
// ==========================

function setGameTime(time){

    game.time = time;

    updateHUD();

}

// ==========================
// 역량 증가
// ==========================

function addSkill(skill, point){

    if(game[skill] !== undefined){

        game[skill] += point;

        if(game[skill] > 5){

            game[skill] = 5;

        }

    }

}

// ==========================
// 미션 종료 공통
// ==========================

function finishMission({

    score = 0,

    trust = 0,

    progress = 10,

    time = "",

    skill = null,

    skillPoint = 0,

    icon,

    title,

    message

}){

    addScore(score);

    addTrust(trust);

    addProgress(progress);

    if(time){

        setGameTime(time);

    }

    if(skill){

        addSkill(skill, skillPoint);

    }

    showResult(

        icon,

        title,

        message

    );

}

// ==========================
// 카드 삭제
// ==========================

function removeMission(){

    const card = document.getElementById("missionContainer");

    if(card){

        card.remove();

    }

}

// ==========================
// 미션 제목
// ==========================

function missionTitle(no,title){

    return `

<div class="missionLabel">

🎯 MISSION ${no}

</div>

<h2>

${title}

</h2>

`;

}

// ==========================
// 엔터 방지
// ==========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        e.preventDefault();

    }

});

// ==========================
// 최초 HUD
// ==========================

function resetStartScreen(){

    document.getElementById("startButton").disabled = true;

    document.getElementById("playerName").value = "";

    gender = "";

    isReady = false;

    document
        .querySelectorAll(".genderBtn")
        .forEach(btn=>btn.classList.remove("active"));

    const readyBtn=document.getElementById("idCardButton");

    readyBtn.innerHTML="☐ 출근 준비 완료";

    readyBtn.classList.remove("complete");

}
// ==========================
// Firebase 저장
// ==========================

async function saveGameResult(){

    try{

       await addDoc(

    collection(db,"players"),

    {

        name: playerName,
        gender: gender,

        score: game.score,
        trust: game.trust,
        progress: game.progress,
        playTime: game.time,

        schedule: game.schedule,
        problem: game.problem,
        communication: game.communication,
        report: game.report,
        manner: game.manner,

        createdAt: serverTimestamp()

    }

);
