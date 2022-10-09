// v2 add  select input to class htmlWidget
//

async function fetchDataAsync(url) {
    const response = await fetch(url);
    let respObj = await response.json();
//    console.log("resp: " + respObj);
	return respObj;
}


function logoSimple() {
    const svg = new svgWidget;

    let svgObj = {
        typ: 'svg',
        id: 'logo',
//        parent: doc,
        att: {
            viewBox: '0 0 400 70',
            version: '1.1',
//            width: '300px',
//            height: '60px',
            width: '400px',
            height: '80px',
        },
    };

    const svgEl = svg.createSvg(svgObj);

    const logoGrpObj = {
        typ: 'g',
        att: {
            transform: 'matrix(-.6 0 0 .6 63 1)',
        },
    };

    const logoGrpEl = svg.createSvg(logoGrpObj);

    const p1Obj = {
        typ: 'path',
        parent: logoGrpEl,
        att: {
            d: "m7 78h-7c-0.5 7 1 13 5 16 1 1 2 2 4 2-3-4-4-11-2-18zm79-74c-11-10-39 1-61 26-2 2-4 4-5 6h10c0.4-0.4 0.7-0.8 1-1 20-22 44-34 57-29-0.6-1-1-2-2-3z",
			fill: "#2f4694",
        },
    };
    const p1El = svg.createSvg(p1Obj);

    const p2Obj = {
        typ: 'path',
        parent: logoGrpEl,
        att: {
            d: "m93 3c-1-1-3-2-4-3 9 13-1 42-24 68-22 25-49 38-63 32 0.7 1 2 2 2 3 13 11 43-2 68-29 10-11 18-25 18-25 11-19 13-37 4-45z",
            fill: "#2ea8dc",
        },
    };
    const p2El = svg.createSvg(p2Obj);

    svgEl.appendChild(logoGrpEl);

    const txtObj = {
        typ: 'text',
        parent: svgEl,
        att: {
            dx: '43px',
            dy: '51px',
        },
        style: {
            fontFamily: "Aquatico",
            fontSize: '36px',
            fill: "#0b9bd8",
            color: '#0b9bd8',
        },
        textContent: 'AZUL SOFTWARE',
    };

    const svgEltext = svg.createSvg(txtObj);

    return svgEl;
}

class HtmlPage {
    constructor () {
    }

    init(pgObj) {

      let divMain = document.createElement('div');
      this.divMain = divMain;
      Object.assign(divMain,pgObj.mainDiv);
      Object.assign(divMain.style,pgObj.mainDiv.style);
      document.body.appendChild(divMain);
	}

    createMenu(menuObj) {

        let menuDiv = document.createElement('div');

        menuDiv.id = 'menuDiv';
        Object.assign(menuDiv.style, menuObj.style);

        let menuNav = document.createElement('div');
        menuNav.id = 'menuNav';
        let menuNavObj = {
            style: {
                minHeight: '50px',
                border: '1px solid blue',
            },
        };
        Object.assign(menuNav.style, menuNavObj.style);

        let menuTitleStylObj = {
            display: 'inline',
            position: 'absolute',
            padding: '5px',
        };

        let menuTitle = document.createElement('h3');
        menuTitle.textContent = 'menu';
        Object.assign(menuTitle.style, menuTitleStylObj);
        menuNav.appendChild(menuTitle);

        let iconItem = new svgIcon(32);
        let iconObj = {
            id: 'menuX',
            iconType: 'exit',
            svgStyle: {
                cursor: 'default',
                display: 'inline',
                position: 'absolute',
                top: '10px',
                right: '10px',
            },
            style: {
                color: 'black',
            },
            hovStyle: {
                cursor: 'pointer',
            },
            parent: menuNav,
            exitEl: menuDiv,
        };
        iconItem.createIcon(iconObj);
        menuDiv.appendChild(menuNav);

        let menuMain = document.createElement('div');

        let menuMainStyl = {
            border: '1px solid orange',
            width: '100%',
            height: '400px',
        };
        Object.assign(menuMain.style, menuMainStyl);
        const menuList = document.createElement('ul');
        let items =  Object.keys(menuObj.MainMenu);
        let values = menuObj.MainMenu;
        for (let i=0; i< items.length; i++) {
            let item = document.createElement('li');
            item.textContent = items[i];
            item.style.padding = '4px 10px';
            item.addEventListener('mouseenter', (e)=>{e.target.style.color = 'red'; e.target.style.cursor = 'pointer';});
            item.addEventListener('mouseleave', (e)=>{e.target.style.color = 'black'; e.target.style.cursor = 'default';});
            item.addEventListener('mouseup', (e)=>{this.menuFun(e,i);});
			//this.getFile(e);
			let listEl = menuList.appendChild(item);
			listEl.file = values[items[i]];
        }
        menuMain.appendChild(menuList);
        menuDiv.appendChild(menuMain);
		this.menuDiv = menuDiv;
        return menuDiv;
    }

