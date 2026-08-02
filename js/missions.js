// ==========================
// Mission 1
// 출근부터 위기!
// ==========================

function showMission1(){

    document.getElementById("gameContainer").innerHTML = `

<div id="missionContainer">

    <div class="missionCard">

        ${missionTitle(1,"출근부터 위기!")}

        <p>

            🌧️ 아침부터 폭우가 내려
            지하철이 20분 연착되었습니다.<br><br>

            현재 출근시간까지
            10분 남았습니다.<br><br>

            가장 적절한 행동은 무엇일까요?

        </p>

        <button
            class="choiceBtn"
            onclick="selectMission1(1)">

            📞 팀장님께 먼저 연락하여
            상황을 공유한다.

        </button>

        <button
            class="choiceBtn"
            onclick="selectMission1(2)">

            🚇 지하철을 계속 기다린다.

        </button>

        <button
            class="choiceBtn"
            onclick="selectMission1(3)">

            🚖 택시를 타고 출근한다.

        </button>

        <button
            class="choiceBtn"
            onclick="selectMission1(4)">

            😴 아무 연락도 하지 않는다.

        </button>

    </div>

</div>

`;

}

// ==========================
// Mission1 선택
// ==========================

function selectMission1(answer){

    removeMission();

    switch(answer){

        case 1:

            finishMission({

                score:10,

                trust:5,

                progress:10,

                time:"09:20",

                skill:"communication",

                skillPoint:2,

                icon:"✅",

                title:"좋은 선택!",

                message:

                "팀장에게 먼저 연락하여<br>" +

                "상황을 공유했습니다.<br><br>" +

                "⭐ 업무점수 +10<br>" +

                "❤️ 신뢰도 +5"

            });

            break;

        case 2:

            finishMission({

                score:5,

                progress:10,

                time:"09:20",

                skill:"communication",

                skillPoint:1,

                icon:"🙂",

                title:"무난한 선택",

                message:

                "기다리는 것도 가능하지만<br>" +

                "먼저 연락했다면 더욱 좋았습니다.<br><br>" +

                "⭐ 업무점수 +5"

            });

            break;

        case 3:

            finishMission({

                score:7,

                progress:10,

                time:"09:10",

                skill:"problem",

                skillPoint:1,

                icon:"🚖",

                title:"빠른 판단",

                message:

                "시간은 지켰지만<br>" +

                "먼저 연락하는 것이 더 좋았습니다.<br><br>" +

                "⭐ 업무점수 +7"

            });

            break;

        case 4:

            finishMission({

                score:-5,

                trust:-10,

                progress:10,

                time:"09:30",

                icon:"❌",

                title:"아쉬운 선택",

                message:

                "연락 없이 지각하여<br>" +

                "신뢰도가 감소했습니다.<br><br>" +

                "⭐ 업무점수 -5<br>" +

                "❤️ 신뢰도 -10"

            });

            break;

    }

}
// ==========================
// Mission 1
// 출근부터 위기!
// ==========================

function showMission1(){

    document.getElementById("gameContainer").innerHTML = `

<div id="missionContainer">

    <div class="missionCard">

        ${missionTitle(1,"출근부터 위기!")}

        <p>

            🌧️ 아침부터 폭우가 내려
            지하철이 20분 연착되었습니다.<br><br>

            현재 출근시간까지
            10분 남았습니다.<br><br>

            가장 적절한 행동은 무엇일까요?

        </p>

        <button
            class="choiceBtn"
            onclick="selectMission1(1)">

            📞 팀장님께 먼저 연락하여
            상황을 공유한다.

        </button>

        <button
            class="choiceBtn"
            onclick="selectMission1(2)">

            🚇 지하철을 계속 기다린다.

        </button>

        <button
            class="choiceBtn"
            onclick="selectMission1(3)">

            🚖 택시를 타고 출근한다.

        </button>

        <button
            class="choiceBtn"
            onclick="selectMission1(4)">

            😴 아무 연락도 하지 않는다.

        </button>

    </div>

</div>

`;

}

