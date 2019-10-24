function Timer(elem){
    let time = 0;
    let interval;
    let offset;

    function update(){
        time += timePassed();
        var formattedTime = formatter(time);
        elem.textContent = 'Timer: ' +formattedTime;
    }
    function timePassed(){
        let now = Date.now();
        let timePassedBy = now - offset;
        offset = now
        return timePassedBy;
    }
    function formatter(timeInMilliseconds){
        let clock  = new Date(timeInMilliseconds);
        let minutes = clock .getMinutes().toString();
        let seconds = clock .getSeconds().toString();
        let milliseconds = clock .getMilliseconds().toString();

        if (minutes.length < 2){
            minutes = '0' + minutes;
        }

        if (seconds.length < 2){
            seconds = '0' + seconds;
        }

        while (milliseconds.length < 3){
            milliseconds = '0'+ milliseconds
        }

        return minutes + ' : ' + seconds + ' . ' + milliseconds
    }

    this.isOn = false;
    this.start = function(){
        if (!this.isOn){
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    };
    this.stop = function(){
        if (this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    this.reset = function(){
        time = 0;
    };
}