	menuFun(e, i) {
		let el = e.target;
		console.log('menu item: ' + el.file);

	}


    createLogin(loginObj2) {

    let loginObj = {
        id: 'login',
        style: {
            width: '800px',
            minHeight: '500px',
            margin: '10px',
            border: '1px solid green',
            position: 'absolute',
            top: '300px',
            left: '500px',
            zIndex: '1',
            backgroundColor: 'white',
            display: 'block',
        },

    };

        let loginDiv = document.createElement('div');

        loginDiv.id = 'loginDiv';
        Object.assign(loginDiv.style, loginObj.style);

        let loginNav = document.createElement('div');
        loginNav.id = 'loginNav';
        let loginNavObj = {
            style: {
                minHeight: '50px',
                border: '1px solid yellow',
            },
        };
        Object.assign(loginNav.style, loginNavObj.style);


        let loginTitleStylObj = {
            display: 'inline',
            position: 'absolute',
            padding: '5px',
        };

        let loginTitle = document.createElement('h3');
        loginTitle.textContent = 'login';
        Object.assign(loginTitle.style, loginTitleStylObj);
        loginNav.appendChild(loginTitle);

        let iconItem = new svgIcon(32);
        let iconObj = {
            id: 'loginX',
            iconType: 'exit',
            svgStyle: {
                cursor: 'default',
                display: 'inline',
                position: 'absolute',
                top: '10px',
                right: '10px',
            },
            style: {
                color: 'black',
            },
            hovStyle: {
                cursor: 'pointer',
            },
            parent: loginNav,
            exitEl: loginDiv,
        };
        iconItem.createIcon(iconObj);
        loginDiv.appendChild(loginNav);

        let loginMain = document.createElement('div');
        loginMain.id = 'loginMain';

        let loginMainStyl = {
            border: '1px solid purple',
            width: '100%',
            height: '400px',
        };

        Object.assign(loginMain.style, loginMainStyl);

        let labelObj = {
            parent: loginMain,
            id: 'nameInp',
            textContent: 'Name (or email):',
            style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                textAlign: 'right',
                width: '600px',
                lineHeight: '26px',
                margin: '20px',
            },
            input: {
                style: {
                    height: '35px',
                    width: '350px',
                },
                id: 'nameInp',
            },

        };



        let submitObj = {
            parent: loginMain,
            textContent: 'login',
            id: 'loginSubmit',
            style: {
                width: '200px',
                height: '40px',
                margin: '20px 0 20px 160px',
            },
            hovStyl: {},
        };

        //name
        const labelWid = new htmlWidget;

        let nameInp = labelWid.labelInp(labelObj);

        labelObj.id = 'pwdLabel';
        labelObj.textContent = 'Password:'
        labelObj.input.id = 'pwdInp';

        let pwdInp = labelWid.labelInp(labelObj);

        const forget = document.createElement('p');
        const forgetSpan = document.createElement('span');
        forgetSpan.textContent='forgot password? ';
        const forgetRef = document.createElement('a');
        forgetRef.textContent= 'Click here!';
        forget.appendChild(forgetSpan);
        forget.appendChild(forgetRef);
        forget.style.marginLeft = '20px';
        loginMain.appendChild(forget);
        let submitBut = labelWid.button(submitObj);

        loginDiv.appendChild(loginMain);
		this.loginDiv = loginDiv;

        function loginFun(e) {
            console.log('login submit');

        }
        return loginDiv;
    }


addAzulHeader(divMain) {

	let header = document.createElement('header');

	let azulHeaderObj = {
            style: {
                minHeight: '60px',
                margin: '10px',
                border: '1px solid lightgreen',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',
            },
            id: 'header',
            className: 'pagSections',
	}

	Object.assign(header, azulHeaderObj);
	Object.assign(header.style,azulHeaderObj.style);
	this.header = header;

	let iconWid = new svgIcon(48);

	let iconMenuObj = {
			iconType: 'menu',
			id: 'menu',
			parent: header,
			svgStyle: {},
//			svgStyle: {padding: '20px 0 0 20px',},
			hovStyle: {},
	};
	const menuIcon = iconWid.createIcon(iconMenuObj);

    let svgEl = logoSimple();
    header.appendChild(svgEl);

	let iconDivObj = {
			id: 'iconDiv',
			typ: 'div',
		  	style: {
				display: 'inline',
			},
	};

	let iconDiv = this.addElement(iconDivObj);

	let iconRightObj = {
			iconType: 'login',
			id: 'loginIcon',
			parent: iconDiv,
//			svgStyle: {padding: '20px 20px 0 0',},
			hovStyle: {},
	};

	let loginIcon = iconWid.createIcon(iconRightObj);

	iconRightObj.iconType = 'home';
	iconRightObj.id = 'homeIcon';
	let homeIcon = iconWid.createIcon(iconRightObj);

	header.appendChild(iconDiv);

	divMain.appendChild(header);
	return header;
}

