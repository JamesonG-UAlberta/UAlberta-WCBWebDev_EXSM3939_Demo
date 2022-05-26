// Non-object oriented.
let seconds = 0;
let timer;

timer = setInterval(() => {seconds += 1;}, 1000);



// Object oriented.
const stateObj = {
    seconds: 0,
    timer: undefined
}

stateObj.timer = setInterval(() => { stateObj.seconds += 1;}, 1000);



// React
this.state = {
    seconds: 0,
    timer: undefined
};

/*
Before this runs, state is:
    seconds: 0
    timer: undefined
*/
this.setState(
{ 
    timer: setInterval(() => {
        this.setState(
        {
            seconds: this.state.seconds + 1
        }
        );
        /* 
        After this runs (once), state is:
            seconds: 1
            timer: [interval]
        */
    }, 1000)
}
);
/* 
After this runs, state is:
    seconds: 0
    timer: [interval]
*/
