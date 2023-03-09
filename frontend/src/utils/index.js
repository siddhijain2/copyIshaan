export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export const formatTime = (time) => {
  const getSeconds = `0${(time % 60)}`.slice(-2)
  const minutes = `${Math.floor(time / 60)}`
  const getMinutes = `0${minutes % 60}`.slice(-2)
  // const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
  return {
    getMinutes,
    getSeconds
  }
}

export const titleContent = (word,matched) => {
    let colorMessage = [];
    console.log(word)
    for (let i = 0; i < word.length; i++) {

        if (matched[i]===1) {
            colorMessage += ("<span style=\"color:green"
                         + "\">" + word[i]
                         + "</span>");
        }
        else if(matched[i]===2){
          colorMessage += ("<span style=\"color:yellow"
                         + "\">" + word[i]
                         + "</span>");
        }
        else
        {
          colorMessage += ("<span style=\"color:red"
                         + "\">" + word[i]
                         + "</span>");
        }       
    }

    return colorMessage;
}