addAzulFooter(footerObj) {

	let footer = document.createElement('footer');

	let azulFooterObj = {
            style: {
                minHeight: '60px',
                margin: '10px',
                border: '1px solid lightgreen',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',
            },
	}

	footer.id = 'footer';
	Object.assign(footer.style,azulFooterObj.style);
	this.footer = footer;


	const colNames = Object.keys(footerObj.cols);
	let colsObj = {
		typ: 'div',
		parent: footer,
		style: {
			border: '1px solid lightblue',
		minWidth: '200px',
		}
	};

	let colhdObj = {
		typ: 'h3',
		style: {
			color: 'blue',
		},
	};
	let itemObj = {
		typ: 'p',
		style: {
			cursor: 'default',
			color: 'black',
		},
		hovStyle: {
			cursor: 'pointer',
			color: 'red',
		},
		click: true,
	}

	for (let i=0; i< colNames.length; i++) {
		let col = this.addElement(colsObj);
		colhdObj.parent = col;
		colhdObj.textContent = colNames[i];
		this.addElement(colhdObj);
		let items =  Object.keys(footerObj.cols[colNames[i]]);
		let values = footerObj.cols[colNames[i]];
		for (let j=0; j<items.length; j++) {
			itemObj.parent = col;
			itemObj.textContent = items[j];
			itemObj.file = values[items[j]];
			let item = this.addElement(itemObj);
		}
//		console.log('menu items: ' + items);
	} // i loop

	footerObj.parent.appendChild(footer);
	return footer;
} // addazul footer


	addElement(elObj) {
//      console.log('elObj: ', + elObj);
        let el = document.createElement(elObj.typ);
        Object.assign(el,elObj);
        Object.assign(el.style,elObj.style);
		if (Object.hasOwn(elObj,'parent')) {
			if (typeof elObj.parent === 'object') {
				if (elObj.parent === null) {
					document.body.appendChild(el);
				} else {
					elObj.parent.appendChild(el);
				}
			}
			if (typeof elObj.parent === 'string') {
				const parentEl = document.getElementById(elObj.parent);
				if (parentEl !== undefined) {
					parentEl.appendChild(el);
				}
			}
		}

		if (Object.hasOwn(elObj, 'name')) {
			this[elObj.name] = el;
		}

		if (Object.hasOwn(elObj, 'click')) {
			el.addEventListener('mouseup', (event) => {this.getFile(event)});
		}

		if (Object.hasOwn(elObj, 'hovStyle')) {
			el.addEventListener('mouseenter', (event) => {Object.assign(el.style,elObj.hovStyle);});
			el.addEventListener('mouseleave', (event) => {Object.assign(el.style,elObj.style);});
		}
        return el;
	}

	getFile(e) {
//		console.log('file: ' + e.target.file);
		fetchDataAsync('test.json').then((respObj) => {
			this.renderJsonObj(respObj);
		});
	}


    addMeta(metaObj) {
        const headEl = document.head;
        let metaEl = document.createElement('meta');
        metaEl.setAttribute('charset','UTF-8');
        headEl.appendChild(metaEl);

        for (let i=0; i<metaObj.metaNames.length; i++) {
            let metaEl = document.createElement('meta');
            metaEl.name = metaObj.metaNames[i].name;
            metaEl.content = metaObj.metaNames[i].content;
            headEl.appendChild(metaEl);
        }

    }

    addLink(linkObj) {
        const headEl = document.head;
        let linkEl = document.createElement('link');
        let keys = Object.keys(linkObj);
        for (let i=0; i< keys.length; i++) {
            let key = keys[i];
            linkEl.setAttribute(key, linkObj[key])
        }
        headEl.appendChild(linkEl);
    }

    addScript(url) {
        if (!(url.length>0)) {return}
        let scriptEl = document.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.async = true;
        scriptEl.src = url;
        document.head.appendChild(scriptEl);
    }

    addStyles(stylObj) {
        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';

        document.head.appendChild(styleEl);

        let styleSheet = styleEl.sheet;
        let rulenum = styleSheet.cssRules.length;
        styleSheet.insertRule('* { margin: 0; padding: 0; font-family: Calibri; list-style: none; text-decoration:none; font-size: 20pt;}', rulenum);
//      	let rulenum2 = styleSheet.cssRules.length;
//      console.log('rules2: ' + rulenum2);
    }

	renderJsonObj(rendObj) {
		const parent = this.docmain;
		const elNum = rendObj.elements.length;
//		console.log('render: ' + parent.id + ' els: ' + elNum);
		while (parent.firstChild) {
    		parent.firstChild.remove();
		}

		for (let i=0; i<elNum; i++) {
			let elObj = rendObj.elements[i];
			elObj.parent = this.docmain;
			this.addElement(elObj);

		}

	}


} //htmlPage

  class htmlWidget {
    constructor () {
    }

    button(butObj) {
        let butEl = document.createElement('button');
        Object.assign(butEl,butObj);
        Object.assign(butEl.style,butObj.style);
//      butEl.style = butObj.style;
        butEl.state = true;
        butEl.hovAtts = Object.keys(butObj.hovStyl);
        butEl.addEventListener('mouseover',(event)=>{butElHov(event);});
        butEl.addEventListener('mouseleave',(event)=>{butElLeave(event, butEl);});
        butEl.addEventListener('click',(event)=>{butElClick(event);});
//      butEl.addEventListener('click',(event)=>{butObj.click(event,butObj.p1);});
        butObj.parent.appendChild(butEl);
        return butEl;

        function  butElHov(e) {
//  console.log('butEl hovering');
            for (let i=0; i<e.target.hovAtts.length; i++) {
                let prop = e.target.hovAtts[i];
//              console.log('keys: ' + prop + '\n');
                e.target.style[prop] = butObj.hovStyl[prop];
            }
            e.target.style.cursor = 'pointer';
        }

        function  butElLeave(e, el) {
//  console.log('butEl leaving');
//        Object.assign(el.style,butObj.style);

            for (let i=0; i<e.target.hovAtts.length; i++) {
                let prop = e.target.hovAtts[i];
                if (e.target.state) {
                    e.target.style[prop] = butObj.style[prop];
                } else {
                    e.target.style[prop] = butObj.altStyl[prop];
                }
            }
            el.style.cursor = 'default';

        }

        function  butElClick(e) {
            e.target.state = !e.target.state;
            for (let i=0; i<e.target.hovAtts.length; i++) {
                let prop = e.target.hovAtts[i];
                if (e.target.state) {
                    e.target.style[prop] = butObj.style[prop];
                } else {
                    e.target.style[prop] = butObj.altStyl[prop];
                }
            }
        } //butelclick

   } //button


    input(inpObj) {
        let inpEl = document.createElement('input');
        Object.assign(inpEl,inpObj);
        Object.assign(inpEl.style,inpObj.style);
//        inpEl.addEventListener('input',(event) => {inpFun(event)});
        inpEl.addEventListener('click',(event) => {inpClickFun(event)});
        inpEl.addEventListener('keydown',(event) => {keyDownFun(event)});
        inpEl.addEventListener('keyup',(event) => {keyUpFun(event)});
        inpObj.parent.appendChild(inpEl);
        return inpEl;

        function inpClickFun(e) {
            e.preventDefault();
//            console.log('input click: ' + e.target.value);
        }

        function keyUpFun(e) {
            e.preventDefault();
            console.log('key up: '+ e.key);
            if (e.key == 'Enter') {
//                console.log('key enter: ' + e.target.value);
            }
        }

        function keyDownFun(e) {
            let key = e.key;
            let el = e.target;
            let ctrlkey = e.ctrlKey;
//      console.log('key down1: ' + key + ' control: ' + ctrlkey );

            switch (key) {
            case "ArrowLeft":
                if (ctrlkey) {
                }
                break;
            case "ArrowRight":
        // Right pressed
                if (ctrlkey) {
                }
                break;
            case "ArrowUp":
        // Up pressed
                if (ctrlkey) {
//                    console.log('cntl key up');
                }
//                console.log('key up');
                break;
            case "ArrowDown":
        // Down pressed
                if (ctrlkey) {
                }
                break;
            default:
                return;
            }

        } // keyfun
    } // input

    labelInp(labInpObj) {

        let labEl = document.createElement('label');
        Object.assign(labEl,labInpObj);
        Object.assign(labEl.style,labInpObj.style);

        let inpEl = document.createElement('input');

        Object.assign(inpEl,labInpObj.input);
        Object.assign(inpEl.style,labInpObj.input.style);
//        inpEl.addEventListener('input',(event) => {inpFun(event)});
        inpEl.addEventListener('click',(event) => {inpClickFun(event)});
        inpEl.addEventListener('keydown',(event) => {keyDownFun(event)});
        inpEl.addEventListener('keyup',(event) => {keyUpFun(event)});

		labEl.appendChild(inpEl);
		labEl.inp = inpEl;
        labInpObj.parent.appendChild(labEl);

        return labEl;

        function inpClickFun(e) {
            e.preventDefault();
//            console.log('input click: ' + e.target.value);
        }

        function keyUpFun(e) {
            e.preventDefault();
            console.log('key up: '+ e.key);
            if (e.key == 'Enter') {
//                console.log('key enter: ' + e.target.value);
            }
        }

        function keyDownFun(e) {
            let key = e.key;
            let el = e.target;
            let ctrlkey = e.ctrlKey;
//      console.log('key down1: ' + key + ' control: ' + ctrlkey );

            switch (key) {
            case "ArrowLeft":
                if (ctrlkey) {
                }
                break;
            case "ArrowRight":
        // Right pressed
                if (ctrlkey) {
                }
                break;
            case "ArrowUp":
        // Up pressed
                if (ctrlkey) {
//                    console.log('cntl key up');
                }
//                console.log('key up');
                break;
            case "ArrowDown":
        // Down pressed
                if (ctrlkey) {
                }
                break;
            default:
                return;
            }

        } // keyfun
    } // labinp


	inpsel(inpSelObj) {
        let inpSelEl = document.createElement('select');
        Object.assign(inpSelEl,inpSelObj);
        Object.assign(inpSelEl.style,inpSelObj.style);
		let options = inpSelObj.selOptions;
		for (let i=0;i<options.length; i++) {
			let opt = document.createElement("option");
			opt.text = options[i];
			inpSelEl.add(opt);
		}

//        inpSelEl.addEventListener('input',(event) => {inpFun(event)});
        inpSelEl.addEventListener('mouseup',(event) => {inpSelMup(event)});
//        inpSelEl.addEventListener('keydown',(event) => {inpSelKeyDown(event)});
//        inpSelEl.addEventListener('keyup',(event) => {inpSelKeyUp(event)});
        inpSelObj.parent.appendChild(inpSelEl);

		return inpSelEl;

        function inpSelMup(e) {
            e.preventDefault();
//            console.log('inpSel mouse up: ' + e.target.value);
        }

        function inpSelKeyUp(e) {
            e.preventDefault();
            console.log('inpSel key up: '+ e.key);
            if (e.key == 'Enter') {
//                console.log('key enter: ' + e.target.value);
            }
        }

        function inpSelKeyDown(e) {
            let key = e.key;
            let el = e.target;
            let ctrlkey = e.ctrlKey;
 //     console.log('inpSel key down: ' + key + ' control: ' + ctrlkey );

            switch (key) {
            case "ArrowLeft":
                if (ctrlkey) {
                }
                break;
            case "ArrowRight":
        // Right pressed
                if (ctrlkey) {
                }
                break;
            case "ArrowUp":
        // Up pressed
                if (ctrlkey) {
//                    console.log('cntl key up');
                }
//                console.log('key up');
                break;
            case "ArrowDown":
        // Down pressed
                if (ctrlkey) {
                }
                break;
            default:
                return;
            }

        } // keyfun

	} // inpsel

} //html widget


