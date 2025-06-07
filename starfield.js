
document.addEventListener("DOMContentLoaded", () => {

    console.log("lets go !");
    
    let myCanvas = window.document.getElementById("myCanvas");
    let ctx = myCanvas.getContext("2d");
    
    const drawStar = (x, y, s) => {        
        c = s+s;
        
        ctx.fillStyle = `#${c}${c}${c}`;
        ctx.fillRect(x,y,s,1);
    }
    
    const sleep = (s) => new Promise( resolve => setTimeout( resolve, s) );

    (async function (){ 

        let stars = [];
        let nbOfStars = 2000;

        for (i=0; i<=nbOfStars; i++) {
            stars.push( {
                x: Math.floor(Math.random()*1600),
                y: Math.floor(Math.random()*800),
                // z: Math.floor(Math.random()*2),
                s: Math.floor(Math.random()*4+1),
            })

        }
    
        while (1) {
            
            ctx.fillStyle = "#111";
            ctx.fillRect(0,0,1600,800);

            
            for (let depth = 1; depth<6; depth ++) {
                for (let star of stars.filter( star => star.s === depth )) {
                    star.x += star.s;
                    if (star.x > 1600) star.x = 0;

                    drawStar(star.x, star.y, star.s);
                };
            };
            await sleep(8);
        }
    })();

})