// ==========================
// Mission1 선택
// ==========================

function selectMission1(answer){

    removeMission();

    switch(answer){

        case 1:

            finishMission({

                score:10,

                trust:5,

                progress:10,

                time:"09:20",

                skill:"communication",

                skillPoint:2,

                icon:"✅",

                title:"좋은 선택!",

                message:

                "팀장에게 먼저 연락하여<br>" +

                "상황을 공유했습니다.<br><br>" +

                "⭐ 업무점수 +10<br>" +

                "❤️ 신뢰도 +5"

            });

            break;

        case 2:

            finishMission({

                score:5,

                progress:10,

                time:"09:20",

                skill:"communication",

                skillPoint:1,

                icon:"🙂",

                title:"무난한 선택",

                message:

                "기다리는 것도 가능하지만<br>" +

                "먼저 연락했다면 더욱 좋았습니다.<br><br>" +

                "⭐ 업무점수 +5"

            });

            break;

        case 3:

            finishMission({

                score:7,

                progress:10,

                time:"09:10",

                skill:"problem",

                skillPoint:1,

                icon:"🚖",

                title:"빠른 판단",

                message:

                "시간은 지켰지만<br>" +

                "먼저 연락하는 것이 더 좋았습니다.<br><br>" +

                "⭐ 업무점수 +7"

            });

            break;

        case 4:

            finishMission({

                score:-5,

                trust:-10,

                progress:10,

                time:"09:30",

                icon:"❌",

                title:"아쉬운 선택",

                message:

                "연락 없이 지각하여<br>" +

                "신뢰도가 감소했습니다.<br><br>" +

                "⭐ 업무점수 -5<br>" +

                "❤️ 신뢰도 -10"

            });

            break;

    }

}
// ==========================
// Mission 2 채점
// ==========================

function checkMission2(){

    const email =
    document.getElementById("orderEmail").value;

    const print =
    document.getElementById("orderPrint").value;

    const call =
    document.getElementById("orderCall").value;

    const report =
    document.getElementById("orderReport").value;

    // --------------------------
    // 모두 선택했는지 확인
    // --------------------------

    if(
        email==="" ||
        print==="" ||
        call==="" ||
        report===""){

        alert("모든 업무의 순서를 선택해주세요.");

        return;

    }

    // --------------------------
    // 중복 선택 확인
    // --------------------------

    const orders=[email,print,call,report];

    const unique=new Set(orders);

    if(unique.size!==4){

        alert("같은 순서를 두 번 선택할 수 없습니다.");

        return;

    }

    removeMission();

    // --------------------------
    // 정답
    // 이메일 → 출력 → 전화 → 보고
    // --------------------------

    const correct=

        email==="1" &&
        print==="2" &&
        call==="3" &&
        report==="4";

    if(correct){

        finishMission({

            score:15,

            trust:5,

            progress:10,

            time:"10:30",

            skill:"schedule",

            skillPoint:2,

            icon:"📅",

            title:"일정 계획 완료!",

            message:

            "업무의 우선순위를 고려하여<br>" +
            "효율적으로 일정을 계획했습니다.<br><br>" +

            "⭐ 업무점수 +15<br>" +

            "❤️ 신뢰도 +5"

        });

    }

    else{

        finishMission({

            score:-5,

            trust:-5,

            progress:10,

            time:"10:30",

            icon:"❌",

            title:"일정 계획 실패",

            message:

            "업무 우선순위를 다시 생각해보세요.<br><br>" +

            "⭐ 업무점수 -5<br>" +

            "❤️ 신뢰도 -5"

        });

    }

}
// ==========================
// Mission 3
// 프린터 고장!
// ==========================