class svgIcon {
  constructor(size) {
    this.svgNS = "http://www.w3.org/2000/svg";
    this.size = size;
  }

  createIcon(iconObj) {
    let svgEl = document.createElementNS(this.svgNS, 'svg');
    if (iconObj['size'] === undefined) {
        svgEl.setAttribute('width', this.size);
        svgEl.setAttribute('height', this.size);
    } else {
        svgEl.setAttribute('width', iconObj['size']);
        svgEl.setAttribute('height', iconObj['size']);
    }
    svgEl.setAttribute('viewBox', '0 0 100 100');
    svgEl.setAttribute('version', '1.1');

    Object.assign(svgEl,iconObj);
    Object.assign(svgEl.style,iconObj.svgStyle);

    svgEl.addEventListener('mouseover',(event)=>{svgElHov(event);});
    svgEl.addEventListener('mouseleave',(event)=>{svgElHovLeave(event, svgEl);});
    svgEl.state = false;
	svgEl.iconType = iconObj.iconType;

    let pathEl = document.createElementNS(this.svgNS,'path');
    pathEl.style.strokeWidth = '10px';
    pathEl.style.strokeLineCap = 'round';
    pathEl.style.strokeLineJoin = 'miter';
    pathEl.style.stroke = '#000000';
    pathEl.style.fill = 'none';
    Object.assign(pathEl.style,iconObj.style);
    switch (iconObj.iconType) {
        case 'login':
//          pathEl.setAttribute('d', 'M 50,40 A 15,15 0 0 1 50,10 A 15,15 0 0 1 50,40 M 21,98 A 28,49 0 0 1 50,50 28,49 0 0 1 78,98 Z');
            pathEl.setAttribute('d', 'M 50,40 A 15,15 0 0 1 50,10 A 15,15 0 0 1 50,40 M 22,90 A 28,49 0 0 1 50,50 28,49 0 0 1 78,90 60,60 90 0 1 22,90');
            break;
        case 'menu':
            pathEl.setAttribute('d', 'M 5,20 h 90 M 5,50 h 90 M 5,80 h 90');
			svgEl.addEventListener('click',(event)=>{svgMenuClick(event);});
            break;
        case 'home':
            pathEl.setAttribute('d', 'M 15,40 V 95 H 85 V 40 M 5,44 50,15 95,44');
            break;
        case 'exit':
            pathEl.setAttribute('d', 'm 5,5 90,90 m -90,0 90, -90');
			svgEl.addEventListener('click',(event)=>{svgXClick(event, svgEl.exitEl);});
            break;
		case 'right':
			pathEl.setAttribute('d', 'M 5,5 95,50 5,95 Z');
			break;
		case 'left':
			pathEl.setAttribute('d', 'M 95,5 5,50 95,95 Z');
			break;
		case 'eye':
			pathEl.setAttribute('d', 'M 0,40 A 100,100 0 0 1 100,40 m 0, 20 A 100,100 0 0 1 0,60 M 38,50 A 12,12 0 0 1 62,50 A 12,12 0 0 1 38,50');
			break;
        default:
          throw 'unknown icon: ' + iconObj.icon;
    }
    let hovKeys = Object.keys(iconObj.hovStyle);

    svgEl.appendChild(pathEl);
    iconObj.parent.appendChild(svgEl);

    function svgElHov(e) {
        if (e.target.state) { return}
        e.preventDefault();
        e.target.style.cursor = 'pointer';
        for (let i=0; i<hovKeys.length; i++) {
            let prop = hovKeys[i];
            pathEl.style[prop] = iconObj.hovStyle[prop];
        }
        e.target.state = true;
//        console.log('hover');
    }

    function svgElHovLeave(e, el) {
        e.preventDefault();
        e.target.style.cursor = 'default';
        for (let i=0; i<hovKeys.length; i++) {
            let prop = hovKeys[i];
            pathEl.style[prop] = iconObj.style[prop];
        }
        el.state = false;
//        console.log('leaving');
    }

    function svgElClick(e) {
        e.preventDefault();
        console.log('click: ' + this.iconType);
    }

    function svgMenuClick(e) {
        e.preventDefault();
//        console.log('menu click: ');
		azul.menu.style.display = 'block';
    }

    function svgXClick(e, exitEl) {
        e.preventDefault();
//        console.log('X click');
		exitEl.style.display = 'none';
    }

  }

} //svg Icons

