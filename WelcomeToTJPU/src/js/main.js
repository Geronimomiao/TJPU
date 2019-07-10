let speed = 50

let writeCode = (prefix, code, fn) => {
  let domCode = document.querySelector('#code')
  let n = 0
  var clock = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
    myStyle.innerHTML = prefix + code.substring(0, n)
    domCode.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"})
    if (n >= code.length) {
      window.clearInterval(clock)
      fn.call()
    }
  }, speed)
}

let createPaper = fn => {
  var paper = document.createElement('pre');
  paper.id = 'paper';
  document.querySelector('#box').appendChild(paper);
  fn.call();
};

let writeMarkdown = (markdown, fn) => {
  let domPaper = document.querySelector('#paper')
  let n = 0
  let clock = setInterval(() => {
    n += 1
    domPaper.innerHTML = Prism.highlight(markdown.substring(0, n), Prism.languages.markdown)
    domPaper.innerHTML = marked(markdown.substring(0, n))
    domPaper.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"})
    if (n >= markdown.length) {
      window.clearInterval(clock)
      fn.call()
    }
  }, speed)
}

let convertMarkdownToHtml = fn => {
  // document.querySelector('#paper').innerHTML = marked(markdown)
  fn.call()
}

let main = () => {
  writeCode('', cssCode, () => {
    createPaper(() => {
      writeCode(cssCode, htmlCode, () => {
        writeMarkdown(markdown, () => {
          convertMarkdownToHtml(() => {
          })
        })
      })
    })
  })
};

main()