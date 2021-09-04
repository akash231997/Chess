function build() {

    for(let j=0; j<8; j++) {
        let row = document.createElement("div");
            row.classList.add("flex-row");

            row.style.flexDirection = j%2 == 0 ? '' : 'row-reverse';
           // row.style.display = j%2 == 0 ? '' : 'inline-flex';

        for(let i=0; i<8; i++) {
            let flag = false;
            let column = document.createElement("div");
            column.classList.add("flex-col");
            if(i%2 == 0) {
                column.style.backgroundColor = "black";
            }
            else
                column.style.backgroundColor = "white";

            row.appendChild(column);
        }

        $(".flex-container").append(row);
    }
}

build();