class svgWidget {
  constructor() {
    this.svgNS = "http://www.w3.org/2000/svg";
  }

	createSvg(svgObj) {

    	let svgEl = document.createElementNS(this.svgNS, svgObj.typ);
//		svgEl.typ = svgObj.typ;
    	Object.assign(svgEl,svgObj);

		let keys = Object.keys(svgObj.att);
		for (let i=0; i< keys.length; i++){
			let key = keys[i];
			let val = svgObj.att[key];
			svgEl.setAttribute(key, val);
		}

		if (svgObj.hasOwnProperty('style')) {Object.assign(svgEl.style,svgObj.style);}

		if (svgObj.hasOwnProperty('parent')) {svgObj.parent.appendChild(svgEl);}
		this.svgEl = svgEl;

//		svgEl.addEventListener('mouseenter',(event)=>{svgElMoEnter(event);});
//		svgEl.addEventListener('mouseleave',(event)=>{svgElMoLeave(event, svgEl);});
		svgEl.addEventListener('mouseup',(event)=>{this.svgElMoUp(event);});


		return svgEl;
	}

/*
    function svgElMoEnter(e) {
        if (e.target.state) { return}
        e.preventDefault();
        e.target.style.cursor = 'pointer';
        for (let i=0; i<hovKeys.length; i++) {
            let prop = hovKeys[i];
            pathEl.style[prop] = iconObj.hovStyle[prop];
        }
        e.target.state = true;
//        console.log('hover');
    }

    function svgElMoLeave(e, el) {
        e.preventDefault();
        e.target.style.cursor = 'default';
        for (let i=0; i<hovKeys.length; i++) {
            let prop = hovKeys[i];
            pathEl.style[prop] = iconObj.style[prop];
        }
        el.state = false;
//        console.log('leaving');
    }
*/
   	svgElMoUp(e) {
        e.preventDefault();
        console.log('mouse up:' + e.button + ' from ' + e.target);
    }

} //svgWidget

