function Send(e) {
    if (e.keyCode == 13) {
        perguntar();
        return false;
    }
}

function perguntar() {
    const input = document.getElementById('input');
    const _question = input.value.toString().trim();

    let questionSEND = _question.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    questionSEND = questionSEND.split('/').join('-');
    questionSEND = questionSEND.replace(/[^a-zA-Z0-9@,.;:?!-\s]/g, '');

    const msg = document.getElementById('msg');

    let msgLines = msg.innerHTML;
    msgLines = msgLines.replace('<a href="#" id="end">', '');

    const http = new XMLHttpRequest();
    _send = questionSEND.trim() + ":" + _question.trim();
    _send = _send.replace('?', '');
    
    http.open('GET', `/chatbot/input/${_send.trim()}/`, true);
    http.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

    http.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let objJSON = JSON.parse(http.responseText);
            if (objJSON.length > 0) {
                const output = objJSON[0].output.toString().trim();
                // balões
                msgLines += `
                <div class="row">
                    <div class="col align-self-end">
                        <div class="talk-bubble talk-ballon-right balloon-right" style="background-color: #8000ff;">
                            <div class="talktext text-right">
                                <p>${_question}</p>
                            </div>
                        </div> 
                    </div>
                </div> 
            
                <div class="row">
                    <div class="col align-self-start">
                        <div class="talk-bubble talk-ballon-left balloon-left" style="background-color: #00aabb;">
                            <div class="talktext text-left">
                                <p>${output}</p>
                            </div>
                        </div>
                    </div>
                </div> 
                
                <a href="#" id="end">
                `;

                document.getElementById('input').value = '';
                msg.innerHTML = msgLines; 
                window.location.href = '#end'; 
                document.getElementById('input').focus(); 
            }
        }
    }

    http.send();
}
window.location.href = '#end'; 