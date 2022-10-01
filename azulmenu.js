  window.onload = (event) => {
    const azul = new HtmlPage;
    let pageObj = {
        mainDiv: {
            style: {
                width: 'calc(100% - 300px)',
                border: '1px solid blue',
                minHeight: '300px',
            },
            id: 'divMain',
        },
        header: {
            style: {
                height: '100px',
                margin: '10px',
                border: '1px solid DeepPink',
                position: 'relative',
            },
            id: 'header',
            className: 'pagSections',
        },
        section: {
            style: {
                minHeight: '500px',
                margin: '10px',
                border: '1px solid Tomato',
                position: 'relative',
            },
            id: 'docmain',
            className: 'pagSections',
        },
        footer: {
            style: {
                height: '100px',
                margin: '10px',
                border: '1px solid green',
                position: 'relative',
            },
            id: 'footer',
            className: 'pagSections',
        },
    }

    let metaObj = {
        metaNames: [
            {name: 'description', content: 'a blog'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            ],
    };

    let linkObj = {
        id: 'azulCss',
        type: 'text/css',
        href: 'azulLib.css',
    }

    azul.init(pageObj);

    azul.addMeta(metaObj);

    azul.addLink(linkObj);

    let stylObj = {};
    azul.addStyles(stylObj);

//    azul.addScript('azulLib.js');


    let hdStyl = {
        color: 'MediumPurple',
        margin: 'auto',
        textAlign: 'center',
        padding: '0.5em',
    };

    let hdObj = {
        style: hdStyl,
        parent: azul.header,
        id: 'header',
        className: 'doch3',
        textContent: 'header title',
        typ: 'h3',
    }
    azul.addElement(hdObj);

    let hd2Obj = {
        style: hdStyl,
        parent: azul.doc,
        id: 'docmain',
        className: 'doch3',
        textContent: 'docmain',
        typ: 'h3',
    }
    azul.addElement(hd2Obj);

    let hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'footer',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    }
    azul.addElement(hdfooterObj);

    let elObj = {
        style: {
                minHeight: '100px',
                margin: '10px',
                border: '1px solid green',
        },
		id: 'ndiv',
        parent: azul.doc,
        typ: 'div',
    };
    let ndiv = azul.addElement(elObj);

	let svgObj = {
		typ: 'svg',
		style: {
			border: '1px solid purple',
		},
		id: 'svgEl1',
		width: '200',
		height: '200',
		viewport: '0 0 200 200',

	};

	const svgWid = new svgWidget;
	let svgEl = svgWid.createSvg(svgObj);

	ndiv.appendChild(svgEl);


	let menuObj = {
    	id: 'mainMenu',
		style: {
    		width: '300px',
    		minHeight: '500px',
    		margin: '10px',
    		border: '1px solid green',
    		position: 'absolute',
    		top: '50px',
   			left: 0,
    		zIndex: '1',
    		backgroundColor: 'white',
    		display: 'block',
		},
		items: ['blogA', 'blogB', 'blogC'],

	};
	const menuMain = new menuWidget;
	let menuDiv = menuMain.create(menuObj);

	azul.header.appendChild(menuDiv);

	let loginObj = {
    	id: 'login',
		style: {
    		width: '600px',
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
	const login = new loginWidget;
	let loginDiv = login.create(loginObj);

	azul.header.appendChild(loginDiv);

    document.body.appendChild(azul.divMain);
}