class tableWidget {

    constructor() {
        this.focusCol = 0;
        this.focusRow = 0;
    }

    init(tblObj) {
      let tbl = document.createElement('table');
      Object.assign(tbl,tblObj);
      Object.assign(tbl.style,tblObj.style);
      Object.assign(tbl.hovCellStyle,tblObj.hovCellStyle);
	  this.tbl = tbl;
      tbl.hovKeys = Object.keys(tbl.hovCellStyle);

	  let head = tblObj.hasOwnProperty('head');
      if (head) {
        let theader = tbl.createTHead();
        let hrow = theader.insertRow();
        let hcell = hrow.insertCell();
      }

      let tbody = tbl.createTBody();
      for (let row=0; row < tbl.nrows; row++) {
        let trow = tbody.insertRow();
        trow.id = tbl.id + 'Row' + row;
        trow.classList.add((tbl.id + 'Row'), (tbl.id + 'Row' + row));
        for (let col=0; col < tbl.ncols; col++) {
            let newCell = trow.insertCell();
			Object.assign(newCell.style, tblObj.cellStyle);
            newCell.id = tbl.id + 'R' + row + 'C' + col;
            newCell.classList.add((tbl.id + 'Cell'), (tbl.id + 'CelCol' + col), (tbl.id + 'CelRow' + row));
            newCell.textContent = 'R' + row + 'C' + col;
            if (tbl.edit) {newCell.contentEditable = 'true'};
            newCell.addEventListener('input',(event) => {inpFun(event)});
            newCell.addEventListener('click',(event) => {clickFun(event)});
            newCell.addEventListener('keydown',(event) => {keydFun(event)});
            newCell.addEventListener('mouseenter',(event) => {cellHover(event)});
            newCell.addEventListener('mouseleave',(event) => {cellLeave(event)});
        }
      }

      tbl.addEventListener('blur',(event) => {this.focoutFun(event)});

	  function keydFun(e) {
        let key = e.key;
        let cel = e.target;
        let ctrlkey = e.ctrlKey;
        let icol = cel.cellIndex;
        let irow = cel.parentNode.rowIndex;
//      console.log('key down1: ' + key + ' control: ' + ctrlkey + ' row: ' + irow + ' col: ' + icol);
        let tbl = this.el;

        switch (key) {
        case "ArrowLeft":
            if (ctrlkey) {
                if (icol>0) tbl.rows[irow].cells[icol-1].focus();
            }
        break;
        case "ArrowRight":
        // Right pressed
            if (ctrlkey) {
                if (icol < this.cols) tbl.rows[irow].cells[icol+1].focus();
            }
            break;
        case "ArrowUp":
        // Up pressed
            if (ctrlkey) {
                if (irow > 0) tbl.rows[irow-1].cells[icol].focus();
            }
            break;
        case "ArrowDown":
        // Down pressed
            if (ctrlkey) {
                if (irow < this.rows) tbl.rows[irow+1].cells[icol].focus();
            }
            break;
        default:
            return;
        }

//      console.log('key down2: ' + key + ' control: ' + ctrlkey );
    }

    function inpFun(e) {

    }

    function clickFun(e) {
        let cel = e.target;
        let icol = cel.cellIndex;
        let irow = cel.parentNode.rowIndex;
//        console.log('click' + cel + ' icol: ' + icol + ' irow: ' + irow );
        cel.focus();
    }

    function focoutFun(e) {
        let el = e.target;
//      console.log("table: ' + el)
//        let cel = e.target;
//        let icol = cel.cellIndex;
//        let irow = cel.parentNode.rowIndex;
//        tabobj.dtab[irow-1][icol-1].nval = cel.textContent;
//        console.log('blur: ' + cel.textContent + ' |icol: ' + icol + ' irow: ' + irow );
    }

	function cellHover(e) {
		let cel = e.target;
//		console.log('hovering ' + cel.id);
		cel.style.cursor = 'pointer';
		let hovKeys = tbl.hovKeys;
        for (let i=0; i<hovKeys.length; i++) {
                let prop = hovKeys[i];
//              console.log('keys: ' + prop + '\n');
                cel.style[prop] = tbl.hovCellStyle[prop];
        }
		tbl.cell = cel;
    }

	function cellLeave(e) {
		let cel = tbl.cell;
//		console.log('leaving cell ' + cel.id);
		if (cel==null) {return};
		let hovKeys = tbl.hovKeys;
        for (let i=0; i<hovKeys.length; i++) {
                let prop = hovKeys[i];
//              console.log('keys: ' + prop + '\n');
                cel.style[prop] = tbl.cellStyle[prop];
        }
		tbl.cell = null;
		cel.style.cursor = 'pointer';
	}

	function load(datObj) {

    }
    return tbl;
  } //init

} //tablewidget

