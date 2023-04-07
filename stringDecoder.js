function decoder(code) {
    let splitCode = code.split('');
    let answer = '';
    for (i = 0; i < splitCode.length; i++) {
        if (!isNaN(+splitCode[i])) {
            i += +splitCode[i]
        } else {
            answer += splitCode[i]
        }
    }
    console.log(answer);
}

decoder('');