function showMission3(){

    document.getElementById("gameContainer").innerHTML=`

<div id="missionContainer">

    <div class="missionCard">

        ${missionTitle(3,"프린터가 고장났다!")}

        <p>

            🖨️ 회의자료를 출력하려는데
            프린터 오류가 발생했습니다.<br><br>

            회의까지
            <b>20분</b>
            남았습니다.<br><br>

            가장 적절한 행동은 무엇일까요?

        </p>

        <button
            class="choiceBtn"
            onclick="selectMission3(1)">

            👨‍💼 팀장에게 먼저 알리고
            다른 프린터를 확인한다.

        </button>

        <button
            class="choiceBtn"
            onclick="selectMission3(2)">

            🔧 혼자 계속
            프린터를 고쳐본다.

        </button>

        <button
            class="choiceBtn"
            onclick="selectMission3(3)">

            🚶 아무 말 없이
            다른 층 프린터를 찾는다.

        </button>

        <button
            class="choiceBtn"
            onclick="selectMission3(4)">

            😅 회의시간까지
            기다렸다가 이야기한다.

        </button>

    </div>

</div>

`;

}

// ==========================
// Mission3 선택
// ==========================

function selectMission3(answer){

    removeMission();

    switch(answer){

        case 1:

            finishMission({

                score:15,

                trust:5,

                progress:10,

                time:"11:00",

                skill:"problem",

                skillPoint:2,

                icon:"🖨️",

                title:"문제 해결 성공!",

                message:

                "문제를 빠르게 공유하고<br>" +

                "대체 방법을 찾아 회의를 준비했습니다.<br><br>" +

                "⭐ 업무점수 +15<br>" +

                "❤️ 신뢰도 +5"

            });

            break;

        case 2:

            finishMission({

                score:10,

                progress:10,

                time:"11:10",

                skill:"problem",

                skillPoint:1,

                icon:"🙂",

                title:"무난한 선택",

                message:

                "직접 해결하려는 자세는 좋지만<br>" +

                "상황 공유도 함께 하면 더욱 좋습니다.<br><br>" +

                "⭐ 업무점수 +10"

            });

            break;

        case 3:

            finishMission({

                score:5,

                progress:10,

                time:"11:20",

                skill:"problem",

                skillPoint:1,

                icon:"😅",

                title:"조금 아쉬운 선택",

                message:

                "대안을 찾은 것은 좋지만<br>" +

                "먼저 팀장에게 공유했다면 더욱 좋았습니다.<br><br>" +

                "⭐ 업무점수 +5"

            });

            break;

        case 4:

            finishMission({

                score:-5,

                trust:-5,

                progress:10,

                time:"11:30",

                icon:"❌",

                title:"문제 해결 실패",

                message:

                "문제를 방치하여<br>" +

                "회의 준비가 지연되었습니다.<br><br>" +

                "⭐ 업무점수 -5<br>" +

                "❤️ 신뢰도 -5"

            });

            break;

    }

}
// ==========================
// Mission 4
// 회의 일정 재조정
// (앞부분)
// ==========================