class tabbedDivs {
	constructor() {
		this.tabEls = [];
		this.divEls = [];
		this.active = 0;
	}

  	creSvgTab(tab) {

   		const svgNS = "http://www.w3.org/2000/svg";
    	let svgEl = document.createElementNS(svgNS, 'svg');
        svgEl.setAttribute('width', '160');
        svgEl.setAttribute('height', '50');

    	svgEl.setAttribute('viewBox', '0 0 160 50');
    	svgEl.setAttribute('version', '1.1');
		svgEl.style.margin = '0 0 -12px 0';
//    	Object.assign(svgEl.style,iconObj.svgStyle);

		let tabgrpEl = document.createElementNS(svgNS,'g');
//		tabgrpEl.style.margin = '0 0 -5px 0';

    	let tabPathEl = document.createElementNS(svgNS,'path');
//    	Object.assign(tabpathEl.style,svgObj.style);

	    tabPathEl.setAttribute('d', 'm0 50 30-50h100l30 50z');
    	tabPathEl.setAttribute('class', 'svgtab');
		tabPathEl.id = 'tab_' + tab;
    	tabPathEl.style.fill = '#ccc';
    	tabgrpEl.appendChild(tabPathEl);

    	let tabTextEl = document.createElementNS(svgNS,'text');

    	tabTextEl.setAttribute('class', 'svgtext');
    	tabTextEl.setAttribute('x', '50');
    	tabTextEl.setAttribute('y', '35');
    	tabTextEl.textContent = tab;
    	tabgrpEl.appendChild(tabTextEl);

		svgEl.addEventListener('mouseenter',(event)=>{this.tabMoEnter(event);});
		svgEl.addEventListener('mouseleave',(event)=>{this.tabMoLeave(event);});
    	svgEl.appendChild(tabgrpEl);
		svgEl.path = tabPathEl;
		svgEl.text = tabTextEl;

		return svgEl
	}

