let h = 0; //시 
        let m = 0; //분
        let s = 0; //초
        let t = 0; //밀리
        let saveH = document.getElementById("hour"); //현재 시
        let saveM = document.getElementById("minute"); //현재 분
        let saveS = document.getElementById("second"); //현재 초
        let saveT = document.getElementById("teMilli"); //현재 밀리
        let btnStart = document.getElementById("btnsta"); //시작버튼
        let btnStop = document.getElementById("btnsto"); //멈춤버튼
        let btnReset = document.getElementById("btnres"); //초기화버튼
        let intervalId;

        btnStart.onclick = function() {
           clearInterval(intervalId)
           intervalId = setInterval(operateTimer, 10) 
        }
        btnStop.onclick = function() {
           clearInterval(intervalId)
        }
        btnReset.onclick = function() {
           clearInterval(intervalId)
           h = 0; m = 0; s = 0; t = 0;
           saveH.textContent = "00";
           saveM.textContent = "00";
           saveS.textContent = "00";
           saveT.textContent = "00";
        }

        function operateTimer() {
            t++;
            console.log(t);
            saveT.textContent = t > 9 ? t : '0' + t;
            if(t > 99){
                s++;
                saveS.textContent = s > 9 ? s : '0' + s;
                t = 0;
                saveT.textContent = "00";
            }
            if(s > 59){
                m++;
                saveM.textContent = m > 9 ? m : '0' + m;
                s = 0;
                saveS.textContent = "00";
            }
            if(m > 59){
                h++;
                saveH.textContent = h > 9 ? h : '0' + h;
                m = 0;
                saveM.textContent = "00";
            }
        }