function showMission4(){

    document.getElementById("gameContainer").innerHTML=`

<div id="missionContainer">

    <div class="missionCard">

        ${missionTitle(4,"회의 일정이 변경되었습니다!")}

        <p>

            📢 팀장님 공지<br><br>

            오후 <b>2시 회의</b>로 변경되었습니다.<br><br>

            오전 시간이 생겼습니다.<br>

            가장 효율적인 업무 순서를 선택하세요.

        </p>

        <div class="orderCard">

            <h3>

                📧 이메일 확인 (15분)

            </h3>

            <select id="m4Email">

                <option value="">순서 선택</option>

                <option value="1">1순위</option>

                <option value="2">2순위</option>

                <option value="3">3순위</option>

                <option value="4">4순위</option>

                <option value="5">5순위</option>

            </select>

        </div>

        <div class="orderCard">

            <h3>

                📞 거래처 전화 (20분)

            </h3>

            <select id="m4Call">

                <option value="">순서 선택</option>

                <option value="1">1순위</option>

                <option value="2">2순위</option>

                <option value="3">3순위</option>

                <option value="4">4순위</option>

                <option value="5">5순위</option>

            </select>

        </div>

        <div class="orderCard">

            <h3>

                📊 업무보고 작성 (60분)

            </h3>

            <select id="m4Report">

                <option value="">순서 선택</option>

                <option value="1">1순위</option>

                <option value="2">2순위</option>

                <option value="3">3순위</option>

                <option value="4">4순위</option>

                <option value="5">5순위</option>

            </select>

        </div>

        <div class="orderCard">

            <h3>

                📝 회의자료 보완 (40분)

            </h3>

            <select id="m4Edit">

                <option value="">순서 선택</option>

                <option value="1">1순위</option>

                <option value="2">2순위</option>

                <option value="3">3순위</option>

                <option value="4">4순위</option>

                <option value="5">5순위</option>

            </select>

        </div>

        <div class="orderCard">

            <h3>

                🖨️ 회의자료 출력 (20분)

            </h3>

            <select id="m4Print">

                <option value="">순서 선택</option>

                <option value="1">1순위</option>

                <option value="2">2순위</option>

                <option value="3">3순위</option>

                <option value="4">4순위</option>

                <option value="5">5순위</option>

            </select>

        </div>

        <button

            class="choiceBtn"

            onclick="checkMission4()">

            ✅ 일정 확인

        </button>

    </div>

</div>

`;

}
// ==========================
// Mission 4 채점
// ==========================

function checkMission4(){

    const email =
    document.getElementById("m4Email").value;

    const call =
    document.getElementById("m4Call").value;

    const report =
    document.getElementById("m4Report").value;

    const edit =
    document.getElementById("m4Edit").value;

    const print =
    document.getElementById("m4Print").value;

    // --------------------------
    // 모두 선택했는지 확인
    // --------------------------

    if(
        email==="" ||
        call==="" ||
        report==="" ||
        edit==="" ||
        print===""){

        alert("모든 업무의 순서를 선택해주세요.");

        return;

    }

    // --------------------------
    // 중복 선택 확인
    // --------------------------

    const orders=[

        email,

        call,

        report,

        edit,

        print

    ];

    const unique=new Set(orders);

    if(unique.size!==5){

        alert("같은 순서를 두 번 선택할 수 없습니다.");

        return;

    }

    removeMission();

    // --------------------------
    // 정답
    // 이메일 → 전화 → 보고 → 보완 → 출력
    // --------------------------

    const correct=

        email==="1" &&
        call==="2" &&
        report==="3" &&
        edit==="4" &&
        print==="5";

    if(correct){

        finishMission({

            score:20,

            trust:5,

            progress:10,

            time:"14:00",

            skill:"schedule",

            skillPoint:2,

            icon:"📅",

            title:"일정 재조정 성공!",

            message:

            "회의 일정 변경을 반영하여<br>" +

            "업무를 효율적으로 재배치했습니다.<br><br>" +

            "⭐ 업무점수 +20<br>" +

            "❤️ 신뢰도 +5"

        });

    }

    else{

        finishMission({

            score:-10,

            trust:-5,

            progress:10,

            time:"14:00",

            skill:"problem",

            skillPoint:1,

            icon:"❌",

            title:"일정 재조정 실패",

            message:

            "업무 우선순위를 다시 생각해보세요.<br><br>" +

            "⭐ 업무점수 -10<br>" +

            "❤️ 신뢰도 -5"

        });

    }

}
// ==========================
// Mission 5
// 업무보고서 작성
// ==========================

let selectedFiles=[];