	tabMoEnter(e) {
//  console.log('mouse enter: ' + this.active);
		if (e.target!= this.tabEls[this.active]) {
			let tabPath = e.target.path;
			tabPath.style.fill = 'aqua';
            tabPath.style.cursor = 'pointer';
            e.target.text.style.cursor = 'pointer';
       	}
    	setTimeout(function() {},100);
  	}


  	tabMoLeave(e) {
//  console.log('mouse leave: ' + e.target);
		if (e.target!= this.tabEls[this.active]) {
			let tabPath = e.target.path;
        	tabPath.style.fill = '#ccc';
        	tabPath.style.cursor = 'default';
        	e.target.text.style.cursor = 'default';
		}
	}

	create(tabDivObj) {

    	this.tabNum = tabDivObj.tabNames.length;
		this.tabNames = tabDivObj.tabNames;
		let tabGrp = document.createElement('div');
		Object.assign(tabGrp, tabDivObj);
		Object.assign(tabGrp.style, tabDivObj.style);
    	let navEl = document.createElement('div');
    	navEl.id = 'tabnav';

		Object.assign(navEl.style, tabDivObj.nav.style);
    	tabGrp.appendChild(navEl);

    	for (let i=0; i< this.tabNum; i++) {
//  console.log('tab[' + i + ']: ' + tabObj[i]);
			let tabText = this.tabNames[i];
        	let tabEl = this.creSvgTab(tabText);
			tabEl.addEventListener
			this.tabEls.push(tabEl);
        	tabEl.addEventListener('click',(event)=>{this.tabClick(event, i);});
        	navEl.appendChild(tabEl);
    	}

	    for (let i=0; i< this.tabNum; i++) {
    	    let divEl = document.createElement('div');
			Object.assign(divEl.style, tabDivObj.div.style);

			let divStyl = tabDivObj['div'+i];
			if (typeof divStyl !== 'undefined') {Object.assign(divEl.style, divStyl.style);}

			this.divEls.push(divEl);
			if (i==0) {
				divEl.style.display = 'block';
			} else {
				divEl.style.display = 'none';
			}
        	divEl.id = 'div_' + this.tabNames[i];
        	divEl.setAttribute('class','content');

        	let pEl= document.createElement('p');
        	pEl.textContent = 'Content: ' + this.tabNames[i];
        	divEl.appendChild(pEl);
			tabGrp.appendChild(divEl);
    	}
		tabGrp.parent.appendChild(tabGrp);

		return tabGrp;
	} //create

  	tabClick(e, i) {
//      	console.log('tabclick[' + i + '] active: ' + this.active);

        	this.tabEls[i].path.style.fill = '#eee';
        	this.tabEls[this.active].path.style.fill = '#ccc';

        	this.divEls[this.active].style.display = 'none';
        	this.divEls[i].style.display = 'block';
        	this.active = i;
	}

} //tabbedDivs