function showMission5(){

    selectedFiles=[];

    document.getElementById("gameContainer").innerHTML=`

<div id="missionContainer">

<div class="missionCard">

${missionTitle(5,"업무보고서 작성")}

<p>

📢 오후 ESG 회의를 위해<br>

<b>「2026 상반기 ESG 활동 실적 보고서」</b>를 작성해야 합니다.<br><br>

필요한 자료 2개를 선택하세요.

</p>

<div class="fileList">

<div class="fileItem"
onclick="selectFile(this,'2026')">

📊 2026 상반기 ESG 실적.xlsx

</div>

<div class="fileItem"
onclick="selectFile(this,'report')">

📄 2025 ESG 보고서.docx

</div>

<div class="fileItem"
onclick="selectFile(this,'2025')">

📊 2025 상반기 ESG 실적.xlsx

</div>

<div class="fileItem"
onclick="selectFile(this,'memo')">

📝 ESG 회의 메모.txt

</div>

<div class="fileItem"
onclick="selectFile(this,'logo')">

🖼️ 회사 로고.png

</div>

</div>

<button

class="choiceBtn"

onclick="checkMission5()">

✅ 자료 선택 완료

</button>

</div>

</div>

`;

}

// ==========================
// 파일 선택
// ==========================

function selectFile(element,value){

    if(element.classList.contains("selected")){

        element.classList.remove("selected");

        selectedFiles=

        selectedFiles.filter(v=>v!==value);

        return;

    }

    if(selectedFiles.length>=2){

        alert("파일은 2개만 선택할 수 있습니다.");

        return;

    }

    element.classList.add("selected");

    selectedFiles.push(value);

}

// ==========================
// Mission5 채점
// ==========================

function checkMission5(){

    if(selectedFiles.length!==2){

        alert("파일을 2개 선택해주세요.");

        return;

    }

    removeMission();

    const correct=

    selectedFiles.includes("2026") &&

    selectedFiles.includes("report");

    if(correct){

        finishMission({

            score:15,

            trust:5,

            progress:10,

            time:"15:10",

            skill:"report",

            skillPoint:2,

            icon:"📊",

            title:"자료 선택 성공!",

            message:

            "최신 실적과 기존 보고서를 함께 활용했습니다.<br><br>"+

            "⭐ 업무점수 +15<br>"+

            "❤️ 신뢰도 +5"

        });

    }

    else{

        finishMission({

            score:-5,

            trust:-5,

            progress:10,

            time:"15:10",

            icon:"❌",

            title:"자료 선택 실패",

            message:

            "최신 데이터와 기존 보고서를 함께 확인해야 합니다.<br><br>"+

            "⭐ 업무점수 -5<br>"+

            "❤️ 신뢰도 -5"

        });

    }

}
// ==========================
// Mission 6
// 다른 팀과 협업
// ==========================

function showMission6(){

    document.getElementById("gameContainer").innerHTML=`

<div id="missionContainer">

<div class="missionCard">

${missionTitle(6,"다른 팀과 협업하기")}

<p>

📢 마케팅팀에서 연락이 왔습니다.<br><br>

"오늘 오후 4시까지 ESG 실적 데이터를
공유해주실 수 있을까요?<br>
내일 홍보자료 제작에 꼭 필요합니다."<br><br>

현재 나도 업무보고서를
마무리해야 하는 상황입니다.<br><br>

어떻게 답하시겠습니까?

</p>

<button
class="choiceBtn"
onclick="selectMission6(1)">

🤝 가능합니다.<br>

현재 업무를 마무리한 후
30분 안에 전달드리겠습니다.

</button>

<button
class="choiceBtn"
onclick="selectMission6(2)">

⚡ 네!
지금 바로 보내드리겠습니다.

</button>

<button
class="choiceBtn"
onclick="selectMission6(3)">

😅 지금 바빠서
어렵습니다.

</button>

<button
class="choiceBtn"
onclick="selectMission6(4)">

📵 답장을 하지 않는다.

</button>

</div>

</div>

`;

}

// ==========================
// Mission6 선택
// ==========================

function selectMission6(answer){

    removeMission();

    switch(answer){

        case 1:

            finishMission({

                score:10,

                trust:5,

                progress:10,

                time:"16:00",

                skill:"communication",

                skillPoint:2,

                icon:"🤝",

                title:"협업 성공!",

                message:

                "상대 부서와 일정을 조율하며<br>" +

                "원활하게 협업했습니다.<br><br>" +

                "⭐ 업무점수 +10<br>" +

                "❤️ 신뢰도 +5"

            });

            break;

        case 2:

            finishMission({

                score:7,

                trust:2,

                progress:10,

                time:"16:00",

                skill:"communication",

                skillPoint:1,

                icon:"🙂",

                title:"좋은 협조",

                message:

                "협조 의지는 좋았지만<br>" +

                "현재 업무 일정도 함께 고려하면 더욱 좋습니다.<br><br>" +

                "⭐ 업무점수 +7<br>" +

                "❤️ 신뢰도 +2"

            });

            break;

        case 3:

            finishMission({

                score:2,

                trust:-3,

                progress:10,

                time:"16:00",

                skill:"communication",

                skillPoint:1,

                icon:"😐",

                title:"조금 아쉬운 선택",

                message:

                "업무를 우선한 것은 좋지만<br>" +

                "협업을 위한 대안도 함께 제시하면 좋습니다.<br><br>" +

                "⭐ 업무점수 +2<br>" +

                "❤️ 신뢰도 -3"

            });

            break;

        case 4:

            finishMission({

                score:-5,

                trust:-10,

                progress:10,

                time:"16:00",

                icon:"❌",

                title:"협업 실패",

                message:

                "답장이 없어 업무 협업에 차질이 발생했습니다.<br><br>" +

                "⭐ 업무점수 -5<br>" +

                "❤️ 신뢰도 -10"

            });

            break;

    }

}
// ==========================
// Mission 7
// 퇴근 전 업무보고
// ==========================

function showMission7(){

    document.getElementById("gameContainer").innerHTML=`

<div id="missionContainer">

<div class="missionCard">

${missionTitle(7,"퇴근 전 업무보고")}

<p>

🕔 오후 5시 40분<br><br>

팀장님이 말씀하셨습니다.<br><br>

<b>"오늘 진행한 업무를 간단히 보고해주세요."</b><br><br>

가장 적절한 업무보고를 선택하세요.

</p>

<button
class="choiceBtn"
onclick="selectMission7(1)">

📋 오늘 일정을 계획하고,<br>
회의자료를 보완했으며,<br>
업무보고서를 작성했습니다.<br>
또한 마케팅팀과 데이터를 공유했습니다.

</button>

<button
class="choiceBtn"
onclick="selectMission7(2)">

😊 오늘 업무 모두 완료했습니다.

</button>

<button
class="choiceBtn"
onclick="selectMission7(3)">

📄 회의하고 자료 만들었습니다.

</button>

<button
class="choiceBtn"
onclick="selectMission7(4)">

🚶 보고하지 않고 퇴근한다.

</button>

</div>

</div>

`;

}

// ==========================
// Mission7 선택
// ==========================

function selectMission7(answer){

    removeMission();

    switch(answer){

        case 1:

            finishMission({

                score:10,

                trust:5,

                progress:10,

                time:"17:50",

                skill:"report",

                skillPoint:2,

                icon:"📋",

                title:"업무보고 완료!",

                message:

                "오늘의 업무를 핵심 위주로<br>" +

                "명확하게 보고했습니다.<br><br>" +

                "⭐ 업무점수 +10<br>" +

                "❤️ 신뢰도 +5"

            });

            break;

        case 2:

            finishMission({

                score:7,

                trust:2,

                progress:10,

                time:"17:50",

                skill:"report",

                skillPoint:1,

                icon:"🙂",

                title:"무난한 보고",

                message:

                "업무보고는 했지만<br>" +

                "조금 더 구체적으로 설명하면 더욱 좋습니다.<br><br>" +

                "⭐ 업무점수 +7<br>" +

                "❤️ 신뢰도 +2"

            });

            break;

        case 3:

            finishMission({

                score:3,

                progress:10,

                time:"17:50",

                skill:"report",

                skillPoint:1,

                icon:"😅",

                title:"조금 아쉬운 보고",

                message:

                "업무 내용은 전달했지만<br>" +

                "진행 결과까지 함께 보고하면 더욱 좋습니다.<br><br>" +

                "⭐ 업무점수 +3"

            });

            break;

        case 4:

            finishMission({

                score:-5,

                trust:-10,

                progress:10,

                time:"17:50",

                icon:"❌",

                title:"업무보고 누락",

                message:

                "퇴근 전 업무보고는 중요한 업무입니다.<br><br>" +

                "⭐ 업무점수 -5<br>" +

                "❤️ 신뢰도 -10"

            });

            break;

    }

}
// ==========================
// Mission 8
// 퇴근하기
// ==========================

function showMission8(){

    document.getElementById("gameContainer").innerHTML=`

<div id="missionContainer">

<div class="missionCard">

${missionTitle(8,"퇴근 시간!")}

<p>

🕕 오후 6시가 되었습니다.<br><br>

오늘 하루의 업무를 모두 마쳤습니다.<br><br>

가장 적절한 퇴근 행동은 무엇일까요?

</p>

<button
class="choiceBtn"
onclick="selectMission8(1)">

🙋 "혹시 더 도와드릴 업무가 있을까요?"

</button>

<button
class="choiceBtn"
onclick="selectMission8(2)">

😊 "먼저 퇴근하겠습니다.
고생하셨습니다.
좋은 저녁 보내세요."

</button>

<button
class="choiceBtn"
onclick="selectMission8(3)">

🚶 인사 없이 조용히 퇴근한다.

</button>

<button
class="choiceBtn"
onclick="selectMission8(4)">

👜 6시가 되자마자
바로 가방을 챙겨 나간다.

</button>

</div>

</div>

`;

}

// ==========================
// Mission8 선택
// ==========================

function selectMission8(answer){

    removeMission();

    switch(answer){

        case 1:

            finishMission({

                score:5,

                trust:5,

                progress:10,

                time:"18:00",

                skill:"manner",

                skillPoint:2,

                icon:"🏆",

                title:"최고의 선택!",

                message:

                "퇴근 전 남은 업무를 먼저 확인하는<br>" +

                "책임감 있는 자세를 보여주었습니다.<br><br>" +

                "⭐ 업무점수 +5<br>" +

                "❤️ 신뢰도 +5"

            });

            break;

        case 2:

            finishMission({

                score:3,

                trust:3,

                progress:10,

                time:"18:00",

                skill:"manner",

                skillPoint:1,

                icon:"😊",

                title:"좋은 선택!",

                message:

                "정중하게 인사하고 퇴근했습니다.<br><br>" +

                "⭐ 업무점수 +3<br>" +

                "❤️ 신뢰도 +3"

            });

            break;

        case 3:

            finishMission({

                score:-3,

                trust:-5,

                progress:10,

                time:"18:00",

                icon:"😅",

                title:"조금 아쉬운 선택",

                message:

                "인사 없이 퇴근하여 좋은 인상을 남기지 못했습니다.<br><br>" +

                "⭐ 업무점수 -3<br>" +

                "❤️ 신뢰도 -5"

            });

            break;

        case 4:

            finishMission({

                score:-5,

                trust:-3,

                progress:10,

                time:"18:00",

                icon:"😐",

                title:"아쉬운 선택",

                message:

                "퇴근 시간도 중요하지만<br>" +

                "주변 상황을 한 번 더 확인하면 더욱 좋습니다.<br><br>" +

                "⭐ 업무점수 -5<br>" +

                "❤️ 신뢰도 -3"

            });

            break;

    }

    // ==========================
    // 엔딩으로 이동
    // ==========================

    document
    .getElementById("nextMissionButton")
    .onclick=function(){

        closeResult();

        showEnding();

    };

}
